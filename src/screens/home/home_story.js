import React from 'react'

import { story_1, story_2, story_3, story_4, story_1_placeholder, story_2_placeholder, story_3_placeholder } from "./../../assets/images"

function HomeStory() {
    return (
        <div className="container home__story">
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-12 order-2 order-lg-1 col-lg-6  home__story__icons">
                    <ul>
                        <li>
                            <figure><img src={story_1} className="img-fluid" alt="Meals On Me" /></figure>
                            <span>Fresh Ingredients</span>
                        </li>

                        <li>
                            <figure><img src={story_2} className="img-fluid" alt="Meals On Me" /></figure>
                            <span>Balanced diet</span>
                        </li>

                        <li>
                            <figure><img src={story_3} className="img-fluid" alt="Meals On Me" /></figure>
                            <span>Hygienic Kitchen</span>
                        </li>

                        <li>
                            <figure><img src={story_4} className="img-fluid" alt="Meals On Me" /></figure>
                            <span>Experienced Chef</span>
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-md-10 order-lg-2 col-lg-6 home__story__text text-center" >
                    <h2 className="text-center"><span>Discover</span> Our story</h2>
                    <p>Make your month a little easier by planning all your meals at one time through Meals on Me. You can easily create your meal plan for the month and save time and money in the process by selecting from over 80 nutritionally flavour some balanced dishes.</p>
                    <a className="btn btn__started" href="#" role="button">Learn More</a>

                    <img src={story_1_placeholder} alt="Invest Qatar" className="home__story__img one" data-aos="fade-right" />
                    <img src={story_2_placeholder} alt="Invest Qatar" className="home__story__img two" data-aos="fade-left" />
                    <img src={story_3_placeholder} alt="Invest Qatar" className="home__story__img three" />
                </div>

            </div>
        </div>
    )
}

export default HomeStory
