import React from 'react'

const ProfileTodayDishes = () => {
    return (
        <div class="container">
            <div class="today-dish">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-5 today-dish__left">
                        <div class="today-dish__left__content">
                            <table>
                                <tr>
                                    <td><span>Ingrident</span></td>
                                    <td colspan="2"><span>Cusine</span></td>
                                </tr>
                                <tr>
                                    <td>Pepper</td>
                                    <td>Indian Cusine</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Egg</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Masala Rost </td>
                                    <td></td>
                                    <td><strong>120 KCal</strong></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="col-12 col-lg-7 today-dish__right">
                        <span class="corner-text">Dinner</span>
                        <section>
                            <h3>Your Dish comming today</h3>
                            <h4>Tandoori chicken</h4>
                            <ul>
                                <li><span>Order Number <strong>3324</strong></span> <span class="icon-date">31 July 2021</span></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTodayDishes
