import React from 'react'
import NewsItem from './newsItem/NewsItem';
import './NewsType.scss'
const NewsType = ({news}) => {
    console.log(news.name)
    return (
        <div className="news-container" title={news.name}>
            {news.newsItems.map(item=>(
                <NewsItem item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default NewsType
