import React, { Component } from 'react'
import './hamburger.scss';
import Addbody from '../Add-Cart/Add_Cart'

import {NavLink,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleButton,toggleButtonClosr,describe} from '../../redux/Add/Add-action';

 class hamburger extends Component {
  state={
      navShow:false,
  }

  handledes=()=>{
      this.props.describe();
      this.setState({navShow:false})
  }
   
 
    navclick=()=>{
        this.setState({navShow:!this.state.navShow})
    }
    handleClose=()=>this.setState({navShow:false})
    render() {
       const {navShow}=this.state
        
        const {carts,display,toggleButtonClosr,toggleButton,describe}=this.props

        return (
            <div className="ham-non">
                   <div id="nav" className="hamburger-ham" >
                    <input type="checkbox" onClick={this.navclick} id="check"/>
                    <div className="tags" >
                        <div className="tag"></div>
                        <div className="tag"></div>
                        <div className="tag"></div>
                    </div>
                            <div className='nav-bar-ham' style={{transform:navShow !==false? 'translate(0)':'translateX(-180%)'}} >
                            <div className="container-ham">
                            <a to="/"  className="nav-brand-ham">50SITE</a>
                            <img onClick={this.handledes} className="logo-ham" src={require('../../assets/logo.png')} />

                            <ul className="list-items-ham">
                            <ol className="details-small-ham">
                                <a  href="mailto:erfanam582@gmail.com" className="media-small-ham"><i className="fa fa-envelope "></i></a>
                                {/* <a to="#" className="media-small"><i className="fa fa-youtube "></i></a> */}
                                <a  href="https://github.com/erfan-am" target="blank" className="media-small-ham"><i className="fa fa-github "></i></a>
                                <a   target="blank" href="https://t.me/fiftysite" className="media-small-ham"><i className="fa fa-telegram  "></i></a>
                                <a  target="blank"  href="https://www.instagram.com/50site/" className="media-small-ham"><i className="fa fa-instagram "></i></a>
                                </ol>
                                    <NavLink onClick={()=>toggleButtonClosr()} exact onClick={this.handleClose} className="list-small-ham" to="/">خانه</NavLink>    
                                    <NavLink onClick={()=>toggleButtonClosr()} exact onClick={this.handleClose} className="list-small-ham" to="/collections">دسته بندی ها</NavLink>
                                    <NavLink onClick={()=>toggleButtonClosr()} exact onClick={this.handleClose} className="list-small-ham" to="contact">ارتباط با ما</NavLink>
                                </ul>
                                <img className="welocmw-nav" src={require('../../assets/nav.welocm.jpg')}/>
                            </div>
                        </div>
                        <span onClick={()=>toggleButton()} className="heart-ham list-small-ham"><i className="fa fa-heart red"></i> :{carts.length}</span>
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
export default withRouter(connect(mapStateToProps,{toggleButton,toggleButtonClosr,describe})(hamburger))