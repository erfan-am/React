import React, { Component } from 'react'
import './News.scss';
import NewsType from './NewsTypes/NewsType/NewsType'
import {motion} from 'framer-motion'
import {newsTypes} from './NewsTypes/NewsTypes'
export default class News extends Component {
    
    state={
        newsTypes:newsTypes
    }
    render() {
        const {newsTypes}=this.state
        const pageTransition={
            in:{
                opacity:1,
                y:0,
            },
            out:{
                opacity:0,
                y:"-100%",
            }
        }
        return (
            <motion.div   
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition} className="news">
            <div className="button_news">
                    <form className="formnews" >
                   <div className="title-news">
                   <select name="category" className="category">
                        <option className="news-option" value="">همه موضوعات</option>
                        <option  className="news-option">برنامه نویسی</option>
                    </select>
                    <input type="hidden" name="paginate" value="1"/>
                   </div>
                   <div className="search-box">
                        <label ><i className="fa fa-search serclabel"></i></label>
                       <input type="search" id="search-news" className="search-news" placeholder="عنوان مورد نظر خود را سرچ کنید"/>
                   </div>
                </form>
                <hr/>

            </div>
           <div className="news-content" >
                    {newsTypes.map(news=>(
                        <NewsType key={news.id} news={news}/>
                    ))}
           </div>
                
            </motion.div>

        )
    }
}
