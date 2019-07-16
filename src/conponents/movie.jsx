import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link ,Switch } from 'react-router-dom';
import MovieContent from './moviecontent'
import MovieDetial from './movieDetail'

const { Item } = Menu;
const { Header, Content, Sider } = Layout;

export default class Movie extends React.Component {
    render(){
        return (
            <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Item key="All"><Link to="/Movie/All/1">All</Link></Item>
                    <Item key="Hundreds"><Link to="/Movie/Hundreds/1">200.00-1000.00</Link></Item>
                    <Item key="Thousand"><Link to="/Movie/Thousand/1">1000.00-3000.00</Link></Item>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Switch>
                    <Route path="/Movie/Detail/:id" component={MovieDetial}></Route>
                    <Route path="/Movie/:type/:page" component={MovieContent}></Route>
                </Switch>
            </Content>
        </Layout>)
    }
}
