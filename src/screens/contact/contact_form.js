import React from 'react'

import { ab_red_box_absolute3, ab_red_box_absolute4, ab_red_box_absolute2, ab_red_box_absolute1 } from "./../../assets/images"

const ContactForm = () => {
    return (
        <div class="col-md-12 col-sm-12 col-lg-12 contact-page py-5">
            <div class="skew-bg__grey__top" data-aos="fade-up">

                <div class="row m-3 m-sm-2">
                    <div class="col-md-12 col-12 contact-form-ab-mom">
                        <div class="red-box-absolute-img">
                            <img class="red-absoluteimg3" data-aos="fade-up-right" src={ab_red_box_absolute3} />
                            <img class="red-absoluteimg4" data-aos="fade-up-right" src={ab_red_box_absolute4} />
                        </div>

                        <div class="col-md-6 float-left" data-aos="fade-up">
                            <div class="form-group">
                                <label for="exampleInputFirstname1">First Name</label>
                                <input type="text" class="form-control" id="exampleInputFirstname1" aria-describedby="Firstname" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputLastname1">Last Name</label>
                                <input type="text" class="form-control" id="exampleInputLastname1" aria-describedby="Lastname" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="validationTooltip04">Country</label>
                                <select class="custom-select" id="validationTooltip04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>United Arab Emirates</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" class="form-label">Write Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>

                        </div>
                        <div class="col-md-6 float-left red-box-position-9" data-aos="fade-up">
                            <div class="d-block">
                                <div class="red-box-absolute-img">
                                    <img class="red-absoluteimg1" src={ab_red_box_absolute1} data-aos="fade-up-left" />
                                    <img class="red-absoluteimg2" src={ab_red_box_absolute2} data-aos="fade-up-left" />
                                    <img class="red-absoluteimg3" src={ab_red_box_absolute3} data-aos="fade-up-right" />

                                </div>

                                <div class="red-box-contractus" data-aos="fade-up">
                                    <ul>
                                        <li data-aos="fade-up"><i class="bi bi-telephone-fill"></i><span> +971508973952</span> </li>
                                        <li data-aos="fade-up"><i class="bi bi-envelope-fill"></i><span> care@hellomealsonme.com</span></li>
                                        <li data-aos="fade-up"><i class="bi bi-geo-alt-fill"></i ><span>AL Quoz Industrial
                                            Area 4 Al Asayel
                                            street road 318 warehouse 4,
                                            Dubai, UAE</span></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm
