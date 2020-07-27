import React, { Component } from 'react'
import './Layout.scss';
import Addbody from '../Add-Cart/Add_Cart'

import {NavLink,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleButton,toggleButtonClosr,describe} from '../../redux/Add/Add-action';

 class Layout extends Component {
     state={
         hover:'بزن روش'
     }
     
      render() {
        const {carts,display,toggleButtonClosr,toggleButton,describe}=this.props
        return (
       <div className="non">
              <div className="layout" >
         <div className='nav-bar' >
                <div className="container">
                <a to="/"  className="nav-brand">50SITE</a>
                   <ul className="list-items">
                   <img onClick={describe} className="logo" title="بزن روش" src={require('../../assets/logo.png')} />     
                        <NavLink onClick={()=>toggleButtonClosr()} exact onClick={this.handleClose} className="list-small" to="/">خانه</NavLink>    
                        <NavLink onClick={()=>toggleButtonClosr()} exact onClick={this.handleClose} className="list-small" to="/collections">دسته بندی ها</NavLink>
                        <NavLink onClick={()=>toggleButtonClosr()} exact onClick={this.handleClose} className="list-small" to="contact">ارتباط با ما</NavLink>
                    </ul>
                </div>
            </div>
            <span onClick={()=>toggleButton()} className="heart list-small"><i className="fa fa-heart red"></i> :{carts.length}</span>
                {display &&  <Addbody carts={carts} />}
          </div>
       </div>
        )
    }
}
const mapStateToProps=state=>({
    carts:state.add.carts,
    display:state.add.display,
})
export default withRouter(connect(mapStateToProps,{toggleButton,toggleButtonClosr,describe})(Layout))