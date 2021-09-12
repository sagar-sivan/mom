import React from 'react'

import { cusines_1, cusines_2, cusines_3, cusines_4, cusines_5, cusines_6 } from "./../../assets/images"

function HomeCuisine() {
    return (
        <div className="container home__cusines" data-aos="fade-up">
            <div className="home__cusines__text text-center">
                <h2>
                    <span>Food and Culture</span>
                    Select from a wide variety of Cusines
                </h2>
                <p>Costomize your weekly menu and enjoy delicious, healthy meals</p>
            </div>

            <div class="row mx-lg-2 justify-content-center">
                <div class="col-6 col-lg-4 mb-4">
                    <div class="food__select small">
                        <figure><img src={cusines_1} alt="Meals On Me" /></figure>
                        <label for="checkbox1">Indian cuisines</label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4">
                    <div class="food__select small">
                        <figure><img src={cusines_2} alt="Meals On Me" /></figure>
                        <label for="checkbox2">Arabic cuisines</label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4">
                    <div class="food__select small">
                        <figure><img src={cusines_3} alt="Meals On Me" /></figure>
                        <label for="checkbox3">International cuisines</label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4">
                    <div class="food__select small">
                        <figure><img src={cusines_4} alt="Meals On Me" /></figure>
                        <label for="checkbox3">Indian + Arabic + International</label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4">
                    <div class="food__select small">
                        <figure><img src={cusines_5} alt="Meals On Me" /></figure>
                        <label for="checkbox3">Wholesome meal plan</label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4">
                    <div class="food__select small">
                        <figure><img src={cusines_6} alt="Meals On Me" /></figure>
                        <label for="checkbox3">KETO meal plan</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeCuisine
