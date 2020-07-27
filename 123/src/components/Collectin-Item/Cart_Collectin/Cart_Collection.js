import React, { Component } from 'react'
import './Cart.scss'
import {connect} from 'react-redux';
import {AddCart} from '../../../redux/Add/Add-action'

class Cart_Collection extends Component {
    addHandel=()=>{
        const {item}=this.props
        this.props.AddCart(item);
     }
    render() {
       
        const {name,imag}=this.props.item
        return (
            <div data-aos="fade-right" className="cart-collection">
                <img src={imag} alt={name} className="cart-imag"/>
                <div className="details">
                  <i className="fa fa-photo fa-5x"></i>
                    <h4>Name:{name}</h4>
                    <button onClick={this.addHandel} className="btn"> <i className="fa fa-plus"></i> افزودن به لیست علاقه مندی ها</button>
                    
                </div>
            </div>
        )
    }
}
export default connect(null,{AddCart})(Cart_Collection )
