import React from 'react'

import { profile_img_2 } from "./../../assets/images"

function ProfileHealthStatus() {
    return (
        <div class="container" /* data-aos="fade-up" */>
            <h2 class="text-center mb-5 pb-5">
                <span>Update you health status</span>
                Do you have allergies
            </h2>

            <div class="skew-bg__grey__bottom"/*  data-aos="fade-up" */>
                <div class="profile__allergies">
                    <div class="row">
                        <figure class="col-12 col-lg-5">
                            <img src={profile_img_2} class="img-fluid" alt="Meals On Me" />
                        </figure>

                        <div class="col-12 col-lg-7">
                            <h4>Your Allergies</h4>

                            <div class="allergies__tab-menu">
                                <nav class="nav tab__menu__1" id="pills-tab" role="tablist">
                                    <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                        Vegetarian
                                    </a>
                                    <a class="nav-link" id="nav-result-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">
                                        Non Vegetarian
                                    </a>
                                </nav>

                                <a href="#" class="btn btn-primary btn__cm">Edit</a>
                            </div>

                            <div class="tab-content tab__content__1">
                                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">

                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Egg </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Milk </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Milk Powder </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Sugar </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Cheese </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Butter </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Cream </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Margarine </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" disabled /> Pine Nuts </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" disabled /> Wheat </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" disabled /> Salt </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" disabled /> Pine Nuts </label>

                                </div>

                                <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Chicken </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Meat </label>
                                    <label class="select__style__1"> <input type="checkbox" class="select__input" /> Egg </label>
                                </div>
                            </div>

                            <div class="textarea__style__1 mt-4">
                                <textarea placeholder="Comment"></textarea>
                            </div>

                            <div class="d-flex justify-content-between mt-4">
                                <a href="#" class="btn btn-primary btn__cm"> Submit </a>
                                <a href="#" class="btn btn-primary btn__cm"> Save </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHealthStatus
