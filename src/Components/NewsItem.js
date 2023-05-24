import React from 'react'

const NewsItem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,timeAt,source}=props;
    return (
      <div>
        <div className="card h-200">
        <span className="badge rounded-pill bg-danger" style={{display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    right:" 0"}}>
    {source}
  </span>
  <img style={{display:'flex', maxWidth:"100%"}} src={imageUrl?imageUrl:"https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png"} className="card-img-top" alt="..."/>
  <div className="card-body " style={{
        flexWrap: 'wrap',
        flex: 'initial'}}>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted"> by {author?author:'Anonymous'} at {timeAt}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
     
  </div>
  
  
</div>
      </div>
    )
  
}

export default NewsItem
