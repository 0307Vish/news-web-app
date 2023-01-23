import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import './infinite.css';
const NewsComponent = (props) => {
    const [articles, setArticles] = useState([])
    const [pagesize, setPagesize] = useState(6)
    const[totalArticles,setTotalArticles]=useState(6)
    document.title = `NEWS HUB-${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`
    const updateNews = async () => {
        props.setProgress(0);
        try {
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=83b7a6e54d4c44339bbfa132c8263017&pagesize=${pagesize}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          setArticles(parsedData.articles);
          setTotalArticles(parsedData.totalResults);
          setPagesize(9);
          props.setProgress(100);
        } catch (error) {
          console.error(error );
        }
      };


    useEffect(() => {
    updateNews();
    },[])
    
const fetchMoreData = async () => {
    setPagesize(pagesize + 3 );
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=83b7a6e54d4c44339bbfa132c8263017&pagesize=${pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalArticles(parsedData.totalResults)
}
const location =useLocation();
console.log(location);
    return (
        <>
            <h1 className="text-center" style={ {marginTop:'55px', fontWeight:'505'}}>Top-Headlines : {location.pathname.replace("/","").charAt(0).toUpperCase()+location.pathname.replace("/","").slice(1)} </h1>
            <InfiniteScroll  style= {  {overflow:'none'}} className='infinite'
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalArticles}
                loader={<Spinner/>}
            >
                <div className='container'>
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem   title={element.title ? element.title : ""} description={element.description} urlToImage={element.urlToImage ? element.urlToImage : "https://storage.googleapis.com/pmd-stage-northamerica-northeast1-dcs-static-files/9.4.3/websites/images/postmedia-image-fallback.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

NewsComponent.defaultProps = {
    country: 'in',
    category: "sports",
}
NewsComponent.propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string,
}
export default NewsComponent





