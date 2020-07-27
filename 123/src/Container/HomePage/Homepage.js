import React, { Component } from 'react'
import './Homepage.scss';
import Footer from '../../components/Footer/Footer'

import Intertaiment from '../../components/Intertaiment/Intertaiment';
import {motion} from 'framer-motion'

export default class Homepage extends Component {
    render() {
        
        const pageTransition={
            in:{
                opacity:1,
                y:0
            },
            out:{
                opacity:0,
                y:"-100%"
            }
        }
        return (
            <motion.div   
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            className="home"
            >
                <h2> DESIGN & DEVELOPERS  </h2>
                <Intertaiment />
                <Footer/>

                <div className="tabligh">
                <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/design/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /></a>
                <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/gate/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
                <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/advertise/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
                <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/club/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین"/> </a>
                <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/search/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
                <a target="blank" href="https://mitrarank.ir/reagent/81313"> <img src="https://mitrarank.ir/files/adv/surf/970.jpg" alt="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" title="میترا رنک | سامانه جامع تبلیغات و بهبود اعتبار آنلاین" /> </a>
                </div>

            </motion.div>
        )
    }
}
