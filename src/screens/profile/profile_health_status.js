import React from 'react'

import { profile_img_2 } from "./../../assets/images"

function ProfileHealthStatus() {
    return (
        <div className="container" data-aos="fade-up" >
            <h2 className="text-center mb-5 pb-5">
                <span>Update you health status</span>
                Do you have allergies
            </h2>

            <div className="skew-bg__grey__bottom" data-aos="fade-up" >
                <div className="profile__allergies">
                    <div className="row">
                        <figure className="col-12 col-lg-5">
                            <img src={profile_img_2} className="img-fluid" alt="Meals On Me" />
                        </figure>

                        <div className="col-12 col-lg-7">
                            <h4>Your Allergies</h4>

                            <div className="allergies__tab-menu">
                                <nav className="nav tab__menu__1" id="pills-tab" role="tablist">
                                    <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                        Vegetarian
                                    </a>
                                    <a className="nav-link" id="nav-result-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">
                                        Non Vegetarian
                                    </a>
                                </nav>

                                <a href="#" className="btn btn-primary btn__cm">Edit</a>
                            </div>

                            <div className="tab-content tab__content__1">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">

                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Egg </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Milk </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Milk Powder </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Sugar </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Cheese </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Butter </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Cream </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Margarine </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" disabled /> Pine Nuts </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" disabled /> Wheat </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" disabled /> Salt </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" disabled /> Pine Nuts </label>

                                </div>

                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Chicken </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Meat </label>
                                    <label className="select__style__1"> <input type="checkbox" className="select__input" /> Egg </label>
                                </div>
                            </div>

                            <div className="textarea__style__1 mt-4">
                                <textarea placeholder="Comment"></textarea>
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <a href="#" className="btn btn-primary btn__cm"> Submit </a>
                                <a href="#" className="btn btn-primary btn__cm"> Save </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHealthStatus
