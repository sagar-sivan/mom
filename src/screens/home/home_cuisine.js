import React from 'react'

import { cusines_1, cusines_2, cusines_3, cusines_4, cusines_5, cusines_6 } from "./../../assets/images"

function HomeCuisine() {
    return (
        <div className="container home__cusines">
            <div className="home__cusines__text text-center">
                <h2>
                    <span>Food and Culture</span>
                    Select from a wide variety of Cusines
                </h2>
                <p>Costomize your weekly menu and enjoy delicious, healthy meals</p>
            </div>

            <div className="row mx-lg-2 justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                    <div className="food__select small">
                        <figure><img src={cusines_1} alt="Meals On Me" /></figure>
                        <label for="checkbox1">Indian cuisines</label>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                    <div className="food__select small">
                        <figure><img src={cusines_2} alt="Meals On Me" /></figure>
                        <label for="checkbox2">Arabic cuisines</label>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                    <div className="food__select small">
                        <figure><img src={cusines_3} alt="Meals On Me" /></figure>
                        <label for="checkbox3">International cuisines</label>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                    <div className="food__select small">
                        <figure><img src={cusines_4} alt="Meals On Me" /></figure>
                        <label for="checkbox3">Indian + Arabic + International</label>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                    <div className="food__select small">
                        <figure><img src={cusines_5} alt="Meals On Me" /></figure>
                        <label for="checkbox3">Wholesome meal plan</label>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                    <div className="food__select small">
                        <figure><img src={cusines_6} alt="Meals On Me" /></figure>
                        <label for="checkbox3">KETO meal plan</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeCuisine
