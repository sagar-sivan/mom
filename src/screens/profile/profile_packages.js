import React from 'react'
import Slider from "react-slick";

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
    return (
        <div class="container" /* data-aos="fade-up" */>

            <div class="skew-bg__grey__bottom" /* data-aos="fade-up" */>
                <div class="profile__pack__holder">
                    <div class="profile__pack">
                        <nav class="nav tab__menu__2" id="pills-tab" role="tablist">
                            <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-1" aria-selected="true">
                                Lunch only pack
                            </a>
                            <a class="nav-link" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false">
                                Special Pack
                            </a>
                        </nav>

                        <a href="#" class="btn__menu"><i>plate</i> New Menu Available</a>
                    </div>

                    <div class="tab-content tab__content__2">

                        <div class="tab-pane fade show active" id="tab-10" role="tabpanel" aria-labelledby="tab-10">
                            <div class="profile__pack__top">
                                <div class="profile__pack__left">
                                    <p class="profile__pack__calendar">
                                        <strong>Week shedule</strong>
                                        Food Calendar
                                    </p>

                                    <a href="#" class="btn__menu__1">Manage menu</a>
                                </div>

                                <div class="profile__pack__right">
                                    <span class="icon-date">August 2021</span>
                                </div>
                            </div>

                            <div class="profile__pack__item__holder">

                                <Slider class="pack-slider" {...pack_slider_settings}>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">02 / 08 / 2021</p>
                                            <span class="item__day">Su</span>
                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Mo</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Tu</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_3} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">02 / 08 / 2021</p>
                                            <span class="item__day">We</span>
                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Th</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>

                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Fr</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_3} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">04 / 08 / 2021</p>
                                            <span class="item__day bg-grey">Sa</span>
                                            <figure class="item__img"></figure>
                                            <p><a href="#" class="item__btn__large">Menu Available</a></p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">04 / 08 / 2021</p>
                                            <span class="item__day bg-grey">Su</span>
                                            <figure class="item__img"></figure>
                                            <p><a href="#" class="item__btn__large">Not Published</a></p>
                                        </div>
                                    </div>

                                </Slider>

                            </div>

                        </div>

                        <div class="tab-pane fade" id="tab-20" role="tabpanel" aria-labelledby="tab-20">
                            <div class="profile__pack__top">
                                <div class="profile__pack__left">
                                    <p class="profile__pack__calendar">
                                        <strong>Special plan</strong>
                                        Food Calendar
                                    </p>

                                    <a href="#" class="btn__menu__1">Manage menu</a>
                                </div>

                            </div>

                            <div class="profile__pack__item__holder">

                                <Slider class="pack-slider" {...pack_slider_settings}>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">02 / 08 / 2021</p>
                                            <span class="item__day">Su</span>
                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>

                                        <div class="profile__pack__item">

                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>

                                        <div class="profile__pack__item">

                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Mo</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>

                                        <div class="profile__pack__item">
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                        </div>

                                        <div class="profile__pack__item">
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Tu</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_3} alt="Meals On Me" />
                                            </figure>
                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>

                                        <div class="profile__pack__item">
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_3} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">02 / 08 / 2021</p>
                                            <span class="item__day">We</span>
                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>
                                        <div class="profile__pack__item">
                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>
                                        <div class="profile__pack__item">
                                            <figure class="item__img">
                                                <img src={profile_pack_1} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Beef Salona with Brown Bulgur</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Th</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>

                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>

                                        <div class="profile__pack__item">
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_2} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>

                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">03 / 08 / 2021</p>
                                            <span class="item__day">Fr</span>
                                            <figure class="item__img up-next">
                                                <img src={profile_pack_3} alt="Meals On Me" />
                                            </figure>
                                            <p class="item__text">Chicken Hari mirch with flex seed chapati</p>
                                            <p>
                                                <a href="#" class="item__btn">Change</a>
                                                <a href="#" class="item__btn" data-toggle="tooltipa" data-placement="bottom" title="Cancel two days in advance">Cancel</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">04 / 08 / 2021</p>
                                            <span class="item__day bg-grey">Sa</span>
                                            <figure class="item__img"></figure>
                                            <p><a href="#" class="item__btn__large">Menu Available</a></p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="profile__pack__item">
                                            <p class="item__date">04 / 08 / 2021</p>
                                            <span class="item__day bg-grey">Su</span>
                                            <figure class="item__img"></figure>
                                            <p><a href="#" class="item__btn__large">Not Published</a></p>
                                        </div>
                                    </div>

                                </Slider>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilePackages
