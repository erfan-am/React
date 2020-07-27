import React from 'react'
import './news.scss'
const news = ({news}) => {
    console.log(news);
 
    return (
        <div className="articlenews" title={news.name} style={{direction:"rtl"}}>
        <h2 className="article-title">{news.name}</h2>
            <img alt={news.name} src={news.img} className="articleimg" />
           <p>1-در قدم اول باید دامین و هاست مورد نظر خودتون تهیه کنید</p>

           <img className="articleimg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--h1pJP0gP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/4wqb71tznqilad5rnzma.png
"/>
           <p className="article-text">2-حالا باید در قسمت package.json مثل عکس بالا، homepage برابر لینک دامینی که تهیه کردید بزارید</p>
           <p className="article-text">3-حالا دستور npm run build رو اجرا کنید </p>
           <h3 className="article-text">4-حالا باید فایل ایجاد شده رو در هاستی که تهیه کردید آپلود کنید</h3>
           <h4 className="article-text">5-حالا باید فایلی با فرمت htaccess. ایجاد کنید و محتوایات زیر رو  توش بزارید</h4>
           <img className="articleimg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--QeduoQ5u--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/g8acjvap0l60rhztz9ho.png"/>

        </div>
    )
}

export default news
