import React, { Component } from 'react'
import './Intertaiment.scss';
import {Link} from 'react-router-dom'
export default class Intertaiment extends Component {   
    render() {
        return (
            <div className="inetrtaimnet">
             <Link data-aos="fade-right"  to="/news" id="news" className="cartt">
                    <img className="cart-image" alt="img" src={require('../../assets/profile.jpg')} />
                    <div className="cart-content">
                        <h2>خبر های روز و مقالات</h2>
                        <p> با ما بروز باشید و از مطالب روز دنیای طراحی وب آگاه</p>
                    </div>
                </Link>    
                <Link data-aos="fade-right" data-aos="fade-right" to="/" id="sell" className="cartt">
                <img className="cart-image"  alt="img" src={require('../../assets/name.png')} />
                    <div className="cart-content">
                        <h2>با خیال راحت سفارش دهید </h2>
                        <p>برنامه نویسان ما با آگاهی از تمامی مسائل روز طراحی وب پروژه های شما را خلق خواهند کرد</p>
                    </div>
                </Link>
                <Link data-aos="fade-right"  to="/" id="front&back" className="cartt">
                <img className="cart-image" src={require('../../assets/nav.jpg')} alt="img" />
                    <div className="cart-content">
                        <h2>Back-end & Front-end</h2>
                        <p>انجام کار های مجزا در قسمت های فرانت و بک اند وب سایت ها</p>
                    </div>
                </Link>
                     
            </div>
        )
    }
}

