import React ,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const updateNews=async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
    props.setProgress(100);
  }
  
  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsDozer`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  // const handlePrevClick=async()=>{
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick =async()=>{
  //   setPage(page+1);
  //   updateNews();
  // };

  const fetchMoreData =async()=> {
    setPage(page+1);
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page<1?page:page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
  };

    return (
      <div className="container" id="headerr">
        <header >
          NewsDozer - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </header>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
          style={{'overflow':'hidden'}}
          >
          


        <section className="section">
          {articles.map((element) => {
              return (
                <article className="article" key={element.url}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <NewsItem
                    title={element.title ? element.title.slice(0, 37) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={new Date(element.publishedAt).toGMTString()}
                  />
                </article>
              );
            })}         
        </section>
        </InfiniteScroll>
        <a href="#headerr" className="arrows"><i className="fa-solid fa-circle-arrow-up fa-bounce fa-2xl" style={{color:'#008bf8'}}/></a>
      </div>
    );
}
News.defaultProps = {
  country: "in",
  pageSize: 4,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
