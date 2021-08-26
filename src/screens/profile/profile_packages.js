import React from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux'
import { isEmpty } from "lodash"

import { profile_pack_1, profile_pack_2, profile_pack_3 } from "./../../assets/images"

const pack_slider_settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,

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
const ProfilePackages = () => {
    const { userData } = useSelector(state => state.profileReducer);
    if (!isEmpty(userData) && userData.customerPlanList && userData.customerPlanList.length > 0) {
        return (
            <div className="container" data-aos="fade-up" >

                <div className="skew-bg__grey__bottom" data-aos="fade-up" >
                    <div className="profile__pack__holder">
                        <div className="profile__pack">
                            <nav className="nav tab__menu__2" id="pills-tab" role="tablist">
                                {
                                    userData.customerPlanList.map((item, index) => <a className={`nav-link ${index == 0 ? "active" : ""}`} id={`nav-upcoming-tab-${index}`} data-toggle="tab" href={`#tab-${index}`} role="tab" aria-controls={`tab-${index}`} aria-selected={index == 0 ? true : false}>
                                        {item.planName}
                                    </a>)
                                }
                                {/* <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-1" aria-selected="true">
                                    Lunch only pack
                                </a>
                                <a className="nav-link" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false">
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
                                                    {/* <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">02 / 08 / 2021</p>
                                                            <span className="item__day">Su</span>
                                                            <figure className="item__img">
                                                                <img src={profile_pack_1} alt="Meals On Me" />
                                                            </figure>
                                                            <p className="item__text">Beef Salona with Brown Bulgur</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">03 / 08 / 2021</p>
                                                            <span className="item__day">Mo</span>
                                                            <figure className="item__img up-next">
                                                                <img src={profile_pack_2} alt="Meals On Me" />
                                                            </figure>
                                                            <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                                            <p>
                                                                <a href="#" className="item__btn">Change</a>
                                                                <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">03 / 08 / 2021</p>
                                                            <span className="item__day">Tu</span>
                                                            <figure className="item__img up-next">
                                                                <img src={profile_pack_3} alt="Meals On Me" />
                                                            </figure>
                                                            <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                                            <p>
                                                                <a href="#" className="item__btn">Change</a>
                                                                <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">02 / 08 / 2021</p>
                                                            <span className="item__day">We</span>
                                                            <figure className="item__img">
                                                                <img src={profile_pack_1} alt="Meals On Me" />
                                                            </figure>
                                                            <p className="item__text">Beef Salona with Brown Bulgur</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">03 / 08 / 2021</p>
                                                            <span className="item__day">Th</span>
                                                            <figure className="item__img up-next">
                                                                <img src={profile_pack_2} alt="Meals On Me" />
                                                            </figure>
                                                            <p className="item__text">Chicken Hari mirch with flex seed chapati</p>

                                                            <p>
                                                                <a href="#" className="item__btn">Change</a>
                                                                <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">03 / 08 / 2021</p>
                                                            <span className="item__day">Fr</span>
                                                            <figure className="item__img up-next">
                                                                <img src={profile_pack_3} alt="Meals On Me" />
                                                            </figure>
                                                            <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                                            <p>
                                                                <a href="#" className="item__btn">Change</a>
                                                                <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">04 / 08 / 2021</p>
                                                            <span className="item__day bg-grey">Sa</span>
                                                            <figure className="item__img"></figure>
                                                            <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="profile__pack__item">
                                                            <p className="item__date">04 / 08 / 2021</p>
                                                            <span className="item__day bg-grey">Su</span>
                                                            <figure className="item__img"></figure>
                                                            <p><a href="#" className="item__btn__large">Not Published</a></p>
                                                        </div>
                                                    </div> */}

                                                </Slider>

                                            </div>

                                        </div>
                                    )
                                })
                            }



                            {/* <div className="tab-pane fade" id="tab-20" role="tabpanel" aria-labelledby="tab-20">
                                <div className="profile__pack__top">
                                    <div className="profile__pack__left">
                                        <p className="profile__pack__calendar">
                                            <strong>Special plan</strong>
                                            Food Calendar
                                        </p>

                                        <a href="#" className="btn__menu__1">Manage menu</a>
                                    </div>

                                </div>

                                <div className="profile__pack__item__holder">

                                    <Slider className="pack-slider" {...pack_slider_settings}>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">02 / 08 / 2021</p>
                                                <span className="item__day">Su</span>
                                                <figure className="item__img">
                                                    <img src={profile_pack_1} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Beef Salona with Brown Bulgur</p>
                                            </div>

                                            <div className="profile__pack__item">

                                                <figure className="item__img">
                                                    <img src={profile_pack_1} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Beef Salona with Brown Bulgur</p>
                                            </div>

                                            <div className="profile__pack__item">

                                                <figure className="item__img">
                                                    <img src={profile_pack_1} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Beef Salona with Brown Bulgur</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">03 / 08 / 2021</p>
                                                <span className="item__day">Mo</span>
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_2} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                                <p>
                                                    <a href="#" className="item__btn">Change</a>
                                                    <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                </p>
                                            </div>

                                            <div className="profile__pack__item">
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_2} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            </div>

                                            <div className="profile__pack__item">
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_2} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">03 / 08 / 2021</p>
                                                <span className="item__day">Tu</span>
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_3} alt="Meals On Me" />
                                                </figure>
                                                <p>
                                                    <a href="#" className="item__btn">Change</a>
                                                    <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                </p>
                                            </div>

                                            <div className="profile__pack__item">
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_3} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">02 / 08 / 2021</p>
                                                <span className="item__day">We</span>
                                                <figure className="item__img">
                                                    <img src={profile_pack_1} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Beef Salona with Brown Bulgur</p>
                                            </div>
                                            <div className="profile__pack__item">
                                                <figure className="item__img">
                                                    <img src={profile_pack_1} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Beef Salona with Brown Bulgur</p>
                                            </div>
                                            <div className="profile__pack__item">
                                                <figure className="item__img">
                                                    <img src={profile_pack_1} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Beef Salona with Brown Bulgur</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">03 / 08 / 2021</p>
                                                <span className="item__day">Th</span>
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_2} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>

                                                <p>
                                                    <a href="#" className="item__btn">Change</a>
                                                    <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                </p>
                                            </div>

                                            <div className="profile__pack__item">
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_2} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>

                                                <p>
                                                    <a href="#" className="item__btn">Change</a>
                                                    <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">03 / 08 / 2021</p>
                                                <span className="item__day">Fr</span>
                                                <figure className="item__img up-next">
                                                    <img src={profile_pack_3} alt="Meals On Me" />
                                                </figure>
                                                <p className="item__text">Chicken Hari mirch with flex seed chapati</p>
                                                <p>
                                                    <a href="#" className="item__btn">Change</a>
                                                    <a href="#" className="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">04 / 08 / 2021</p>
                                                <span className="item__day bg-grey">Sa</span>
                                                <figure className="item__img"></figure>
                                                <p><a href="#" className="item__btn__large">Menu Available</a></p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="profile__pack__item">
                                                <p className="item__date">04 / 08 / 2021</p>
                                                <span className="item__day bg-grey">Su</span>
                                                <figure className="item__img"></figure>
                                                <p><a href="#" className="item__btn__large">Not Published</a></p>
                                            </div>
                                        </div>

                                    </Slider>

                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    } else {
        return null;
    }

}

export default ProfilePackages
