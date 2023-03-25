import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  // HashRouter,
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  pageSize=8
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:4
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/> 
          <LoadingBar
          // shadow={True}
        color='#f11946'
        progress={this.state.progress}
      />
          {/* <News  pageSize={this.pageSize} country="in" category="general"/> */}
          {/* <News Item/> */}
          {/* 26f6d023503d4880b4c7347f0b576c63 */}
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
            <Route exact path="/home" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/about" element={<About category="About"/> } />
            {/* <Route exact path="/services" element={<News  key="general" pageSize={this.pageSize} country="in" category="general"/>}/> */}
            <Route exact path="/contact" element={<Contact category="contact"/> }/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

