import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:4,
        category:'general'
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsDozer`
  }

//   async updateNews(pageNo){
//     const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6aa8680f76bc440685b0897cc5c763b1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data=await fetch(url);
//     let parsedData=await data.json()
//     console.log(parsedData)
//     this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  
//   }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6aa8680f76bc440685b0897cc5c763b1&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }

    handlePrevClick=async()=>{
        console.log("Previous")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6aa8680f76bc440685b0897cc5c763b1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData)
        // this.setState({articles:parsedData.articles})
            this.setState({
                page:this.state.page-1,
                articles:parsedData.articles,
                loading:false                      
            })
}

    handleNextClick=async()=>{
        console.log("Next")
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6aa8680f76bc440685b0897cc5c763b1&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
                this.setState({loading:true});
                let data=await fetch(url);
                let parsedData=await data.json()
                // console.log(parsedData)
                // this.setState({articles:parsedData.articles})
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles,
                loading:false           
        })
        }
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6aa8680f76bc440685b0897cc5c763b1&page=${this.state.page+1}&pageSize=20`;
    // let data=await fetch(url);
    // let parsedData=await data.json()
    // console.log(parsedData)
    // // this.setState({articles:parsedData.articles})
    //     this.setState({
    //         page:this.state.page+1,
    //         articles:parsedData.articles            
    //     })
    
}

  render() {
    return (
      <div className="container">
        <header>NewsDozer - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</header>
        {this.state.loading&&<Spinner/>}
        <section className="section" >
        {!this.state.loading&&this.state.articles.map((element)=>{
        return <article className="article"key={element.url} ><br /><br /><br /><br />
            <NewsItem  title={element.title?element.title.slice(0,37):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={new Date(element.publishedAt).toGMTString()}/>
            </article>
        })}
        </section>
            <div className="footer">
                {this.state.page<=1?(<span></span>):<button className="cta-1" disabled={this.state.page<=1} onClick={this.handlePrevClick}>
            <img src="https://www.svgrepo.com/download/410327/left-arrow.svg" alt="" />
            <span className="hover-underline-animation"> Previous </span>
        </button>}
                
                {/* <button className="cta-1" disabled={this.state.page<=1} onClick={this.handlePrevClick}>
                    <img src="https://www.svgrepo.com/download/410327/left-arrow.svg" alt="" />
                    <span className="hover-underline-animation"> Previous </span>
                </button> */}
                {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)?(<span></span>):
                <button className="cta-2" onClick={this.handleNextClick}>
                <span className="hover-underline-animation"> Next </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>}
                
                {/* <button className="cta-2" onClick={this.handleNextClick}>
                    <span className="hover-underline-animation"> Next </span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                </button> */}
            </div>
      </div>
    );
  }
}

export default News;
