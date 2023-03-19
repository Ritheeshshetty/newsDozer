import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
        <div className="card">
          <img src={
            imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"} alt=""/>
          <div className="card-details">
            <p className="text-title">{title}...</p>
            <p className="text-body">{description}...</p>
            <p className="text-body">By <b>{author}</b> on {date}</p>
          </div>
          <a href={newsUrl} rel="noreferrer" target="_blank"><button className="card-button">More info</button></a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
