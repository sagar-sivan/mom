import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from "lodash"

import { profile_1 } from "./../../assets/images"

const ProfileBanner = () => {
    const { userData } = useSelector(state => state.profileReducer);
    if (!isEmpty(userData)) {
        return (
            <div className="banner__profile" data-aos="fade-up"   >
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-10 col-md-12 order-2 order-lg-1 col-lg-6">
                            <h2>We have spread some <strong>Happiness</strong></h2>
                        </div>

                        <div className="col-12 col-md-10 order-lg-2 col-lg-6">
                            <div className="profile__card">
                                <div className="profile__card__left profile__status status-red text-center">
                                    <figure className="profile__pic">
                                        <img src={profile_1} alt="Meals On Me" />
                                    </figure>
                                    <a href="javascript:void(0);">Edit Profile</a>
                                </div>

                                <div className="profile__card__right">
                                    <h3>{userData.customerName}</h3>
                                    <h4 className="profile__card__country">{userData.customerLocation}</h4>
                                    <ul>
                                        <li>
                                            <span>Address</span>
                                            <p>{userData.customerAddress}</p>
                                        </li>

                                        {/* <li>
                                            <span>Add Address</span>
                                            <p>City:Dubai<br />
                                                State/province/area:Dubai</p>
                                        </li> */}

                                        <li>
                                            <span>Subscription ID</span>
                                            <p>{userData.customerReferenceNo}</p>
                                        </li>

                                        <li className="card-status">
                                            <span>Payment Status</span>
                                            <p>{userData.paymentStatus}</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default ProfileBanner
