import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

const News =(props)=> {
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,settotalResults]=useState(0)
  
    const UpadteDetails=async ()=>{
        props.setProgress(10)
        let url=`http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(50)
        let data= await fetch(url);
        let parsedData= await data.json()
        props.setProgress(80)
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(()=>{
        document.title=`NewsPad-${capitalizeFirstLetter(props.category)}`
        UpadteDetails();
        // eslint-disable-next-line
    },[])
    /* these two fundtion is required if you are implementing the next and previous button 
    handleNextClick=async ()=>{
        setPage(page+1)
        UpadteDetails()
    }
    handlePrevClick=async ()=>{
        setPage(page-1)
        UpadteDetails()
    }*/
    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const fetchMoreData = async ()=>{
    setPage(page+1)
     let url=`http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setLoading(false)
   }
    return (
      <>
        <h2 className='text-center' style={{margin: '30px 0px',marginTop: '82px'}}>NewsPad-Daily  {capitalizeFirstLetter(props.category)} HeadLines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className='container'>
            <div className='row'>
           {articles.map((element)=>{
           return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} timeAt={element.publishedAt} source={element.source.name}/>
            </div>})}
            </div>
           
            </div>
            </InfiniteScroll>
         {/* buttons for goinf to next and previous pages 
         
         <div className="d-flex justify-content-between my-3">
         <button type="button" disabled={page<=1}onClick={handlePrevClick} className="btn btn-dark">&laquo; Previous</button>
         <button type="button"  disabled={page+1>Math.ceil(totalResults/props.pageSize)}onClick={handleNextClick} className="btn btn-dark">Next &raquo;</button>
         </div> */
         }
       
      </>
    )
  
}
News.defaultProps={
    country:'in',
    pageSize:6,
    category:'general'
}
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
} 

export default News;
