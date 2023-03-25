import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsDozer`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // e14a8f0710204e63b278a507b6b4a0d3
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }
  // async componentDidMount(){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=e14a8f0710204e63b278a507b6b4a0d3&page=1&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data=await fetch(url);
  //   let parsedData=await data.json()
  //   console.log(parsedData)
  //   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  // }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  // handlePrevClick=async()=>{
  //     console.log("Previous")
  //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=e14a8f0710204e63b278a507b6b4a0d3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading:true});
  //     let data=await fetch(url);
  //     let parsedData=await data.json()
  //     console.log(parsedData)
  //     this.setState({
  //       page:this.state.page-1,
  //       articles:parsedData.articles,
  //       loading:false
  //     })
  //   }
  // this.setState({articles:parsedData.articles})

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  };
  // handleNextClick=async()=>{
  //     console.log("Next")
  //     if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
  //     {
  //             let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=e14a8f0710204e63b278a507b6b4a0d3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //             this.setState({loading:true});
  //             let data=await fetch(url);
  //             let parsedData=await data.json()
  //         this.setState({
  //             page:this.state.page+1,
  //             articles:parsedData.articles,
  //             loading:false
  //     })
  //     }
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=e14a8f0710204e63b278a507b6b4a0d3&page=${this.state.page+1}&pageSize=20`;
  // let data=await fetch(url);
  // let parsedData=await data.json()
  // console.log(parsedData)
  // // this.setState({articles:parsedData.articles})
  //     this.setState({
  //         page:this.state.page+1,
  //         articles:parsedData.articles
  //     })

  // }

  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page<1?this.state.page:this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          NewsDozer - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </header>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          style={{'overflow':'hidden'}}
        >

        <section className="section">
          {this.state.articles.map((element) => {
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
          {/* <div className="container">
        <header>NewsDozer - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</header>
        {this.state.loading&&<Spinner/>}
        <section className="section" >
        {!this.state.loading&&this.state.articles.map((element)=>{
        return <article className="article"key={element.url} ><br /><br /><br /><br />
            <NewsItem  title={element.title?element.title.slice(0,37):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={new Date(element.publishedAt).toGMTString()}/>
            </article>
        })} */}
          {/* </section>
            <div className="footer">
                {this.state.page<=1?(<span></span>):<button className="cta-1" disabled={this.state.page<=1} onClick={this.handlePrevClick}>
            <img src="https://www.svgrepo.com/download/410327/left-arrow.svg" alt="" />
            <span className="hover-underline-animation"> Previous </span>
        </button>} */}
        </section>
        </InfiniteScroll>

        {/* <div className="footer">
          {this.state.page <= 1 ? (
            <span></span>
          ) : (
            <button
              className="cta-1"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
            >
              <img
                src="https://www.svgrepo.com/download/410327/left-arrow.svg"
                alt=""
              />
              <span className="hover-underline-animation"> Previous </span>
            </button>
          )} */}


          {/* {this.state.page + 1 >
          Math.ceil(this.state.totalResults / this.props.pageSize) ? (
            <span></span>
          ) : (
            <button className="cta-2" onClick={this.handleNextClick}>
              <span className="hover-underline-animation"> Next </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
          )}
        </div> */}
      </div>
    );
  }
}

export default News;
