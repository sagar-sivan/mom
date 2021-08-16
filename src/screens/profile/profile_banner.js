import React from 'react'

import { profile_1 } from "./../../assets/images"

const ProfileBanner = () => {
    return (
        <div class="banner__profile" /* data-aos="fade-up" */  >
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-10 col-md-12 order-2 order-lg-1 col-lg-6">
                        <h2>We have spread some <strong>Happiness</strong></h2>
                    </div>

                    <div class="col-12 col-md-10 order-lg-2 col-lg-6">
                        <div class="profile__card">
                            <div class="profile__card__left profile__status status-red text-center">
                                <figure class="profile__pic">
                                    <img src={profile_1} alt="Meals On Me" />
                                </figure>
                                <a href="javascript:void(0);">Edit Profile</a>
                            </div>

                            <div class="profile__card__right">
                                <h3>Ahmed sam</h3>
                                <h4 class="profile__card__country">Dubai Marina</h4>
                                <ul>
                                    <li>
                                        <span>Edit Address</span>
                                        <p>Street:Box No. 31200</p>
                                    </li>

                                    <li>
                                        <span>Add Address</span>
                                        <p>City:Dubai<br />
                                            State/province/area:Dubai</p>
                                    </li>

                                    <li>
                                        <span>Subscription ID</span>
                                        <p>2144</p>
                                    </li>

                                    <li class="card-status">
                                        <span>Payment Status</span>
                                        <p>Not paid</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBanner
