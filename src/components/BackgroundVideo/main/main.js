import React, { Component } from "react";
import '../header/menubar/menubar.css';
import Home from '../home/home';
import About from '../about/about';
import Vita from '../vita/vita';
import Blog from '../blog/blog';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
class MainPage extends Component {
    render() {
        console.log(this.props);
      // const { path } = this.props.compName;
     
      return (
        <BrowserRouter>
            <Tabs>
        <div className="tabs">
        <TabPanel>
          <Route path="/home" component={Home} />
        </TabPanel>
        <TabPanel>
          <Route path="/about" component={About} />
        </TabPanel>
        <TabPanel>
          <Route path="/blog" component={Blog} />
        </TabPanel>
        <TabPanel>
          <Route path="/vita" component={Vita} />
        </TabPanel>
      </div>
      </Tabs>
      </BrowserRouter>
      );
    }
  }
  
export default MainPage;