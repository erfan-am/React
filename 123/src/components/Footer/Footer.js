import React, { Component } from 'react'
import './Footer.scss';
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <ul className="media">
                      <a href="mailto:erfanam582@gmail.com" className="media-item"><i className="fa fa-envelope "></i></a>
                      {/* <a to="#" className="media-item"><i className="fa fa-youtube "></i></a> */}
                      <a  href="https://github.com/erfan-am" target="blank" className="media-item"><i className="fa fa-github "></i></a>
                      <a   target="blank" href="https://t.me/fiftysite" className="media-item"><i className="fa fa-telegram  "></i></a>
                      <a  target="blank"  href="https://www.instagram.com/50site/" className="media-item"><i className="fa fa-instagram "></i></a>
                    </ul>
                    <ul className="details">
                      <li>  50site_Team Email <i className="fa fa-envelope"></i>
                      <a href="mailto:erfanam582@gmail.com"  target="blank" ></a></li>
                       <li> Phone <i className="fa fa-phone"></i> <u>: 09331296271</u></li>
                       <p> 50SITE تیم برنامه نویسی</p>
                        
                    </ul>

                </div>
            </div>
        )
    }
}
