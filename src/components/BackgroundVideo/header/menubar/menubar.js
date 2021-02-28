import React, { Component } from "react";
import './menubar.css';
import MainPage from '../../main/main';
import Home from '../../home/home';
import About from '../../about/about';
import Vita from '../../vita/vita';
import Blog from '../../blog/blog';
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

// import 'react-tabs/style/react-tabs.css';
class MenuBar extends Component {


  render() {
    // const { path } = '/about';

    return (
      <BrowserRouter>
            <Tabs>
              <div>
                <TabList className="links">
                  <Tab className="link"><NavLink activeClassName="selected" to="/home">Home</NavLink></Tab>
                  <Tab className="link"><NavLink activeClassName="selected" to="/about">About</NavLink></Tab>
                  <Tab className="link"><NavLink activeClassName="selected" to="/blog">Blog</NavLink></Tab>
                  <Tab className="link"><NavLink activeClassName="selected" to="/vita">Vita</NavLink></Tab>
                </TabList>
              </div>
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

export default MenuBar;