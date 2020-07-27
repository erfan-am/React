import React, { Component } from 'react'
import './Describe.scss'
import { connect } from 'react-redux';
import {describeClose} from '../../redux/Add/Add-action'
 class Describe extends Component {
    render() {
        return (
            <div  className="describe" >
                <span className="remove" onClick={this.props.describeClose}>X</span>
                <div className="describe-items">
                    <div className="describe-item" id="oneitem">     
                    <div className="content-item">
                        <h5>ما دقیقا چیکار می کنیم؟ <i className="fa fa-users"></i></h5>
                        <p>تیم ما بخش اعظم تلاشش در جهت آگاهی شما در زمینه های مختلف طراحی  اپلیکیشان های تحت وبه</p>
                    </div>                  
                   </div>
                    <div className="describe-item" id="towitem">
                    <div className="content-item">
                        <h5>کار دیگه ای که ما انجام میدیم چیه؟ <i className="fa fa-handshake-o"></i></h5>
                        <p>بچه های تیم ما در کنار اطلاع رسانی به شما می تونن سفارش هاتون ، در زمینه طراحی وب سایت  مورد نظرتون،در
                        کمترین زمان ممکن به شما تحویل بدن </p>
                    </div>
                    </div>
                    <div className="describe-item" id="towthree">
                    <div className="content-item">
                        <h5>50siteیعنی چی<i className="fa fa-tag"></i></h5>
                        <p>اسم سایت ما از روی اسم یک گروه موسیقی به نام فیفتی سنت گرفته شده و خیلی معنی فلسفی خاصی نداره ،اما ویژگی خوبی که داره اینه که هیچوقت از یاد نمیره  </p>
                    </div>
                    </div>      
                </div>              
            </div>
        )

    }
}

export default  connect(null,{describeClose})(Describe)