import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"
import Slider from "react-slick";

import { profile_1 } from "./../../assets/images"
import AddressAction from "./../../action/address_action"
import ProfileAction from "./../../action/profile_action"

const slider_settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
}

const ProfileBanner = () => {
    const dispatch = useDispatch()
    const { userData, customerAddress } = useSelector(state => state.profileReducer);

    const handleOpenAddAddress = (e) => {
        e.preventDefault()
        dispatch(AddressAction.openAddAddress(true))
    }
    const handleOpenEditProfile = (e) => {
        e.preventDefault()
        dispatch(ProfileAction.openEditProfile(true))
    }

    if (!isEmpty(userData)) {
        return (
            <div className="banner__profile" data-aos="fade-up">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-10 col-md-12 col-lg-5 col-xl-6">
                            <h2>We have spread some <strong>Happiness</strong></h2>
                        </div>

                        <div className="col-12 col-md-12 col-lg-7 col-xl-6">
                            <div className="profile__card">
                                <div className="profile__card__left profile__status status-red text-center">
                                    <figure className="profile__pic">
                                        <img src={profile_1} alt="Meals On Me" />
                                    </figure>
                                    <strong data-toggle="tooltipa" data-placement="bottom" title="Please edit your profile">
                                        <a href="" onClick={(e) => handleOpenEditProfile(e)}>Edit Profile</a>
                                    </strong>

                                </div>

                                <div className="profile__card__right">
                                    <h3>{userData.customerName}</h3>
                                    <p><span>Subscription ID: </span>{userData.customerReferenceNo}</p>
                                    <h4 className="profile__card__country">{userData.customerLocation}
                                        <strong data-toggle="tooltipa" data-placement="bottom" title="add new Address">
                                            <a href="#" onClick={(e) => handleOpenAddAddress(e)} className="btn__add-plan ml-2"></a>
                                        </strong>
                                    </h4>
                                    <Slider className="address-slide" {...slider_settings}>
                                        {
                                            customerAddress.map((item, index) => {
                                                return (
                                                    <div className="address-item">
                                                        <span>{item.addressName}</span>
                                                        <aside>
                                                            <p>Street: {item.address}<br />City: {item.locationName}<br />
                                                                State/province/area: {item.locationName}</p>
                                                        </aside>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className="address-item">
                                            <span>Address 1</span>
                                            <aside>
                                                <p>Street:Box No. 31200<br />City:Dubai<br />
                                                    State/province/area:Dubai</p>
                                            </aside>
                                        </div>

                                        <div className="address-item">
                                            <span>Address 1</span>
                                            <aside>
                                                <p>Street:Box No. 31200<br />City:Dubai<br />
                                                    State/province/area:Dubai</p>
                                            </aside>
                                        </div>

                                        <div className="address-item">
                                            <span>Address 1</span>
                                            <aside>
                                                <p>Street:Box No. 31200<br />City:Dubai<br />
                                                    State/province/area:Dubai</p>
                                            </aside>
                                        </div> */}
                                    </Slider>

                                    <ul>

                                        <li className="card-status">
                                            <span>Wallet</span>
                                            <a href="#">2 Meal</a>
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
            // <div className="banner__profile" data-aos="fade-up"   >
            //     <div className="container">
            //         <div className="row no-gutters">
            //             <div className="col-10 col-md-12 order-2 order-lg-1 col-lg-6">
            //                 <h2>We have spread some <strong>Happiness</strong></h2>
            //             </div>

            //             <div className="col-12 col-md-10 order-lg-2 col-lg-6">
            //                 <div className="profile__card">
            //                     <div className="profile__card__left profile__status status-red text-center">
            //                         <figure className="profile__pic">
            //                             <img src={profile_1} alt="Meals On Me" />
            //                         </figure>
            //                         <a href="javascript:void(0);">Edit Profile</a>
            //                     </div>

            //                     <div className="profile__card__right">
            //                         <h3>{userData.customerName}</h3>
            //                         <h4 className="profile__card__country">{userData.customerLocation}</h4>
            //                         <ul>
            //                             <li>
            //                                 <span>Address</span>
            //                                 <p>{userData.customerAddress}</p>
            //                             </li>


            //                             <li>
            //                                 <span>Subscription ID</span>
            //                                 <p>{userData.customerReferenceNo}</p>
            //                             </li>

            //                             <li className="card-status">
            //                                 <span>Payment Status</span>
            //                                 <p>{userData.paymentStatus}</p>
            //                             </li>
            //                         </ul>
            //                     </div>

            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    } else {
        return null
    }

}

export default ProfileBanner
