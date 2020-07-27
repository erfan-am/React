import React, { Component } from 'react'
import './Add.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {toggleButtonClosr} from '../../redux/Add/Add-action'
 class Add_Cart extends Component {
    render() {
        
        const {carts,toggleButtonClosr}=this.props
        return (
            <div className="add-content">
             <div className="cart_show">
             {carts.map(({imag,name,id})=>(
                <div key={id} className="add-body">
                    <img src={imag} alt={name}/>
                </div>
               ))}
             </div>

               <Link to="/checklist" onClick={()=>toggleButtonClosr()} className="button"><i className="fa fa-check"></i>چک لیست</Link>
            </div>
        )
    }
}
export default  connect(null,{toggleButtonClosr})(Add_Cart)
