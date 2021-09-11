import React from 'react'

import Header from "./../../components/header"
import Footer from "./../../components/footer"
import { faqimg_1, faq_banner } from "./../../assets/images"

const FaqScreen = () => {
    return (
        <>
            <Header />
            <div className="main__content about">
                <div className="banner__holder" data-aos="fade-up">
                    <div className="banner__inner">
                        <h2>FAQ</h2>
                        <img src={faq_banner} className="img-fluid" alt="Meals On Me" />
                    </div>
                </div>


                <div className="absolute-img">
                    <img className="faq_img_1" data-aos="fade-left" src={faqimg_1} />
                </div>


                <div className="container" data-aos="fade-up">

                    <div className="col-md-12 col-sm-12 col-lg-12 contact-page py-5">
                        <div className="mom-tab py-5">


                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className="more-less bi bi-dash-lg"></i><span>What Is MOMs?</span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse show p-3" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body">
                                            Its as easy as selecting your package and preferences. We handle the planning, shopping and cooking, using the highest quality ingredients. Our delivery team are dispatched to deliver your day’s meals. Spend more time doing the things you love and less time on your meal prep.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <i className="more-less bi bi-plus-lg"></i><span>How Does MOMs Work?</span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse p-3" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <i className="more-less bi bi-plus-lg"></i><span>What Makes MOMs Different?</span>
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse p-3" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default FaqScreen
