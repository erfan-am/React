import React, { useState} from 'react'
import './Contact.scss'
import Footer from '../../components/Footer/Footer';
import {motion} from 'framer-motion'

 const Contact=React.memo(props=>{
    const [name,nameChange]=useState('');
    const [email,emailChange]=useState('');
    const [phone,phoneChange]=useState('');
    const [describe,describeChange]=useState('');
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
         variants={pageTransition}
         className="contact-main">
             <div className="contact">
             <h3 className="contacth3">جهت درخواست سفارش ،اطلاعات خواسته شده را ثبت کنید </h3>
            <div className="project">
                 <div data-aos="fade-right" > <img src={require('../../assets/pro.jpg')} /></div>
             <form data-aos="fade-left" >
             <p>به علت بروزرسانی قادر به سفارش از طریق ارسال اطلاعات نیستید ،لطفا از طریق شماره تلفن ،پیج <a href="https://www.instagram.com/50site/" target="blonk">اینستاگرام </a>و یا از طریق کانال<a href="https://t.me/fiftysite" target="blonk"> تلگرام </a> به ما مراجعه کنید</p>
                     <div className="group">      
                     <input onChange={ e=>nameChange(e.target.value)} value={name}  type="text" required/>
                     <span className="highlight"></span>
                     <span className="bar"></span>
                     <label>نام و نام خانوادگی</label>
                     </div>
                     <div className="group">      
                     <input onChange={e=>emailChange(e.target.value)} value={email}  type="text" required/>
                     <span className="highlight"></span>
                     <span className="bar"></span>
                     <label>ایمیل</label>
                     </div>
                     <div className="group">      
                     <input onChange={e=>phoneChange(e.target.value)} value={phone} type="text" required/>
                     <span className="highlight"></span>
                     <span className="bar"></span>
                     <label>شماره موبایل</label>
                     </div>
                     <div className="group">      
                     <textarea onChange={e=>describeChange(e.target.value)} placeholder="هر آنچه که از ما می خواهید را شرح دهید"  cols={30} value={describe} rows={5}/>
                     <span className="highlight"></span>
                     <span className="bar"></span>
                     </div>               
             </form>         
             </div>       
             </div>          
             <Footer/>
             <div className="tabligh">
             <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/design/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /></a>
             <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/gate/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
             <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/search/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
             <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/surf/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
             </div>
        </motion.div>
     )
 })

export default (Contact)