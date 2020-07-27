import React, { Component } from 'react'
import './Check.scss';
import CheckItem from './CheckItem/CheckItem';
import { connect } from 'react-redux';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
import {removeButton} from '../../redux/Add/Add-action'
 class Check extends Component {
    render() {
        const {carts,removeButton}=this.props
        const pageTransition={
            in:{
                opacity:1,
                x:"0%"
            },
            out:{
                opacity:0,
                x:"-100%"
            }
        }
        return (
            <motion.div   
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition} className="check_container">
                <p className="check-p">به علت بروزرسانی قادر به سفارش از طریق ارسال اطلاعات نیستید ،لطفا از طریق شماره تلفن ،پیج <a href="https://www.instagram.com/50site/" target="blonk">اینستاگرام </a>و یا از طریق کانال<a href="https://t.me/fiftysite" target="blonk"> تلگرام </a> به ما مراجعه کنید</p>
                 <div className="title">
                        <h2>عکس ها </h2>
                        <h2>نام ها </h2>
                        <h2>حذف</h2>
                    </div>
                   <div className="check">
                     {carts.length >0 && carts.map((cart)=>(
                      <CheckItem removeButton={()=>removeButton(cart)} cart={cart} key={cart.id}  />
                    ))}
                  </div>
                  
                  <Link to="/" className="requet"><i className="fa fa-chevron-left"></i> بازگشت  </Link>
                
             </motion.div>
        )
    }
}

const mapStateToProps=state=>({
    carts:state.add.carts
})

export default  connect(mapStateToProps,{removeButton})(Check)