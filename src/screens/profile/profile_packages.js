import React from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux'
import { isEmpty } from "lodash"

import { lunch, dinner, brakefast, AMsnack, profile_2, profile_3, profile_4, profile_Icon_1 } from "./../../assets/images"

const NextArrow = (props) => {
    const { className, style, onClick, isPrimary } = props;
    console.log(props);
    const handleBtnClick = () => {
        var allButtons = document.querySelectorAll('.tab-pane.fade.show.active button[class^=new-btn-next]');
        console.log("allButtons", allButtons);
        for (var i = 0; i < allButtons.length; i++) {
            console.log("allButtons[i]", allButtons[i]);
            if (allButtons[i])
                allButtons[i].click()
        }
        if (onClick)
            onClick()
    }
    return (
        <button
            className="new-btn-next"
            style={{ ...style }}
            onClick={() => isPrimary ? handleBtnClick() : onClick && onClick()}
        >Next</button>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick, isPrimary } = props;
    const handleBtnClick = () => {
        var allButtons = document.querySelectorAll('.tab-pane.fade.show.active button[class^=new-btn-prev]');
        for (var i = 0; i < allButtons.length; i++) {
            console.log("allButtons[i]", allButtons[i]);
            if (allButtons[i])
                allButtons[i].click()
        }
        if (onClick)
            onClick()
    }
    return (
        <button
            className="new-btn-prev"
            style={{ ...style }}
            onClick={() => isPrimary ? handleBtnClick() : onClick && onClick()}
        >Prev</button>
    );
}
const planData = [
    {
        planName: "Lunch & Dinner Plan",
        planRows: [
            { image: profile_3, label: "Lunch" },
            { image: profile_4, label: "Dinner" }
        ]
    },
    {
        planName: "Lunch Plan",
        planRows: [
            { image: profile_3, label: "Lunch" }
        ]
    },
    {
        planName: "Dinner Plan",
        planRows: [
            { image: profile_4, label: "Dinner" }
        ]
    },
    {
        planName: "Calorie Counted Plans",
        planRows: [
            { image: profile_Icon_1, label: "Breakfast" },
            { image: profile_2, label: "AM Snack" },
            { image: profile_3, label: "Lunch" },
            { image: profile_2, label: "PM Snack" },
            { image: profile_4, label: "Dinner" },
        ]
    },
]
const pack_slider_settings = {

    dots: false,
    // arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: false,
    prevArrow: <PrevArrow isPrimary={true} />,
    nextArrow: <NextArrow isPrimary={true} />,

    responsive: [{
        breakpoint: 1220,
        settings: {
            slidesToShow: 5,
        }

    }, {
        breakpoint: 1000,
        settings: {
            slidesToShow: 4,
        }

    }, {
        breakpoint: 700,
        settings: {
            slidesToShow: 3,
        }

    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 450,
        settings: {
            slidesToShow: 1,
        }
    }]
}
const slider_settings = {

    dots: false,
    // arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [{
        breakpoint: 1220,
        settings: {
            slidesToShow: 5,
        }

    }, {
        breakpoint: 1000,
        settings: {
            slidesToShow: 4,
        }

    }, {
        breakpoint: 700,
        settings: {
            slidesToShow: 3,
        }

    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 450,
        settings: {
            slidesToShow: 1,
        }
    }]
}
const ProfilePackages = () => {
    const { userData } = useSelector(state => state.profileReducer);
    const { settings } = useSelector(state => state.commonReducer);
    const dishImageLocation = settings.find(item => item.pName == "Dish Image Location")?.pValue
    if (!isEmpty(userData) && userData.customerPlanList && userData.customerPlanList.length > 0) {
        return (
            <div className="container" data-aos="fade-up" >
                <div className="skew-bg__grey__bottom" data-aos="fade-up">
                    <div className="profile__pack__holder">
                        <div className="profile__pack">
                            <nav className="nav tab__menu__2" id="pills-tab" role="tablist">
                                {
                                    userData.customerPlanList.map((item, index) => {
                                        return (
                                            <a class={`nav-link ${index == 0 ? "active" : ""}`} id={`nav-tab-${index}`} data-toggle="tab" href={`#tab-${index}`} role="tab" aria-controls={`tab-${index}`} aria-selected="true">
                                                {item.planName}
                                            </a>
                                        )
                                    })
                                }
                                {/* <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-1" aria-selected="true">
                                    Lunch only pack
                                </a>
                                <a className="nav-link" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false">
                                    Lunch & Dinner plan
                                </a>
                                <a className="nav-link" id="nav-result-tab" data-toggle="tab" href="#tab-30" role="tab" aria-controls="tab-3" aria-selected="false">
                                    Special Pack
                                </a> */}
                            </nav>

                            <a href="#" className="btn__menu"><i>plate</i> New Menu Available</a>
                        </div>

                        <div className="tab-content tab__content__2">
                            {
                                userData.customerPlanList.map((item, index) => {
                                    return (
                                        <div className={`tab-pane fade ${index == 0 ? " show active" : ""}`} id={`tab-${index}`} role="tabpanel" aria-labelledby={`tab-${index}`}>
                                            <div className="profile__pack__top">
                                                <div className="profile__pack__left">
                                                    <p className="profile__pack__calendar">
                                                        <strong>Week shedule</strong>
                                                        Food Calendar
                                                    </p>

                                                    {/* <!-- <a href="#" className="btn__menu__1">Manage menu</a> --> */}
                                                </div>
                                            </div>

                                            <div className="profile__pack__item__holder">

                                                {/* <div className="row">
                                        <div className="col-12 col-lg-2"></div>
                                        <div className="col-12 col-lg-10 pack-button">
                                            <a href="javascript:void(0);" className="new-btn-prev">((((((</a>
                                            <a href="javascript:void(0);" className="new-btn-next">))))))</a>
                                        </div>
                                    </div> */}

                                                <div className="row">
                                                    <div className="col-12 col-lg-2">
                                                    </div>
                                                    <div className="col-12 col-lg-10">
                                                        <Slider className="pack-slider" {...pack_slider_settings} >
                                                            {
                                                                item.weeklyMenuList && item.weeklyMenuList.map((weekMenuItem, weekMenuIndex) => {
                                                                    return (
                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <p className="item__date">{weekMenuItem.menuDate}</p>
                                                                                <span className="item__day">{weekMenuItem.menuDay.substring(0, 2)}</span>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </Slider>
                                                    </div>
                                                </div>
                                                {
                                                    planData.find(planItem => planItem.planName == item.planName).planRows.map((planRowItem, planRowIndex) => {
                                                        //   return  item.weeklyMenuList && item.weeklyMenuList.map((weekMenuItem, weekMenuIndex) => {
                                                        //     return(

                                                        //     )
                                                        //         })
                                                        return (
                                                            <div className="row">
                                                                <div className="col-12 col-lg-2">
                                                                    <span className="profile__icons">
                                                                        <em><img src={planRowItem.image} /> </em>
                                                                        {planRowItem.label}
                                                                    </span>
                                                                </div>
                                                                <div className="col-12 col-lg-10">
                                                                    <Slider className="pack-slider" {...pack_slider_settings}>
                                                                        {
                                                                            item.weeklyMenuList && item.weeklyMenuList.map((weekMenuItem, weekMenuIndex) => {
                                                                                return (
                                                                                    <div>
                                                                                        {
                                                                                            weekMenuItem.weeklyMenuDishList && weekMenuItem.weeklyMenuDishList.map((weekDishItem, weekDishIndex) => {
                                                                                                return (
                                                                                                    <div className="profile__pack__item">
                                                                                                        <figure className="item__img">
                                                                                                            <img src={`${dishImageLocation}${weekDishItem.dishImageLocation}`} alt="Meals On Me" />
                                                                                                        </figure>

                                                                                                        <p className="item__text">
                                                                                                            <span>{weekDishItem.dishName}</span>
                                                                                                            <span className="item__text__round">x3</span>
                                                                                                        </p>
                                                                                                    </div>
                                                                                                )
                                                                                            })
                                                                                        }

                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }

                                                                        {/* <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img">
                                                                                    <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Beef Salona with Brown Bulgur</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                                                    <div className="up-next">
                                                                                        <span>Up next</span>
                                                                                    </div>
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img">
                                                                                    <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Beef Salona with Brown Bulgur</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                                                    <div className="item__btn__holder">
                                                                                        <a href="#" className="item__btn">Change</a>

                                                                                        <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                                            <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                                        </strong>
                                                                                    </div>
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                                            </div>
                                                                        </div> */}

                                                                    </Slider>


                                                                    {/* <Slider className="pack-slider" {...pack_slider_settings}>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img">
                                                                                    <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Beef Salona with Brown Bulgur</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                                                    <div className="up-next">
                                                                                        <span>Up next</span>
                                                                                    </div>
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img">
                                                                                    <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Beef Salona with Brown Bulgur</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                                                    <div className="item__btn__holder">
                                                                                        <a href="#" className="item__btn">Change</a>

                                                                                        <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                                            <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                                        </strong>
                                                                                    </div>
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                                            </div>
                                                                        </div>

                                                                    </Slider>


                                                                    <Slider className="pack-slider" {...pack_slider_settings}>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img">
                                                                                    <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Beef Salona with Brown Bulgur</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                                                    <div className="up-next">
                                                                                        <span>Up next</span>
                                                                                    </div>
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex chapati</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img">
                                                                                    <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Beef Salona with Brown Bulgur</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img up-next">
                                                                                    <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                                                    <div className="item__btn__holder">
                                                                                        <a href="#" className="item__btn">Change</a>
                                                                                        <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                                            <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                                        </strong>
                                                                                    </div>
                                                                                </figure>

                                                                                <p className="item__text">
                                                                                    <span>Chicken Hari mirch with flex seed</span>
                                                                                    <span className="item__text__round">x3</span>
                                                                                </p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div>
                                                                            <div className="profile__pack__item">
                                                                                <figure className="item__img"></figure>
                                                                                <p><a href="#" className="item__btn__large">Not Published</a></p>

                                                                                <div className="item__select">
                                                                                    <label>Location</label>
                                                                                    <select>
                                                                                        <option>AL Quoz </option>
                                                                                        <option>Bur Dubai</option>
                                                                                        <option>Jumeirah</option>
                                                                                        <option>Deira</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </Slider> */}
                                                                </div>
                                                            </div>)

                                                    })



                                                }


                                            </div>

                                        </div>
                                    )
                                })
                            }

                            {/* <div className="tab-pane fade show active" id="tab-10" role="tabpanel" aria-labelledby="tab-10">
                                <div className="profile__pack__top">
                                    <div className="profile__pack__left">
                                        <p className="profile__pack__calendar">
                                            <strong>Week shedule</strong>
                                            Food Calendar
                                        </p>

                                    </div>
                                </div>

                                <div className="profile__pack__item__holder">


                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings} >

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">02 / 08 / 2021</p>
                                                        <span className="item__day">Su</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Mo</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Tu</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">02 / 08 / 2021</p>
                                                        <span className="item__day">We</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Th</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Fr</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">04 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Sa</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">04 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Su</span>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-1.png" /> </em>
                                                Lunch
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>

                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>


                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>

                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>


                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                </div>

                            </div> */}

                            {/* <div className="tab-pane fade" id="tab-20" role="tabpanel" aria-labelledby="tab-20">
                                <div className="profile__pack__top">
                                    <div className="profile__pack__left">
                                        <p className="profile__pack__calendar">
                                            <strong>Week shedule</strong>
                                            Food Calendar
                                        </p>

                                    </div>
                                </div>

                                <div className="profile__pack__item__holder">


                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">02 / 08 / 2021</p>
                                                        <span className="item__day">Su</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Mo</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Tu</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">02 / 08 / 2021</p>
                                                        <span className="item__day">We</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Th</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Fr</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">04 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Sa</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">04 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Su</span>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-1.png" /> </em>
                                                Lunch
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>


                                            <Slider className="pack-slider" {...slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>


                                            <Slider className="pack-slider" {...slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-4.png" /> </em>
                                                Dinner
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>


                                            <Slider className="pack-slider" {...slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>


                                            <Slider className="pack-slider" {...slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>

                                                        <div className="item__select">
                                                            <label>Location</label>
                                                            <select>
                                                                <option>AL Quoz </option>
                                                                <option>Bur Dubai</option>
                                                                <option>Jumeirah</option>
                                                                <option>Deira</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                </div>

                            </div> */}

                            {/* <div className="tab-pane fade" id="tab-30" role="tabpanel" aria-labelledby="tab-30">
                                <div className="profile__pack__top">
                                    <div className="profile__pack__left">
                                        <p className="profile__pack__calendar">
                                            <strong>Special plan</strong>
                                            Food Calendar
                                        </p>

                                    </div>
                                </div>

                                <div className="profile__pack__item__holder">


                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">02 / 08 / 2021</p>
                                                        <span className="item__day">Su</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Mo</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Tu</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">02 / 08 / 2021</p>
                                                        <span className="item__day">We</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day">Th</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">03 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Fr</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">04 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Sa</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <p className="item__date">04 / 08 / 2021</p>
                                                        <span className="item__day bg-grey">Su</span>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-1.png" /> </em>
                                                Breakfast
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>

                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-2.png" /> </em>
                                                AM snack
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>

                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-3.png" /> </em>
                                                Lunch
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>

                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-2.png" /> </em>
                                                PM snack
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>

                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-2">
                                            <span className="profile__icons">
                                                <em><img src="../images/icons/profile-4.png" /> </em>
                                                Dinner
                                            </span>
                                        </div>
                                        <div className="col-12 col-lg-10">
                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>

                                            <Slider className="pack-slider" {...pack_slider_settings}>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_2.png" alt="Meals On Me" />
                                                            <div className="up-next">
                                                                <span>Up next</span>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img">
                                                            <img src="../images/placeholder/profile_pack_1.jpg" alt="Meals On Me" />
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Beef Salona with Brown Bulgur</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img up-next">
                                                            <img src="../images/placeholder/profile_pack_3.png" alt="Meals On Me" />

                                                            <div className="item__btn__holder">
                                                                <a href="#" className="item__btn">Change</a>
                                                                <strong data-toggle="tooltipa" data-placement="bottom" title="Cancel one day in advance">
                                                                    <a href="#" className="item__btn" data-toggle="modal" data-target=".login-form4">Cancel</a>
                                                                </strong>
                                                            </div>
                                                        </figure>

                                                        <p className="item__text">
                                                            <span>Chicken Hari mirch with flex seed chapati</span>
                                                            <span className="item__text__round">x3</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="profile__pack__item">
                                                        <figure className="item__img"></figure>
                                                        <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </div>
                                    </div>

                                </div>

                            </div> */}



                        </div>
                    </div>
                </div>

                {/* <div className="skew-bg__grey__bottom" data-aos="fade-up" >
                    <div className="profile__pack__holder">
                        <div className="profile__pack">
                            <nav className="nav tab__menu__2" id="pills-tab" role="tablist">
                                {
                                    userData.customerPlanList.map((item, index) => <a className={`nav-link ${index == 0 ? "active" : ""}`} id={`nav-upcoming-tab-${index}`} data-toggle="tab" href={`#tab-${index}`} role="tab" aria-controls={`tab-${index}`} aria-selected={index == 0 ? true : false}>
                                        {item.planName}
                                    </a>)
                                }
                            </nav>

                            <a href="#" className="btn__menu"><i>plate</i> New Menu Available</a>
                        </div>

                        <div className="tab-content tab__content__2">
                            {
                                userData.customerPlanList.map((item, index) => {

                                    return (
                                        <div className={`tab-pane fade ${index == 0 ? " show active" : ""}`} id={`tab-${index}`} role="tabpanel" aria-labelledby={`tab-${index}`}>
                                            <div className="profile__pack__top">
                                                <div className="profile__pack__left">
                                                    <p className="profile__pack__calendar">
                                                        <strong>Week shedule</strong>
                                                        Food Calendar
                                                    </p>

                                                    <a href="#" className="btn__menu__1">Manage menu</a>
                                                </div>

                                                <div className="profile__pack__right">
                                                    <span className="icon-date">August 2021</span>
                                                </div>
                                            </div>

                                            <div className="profile__pack__item__holder">

                                                <Slider className="pack-slider" {...pack_slider_settings}>
                                                    {
                                                        item.weeklyMenuList.map(weeklyItem => {
                                                            return weeklyItem.weeklyMenuDishList.map((dishItem, index) => {
                                                                return (
                                                                    <div>
                                                                        <div className="profile__pack__item">
                                                                            {
                                                                                index == 0 && <>
                                                                                    <p className="item__date">{weeklyItem.menuDate}</p>
                                                                                    <span className="item__day">{weeklyItem.menuDay.substring(0, 2)}</span>
                                                                                </>
                                                                            }
                                                                            <figure className="item__img">
                                                                                <img src={dishItem.dishImageLocation} alt="Meals On Me" />
                                                                            </figure>
                                                                            <p className="item__text">{dishItem.dishName}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })

                                                        })
                                                    }
                                                </Slider>

                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> */}

            </div>
        )
    } else {
        return null;
    }

}

export default ProfilePackages
