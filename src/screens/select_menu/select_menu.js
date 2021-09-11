import React, { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import Slider from "react-slick";
import moment from "moment"
import { isEmpty, some } from "lodash"

import LoaderAction from '../../action/loader_action';
import CommonAction from '../../action/common_action';
import AddressAction from '../../action/address_action';
import { urlConfig, api_url } from "../../http/apiConfig"
import { networkRequest } from "../../http/api"
import { lunch, dinner, brakefast, AMsnack, profile_2 } from "./../../assets/images"

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    console.log(props);
    const handleBtnClick = () => {
        var allButtons = document.querySelectorAll('button[class^=new-btn-next]');
        for (var i = 0; i < allButtons.length; i++) {
            console.log("allButtons[i]", allButtons[i]);
            allButtons[i].click()
        }
        if (onClick)
            onClick()
    }
    return (
        <button
            className="new-btn-next"
            style={{ ...style }}
            onClick={() => handleBtnClick()}
        >Next</button>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    const handleBtnClick = () => {
        var allButtons = document.querySelectorAll('button[class^=new-btn-prev]');
        for (var i = 0; i < allButtons.length; i++) {
            console.log("allButtons[i]", allButtons[i]);
            allButtons[i].click()
        }
        if (onClick)
            onClick()
    }
    return (
        <button
            className="new-btn-prev"
            style={{ ...style }}
            onClick={() => handleBtnClick()}
        >Next</button>
    );
}
const planData = [
    {
        planName: "Lunch & Dinner Plan",
        planRows: [
            { image: lunch, label: "Lunch" },
            { image: dinner, label: "Dinner" }
        ]
    },
    {
        planName: "Lunch Plan",
        planRows: [
            { image: lunch, label: "Lunch" }
        ]
    },
    {
        planName: "Dinner Plan",
        planRows: [
            { image: dinner, label: "Dinner" }
        ]
    },
    {
        planName: "Calorie Counted Plans",
        planRows: [
            { image: brakefast, label: "Breakfast" },
            { image: AMsnack, label: "AM Snack" },
            { image: lunch, label: "Lunch" },
            { image: profile_2, label: "PM Snack" },
            { image: dinner, label: "Dinner" },
        ]
    },
]
const pack_slider_settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: true
        }
    }]
}
Modal.setAppElement('body');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const imageUrl = "http://mealsuae-001-site1.itempurl.com/Images/Plan/"

const SelectMenu = () => {
    const dispatch = useDispatch()
    const { loginData } = useSelector(state => state.userReducer);
    const { menu_component, settings } = useSelector(state => state.commonReducer);


    console.log(":menu_component", menu_component);
    const [planName, setPlanName] = useState("")
    const [planId, setPlanId] = useState("")
    const [menuList, setMenuList] = useState([])
    const [dishCount, setDishCount] = useState({})
    const [confirmValidate, setConfirmValidate] = useState(false)
    useEffect(() => {
        if (menu_component)
            getMenuList()
    }, [menu_component])
    const getMenuList = async () => {
        try {
            dispatch(LoaderAction.showLoader())
            const url = `${api_url}${urlConfig.getWeeklyPlanByCustomerPlanAndCuisineId}`;
            const data = {
                "OrderId": 3,
                "CustomerId": 1,
                "planId": 1,
                "CuisineId": 1
            }
            const result = await networkRequest({ url, method: "POST", data })
            console.log("RESULT====>0", result);
            if (result.responseCode == 0) {
                let menuList = []
                let dishCount = {}
                let planName = "", planId = ""
                result.weeklyMenuPlanOutputList.forEach(item => {
                    planName = item.planName
                    planId = item.planId
                    item.weeklyMenuWeekOutputList.forEach(item1 => {
                        item1.weeklyMenuCuisineOutputList.forEach(item2 => {
                            menuList.push(...item2.weeklyMenuDaysOutputList)
                        })
                    })
                });
                settings.find(item => item.pValue == planId)?.pValueDetails.forEach((item, index) => {
                    menuList.map((menuItem, menuIndex) => {
                        menuItem.weeklyMenuDishOutputList.map((dishItem, dishIndex) => {
                            dishCount[`${item.id}_${menuIndex}_${dishIndex}`] = 0
                        })
                    })
                })
                setPlanName(planName)
                setPlanId(planId)
                setDishCount(dishCount)
                setMenuList(menuList)
            }
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const handleIncrement = (index) => {
        if (dishCount[index]) {
            dishCount[index]++
        } else {
            dishCount[index] = 1
        }
        setConfirmValidate(false)
        setDishCount({ ...dishCount })
    }
    const handleDecrement = (index) => {
        if (dishCount[index]) {
            dishCount[index]--
        }
        setConfirmValidate(false)
        setDishCount({ ...dishCount })
    }
    const handleEmptyCheck = () => {
        let isEmpty = Object.values(dishCount).some(el => el == 0);
        console.log("HANDLE EMPRT SDASD", isEmpty);
    }
    const handleSaveMenu = async () => {
        if (!Object.values(dishCount).some(el => el == 0) || confirmValidate) {
            updateCustomMenu()
        } else {
            setConfirmValidate(true)
        }
    }
    const updateCustomMenu = async () => {
        try {
            dispatch(LoaderAction.showLoader())
            let APICustomerMenuDtlInputList = []
            const CustomerId = localStorage.getItem("customerId")
            Object.keys(dishCount).forEach(item => {
                if (dishCount[item] != 0) {
                    const [TimeType, menuIndex, dishIndex] = item.split("_")
                    console.log("item", item);
                    console.log("menuIndex", menuIndex);
                    console.log("dishIndex", dishIndex);
                    let obj = {
                        MenuDtlId: menuList[menuIndex].weeklyMenuDishOutputList[dishIndex].menuDtlId,
                        DishId: menuList[menuIndex].weeklyMenuDishOutputList[dishIndex].dishId,
                        SnackId: menuList[menuIndex].weeklyMenuDishOutputList[dishIndex].snackId,
                        CustomerId,
                        TimeType
                    }
                    APICustomerMenuDtlInputList.push(obj)
                }

            })
            console.log("APICustomerMenuDtlInputList=>>", APICustomerMenuDtlInputList);
            const data = {
                APICustomerMenuDtlInputList
            }
            const url = `${api_url}${urlConfig.updateCustomerMenu}`;
            const result = await networkRequest({ url, method: "POST", data })
            if (result.responseCode == 0) {
                setPlanName("")
                setPlanId("")
                setMenuList([])
                setDishCount({})
                setConfirmValidate(false)
                dispatch(CommonAction.handleMenuComponent(false))
            }
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    console.log("menuList===>", menuList);
    console.log("dishCount===>", dishCount);
    if (!isEmpty(menuList)) {
        return (
            <>
                <Modal
                    isOpen={menu_component}
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    style={customStyles}
                    overlayClassName=" chooseplan"
                // contentLabel="Example Modal"
                >
                    <div className="modal1 fade show">
                        <div className="container-fluid modal-dialog modal-xl w-100">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <h5 className="modal-title text-center select_menu_1h">Please Select your menu</h5>
                                <div className="modal-body">
                                    <div className="row d-flex- mx-auto">
                                        <div className="col-12 text-center"><h3>{planName}</h3></div>
                                        {/* <div className="col-12 text-center"><h4>Lunch and Dinner Plan</h4></div> */}
                                    </div>


                                    <div className="row mx-auto py-4 text-center profile__pack__item__holder">


                                        <div className="col-12 ">
                                            {/* <a href="javascript:void(0);"  id="prev_slider" className="new-btn-prev">((((((</a>
                                        <a href="javascript:void(0);"  id="next_slider" className="new-btn-next">))))))</a> */}

                                            <Slider className="pack-slider col-10 offset-md-2  pt-5r choose-plan-date-navigation" {...pack_slider_settings}>
                                                {
                                                    [...menuList, ...menuList].map(item => {
                                                        return (<div>
                                                            <div className="profile__pack__item">
                                                                <p className="item__date">{moment(item.menuDate).format("DD/MM/YYY")}</p>
                                                                <span className="item__day">{item.dayName.substring(0, 2)}</span>
                                                            </div>
                                                        </div>)
                                                    })
                                                }
                                            </Slider>
                                            {
                                                settings.find(item => item.pValue == planId)?.pValueDetails.map((item, index) => {
                                                    return (
                                                        <>
                                                            <div className="col-2 pt-5 float-left">
                                                                <div className="foodtime-icon item__btn">
                                                                    <img src={item.image} />{item.name}
                                                                </div>
                                                            </div>
                                                            <Slider className="pack-slider col-10 float-left pt-4" {...pack_slider_settings} >
                                                                {
                                                                    [...menuList, ...menuList].map((menuItem, menuIndex) => {
                                                                        return (
                                                                            <div>
                                                                                <div className="col plan_modal-item_box">
                                                                                    {
                                                                                        menuItem.weeklyMenuDishOutputList.map((dishItem, dishIndex) => {
                                                                                            return (
                                                                                                <div className="card plan-modal-body">
                                                                                                    <div className="text-item">
                                                                                                        <h3>{dishItem.dishName}</h3>
                                                                                                    </div>
                                                                                                    <div className="quantity-check">
                                                                                                        <div className="input-group input-number-group">
                                                                                                            {/* <input className="input-number" type="number" value="1" min="0" max="1000" /> */}
                                                                                                            <label className="input-number">{dishCount[`${item.id}_${menuIndex}_${dishIndex}`]}</label>

                                                                                                            <div className="input-group-button">
                                                                                                                <button onClick={() => handleDecrement(`${item.id}_${menuIndex}_${dishIndex}`)} className="input-number-decrement"><i className="bi bi-dash-square"></i></button>
                                                                                                            </div>

                                                                                                            <div className="input-group-button">
                                                                                                                <button onClick={() => handleIncrement(`${item.id}_${menuIndex}_${dishIndex}`)} className="input-number-increment"><i className="bi bi-plus-square "></i></button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            )
                                                                                        })
                                                                                    }

                                                                                    {/* <div className="location-modal card plan-modal-body">
                                                                                        <div className="input-group-button p-2">
                                                                                            <button onClick={() => handleOpenAddAddress()} className="input-number-increment"><i className="bi bi-plus-square "></i></button>
                                                                                        </div>
                                                                                        <select className="custom-select " id="inlineFormCustomSelect">
                                                                                            <option selected>Choose..</option>
                                                                                            <option value="1">Al Barsha</option>
                                                                                            <option value="2">Marina</option>
                                                                                            <option value="2">Jumeira</option>
                                                                                            <option value="2">JLT</option>
                                                                                            <option value="2">Umm Suquim </option>
                                                                                            <option value="2">Karama</option>
                                                                                        </select>
                                                                                    </div> */}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </Slider>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                    <div className="row mx-auto py-4 text-center">
                                        <div className="col-6 offset-col-md-4 mx-auto">
                                            {
                                                confirmValidate && <div className="alert alert alert-danger" role="alert">
                                                    You did’t selected your dish! if don’t want to select now please proceed
                                                </div>
                                            }

                                            <button onClick={() => handleSaveMenu()} type="button" className="btn btn-primary btn-md btn__shadow-red py-3" data-toggle="modal" data-target=".sucssesmenu">Save menu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </>
        )
    } else {
        return null
    }
}

export default SelectMenu
