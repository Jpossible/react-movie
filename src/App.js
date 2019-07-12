import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './conponents/homepage'
import Movie from './conponents/movie'
import About from './conponents/about'
const { Header, Content } = Layout;

function App() {
    console.log(window.location.hash.split('/')[1])//获取URL中的哈希值 防止刷新失效切换页面
  return (
      <HashRouter>
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={[window.location.hash.split('/')[1]]}
    style={{ lineHeight: '64px' }}
>
<Menu.Item key="Home"><Link to="/Home">Home</Link></Menu.Item>
    <Menu.Item key="Movie"><Link to="/Movie">Movie</Link></Menu.Item>
    <Menu.Item key="About"><Link to="/About">About</Link></Menu.Item>
    </Menu>
    </Header>
        <Layout style={{ padding: '24px 24px' }}>
    <Content
    style={{
        background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
    }}
>
    <Route path="/Home" component={Home}></Route>
    <Route path="/Movie" component={Movie}></Route>
    <Route path="/About" component={About}></Route>
    </Content>
    </Layout>
    </Layout>
    </HashRouter>
  );
}

export default App;
