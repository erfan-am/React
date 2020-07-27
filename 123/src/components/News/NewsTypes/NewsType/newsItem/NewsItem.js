import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './newsItem.scss';
import {setNews}from '../../../../../redux/news/news-action'
import { connect } from 'react-redux';
class  newsItem  extends Component{
    
    render() {
        
        const {item,setNews}=this.props
        return (
            <div  className="item-new" title={item.name}>
                <Link onClick={()=>setNews(item)}  to={`/articles/${item.link}`}>
                    <img className="newsimg" src={item.img} alt={item.title} />
                    <h3 className="newTitle">{item.name}</h3>
                </Link>
            </div>
        )
    }
} 
export default connect(null,{setNews})(newsItem)
