import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import MovieContent from './moviecontent'

const { Item } = Menu;
const { Header, Content, Sider } = Layout;

export default class Movie extends React.Component {
    render(){
        return (
            <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Item key="1"><Link to="/Movie/top/1">Top</Link></Item>
                    <Item key="2"><Link to="/Movie/comingsoon/1">Comingsoon</Link></Item>
                    <Item key="3"><Link to="/Movie/vip/1">Vip</Link></Item>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Route path="/Movie/:type/:page" component={MovieContent}></Route>
            </Content>
        </Layout>)
    }
}
