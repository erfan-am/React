import React, { Component } from 'react'
import {motion} from 'framer-motion'
import { connect } from 'react-redux'
import News from './news';
import './Articles.scss';
 class componentName extends Component {
    render() {
        const {news}=this.props
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
            className="articles"
            variants={pageTransition}>
               {news !==null && <News news={news} />}
            </motion.div>

        )
    }
}
const mapStateToProps=state=>({
    news:state.news.newsItem
})
export default  connect(mapStateToProps)(componentName)