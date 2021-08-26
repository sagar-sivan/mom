import React from 'react'

const ProfileTodayDishes = () => {
    return (
        <div className="container">
            <div className="today-dish">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-5 today-dish__left">
                        <div className="today-dish__left__content">
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

                    <div className="col-12 col-lg-7 today-dish__right">
                        <span className="corner-text">Dinner</span>
                        <section>
                            <h3>Your Dish comming today</h3>
                            <h4>Tandoori chicken</h4>
                            <ul>
                                <li><span>Order Number <strong>3324</strong></span> <span className="icon-date">31 July 2021</span></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTodayDishes
