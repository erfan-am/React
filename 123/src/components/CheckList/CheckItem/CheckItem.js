import React, { Component } from 'react'
import './CheckItem.scss'
export default class CheckItem extends Component {
    render() {
        const {name,imag}=this.props.cart
        return (
            <div className="cart">
                 <div className="col-8">
                    <img src={imag} alt={name}/>
                </div>
                <div className="col-3">
                    <h4>{name}  </h4>
                </div>
                <div className="col-8">
                    <i onClick={this.props.removeButton} className="fa fa-remove"></i>
                </div>
            </div>
        )
    }
}
 