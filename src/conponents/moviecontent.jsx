import React from 'react'
import { Card, Spin, Alert } from 'antd';
import './moviecontent.css'

const { Meta } = Card;

export default class MovieContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            prolist:[],
            isloading:true
        }
    }
    componentWillMount() {
        fetch('http://127.0.0.1:3000/pros/list') //当使用ES6 fetch API获取接口数据时第一个回调中获取不到服务器返回的数据
            .then(res=>{
            return res.json() //需要对第一个返回的响应值调用json转换为promise对象并再次return
            })
            .then(res=>{
                console.log(res.result.list)
                this.setState({
                    prolist:res.result.list,
                    isloading:false
                })
            })
    }

    render() {
        return (
            <div className="moviecontent">
                {this.renderlist()}
                {this.state.prolist.map((item,i)=><Card
                    key={i}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={item.proName} src="/static/images/5a7cf97fe6bde_1024.jpg" />}
                >
                    <Meta title={item.salePrice} description={item.proName} />
                </Card>)}
            </div>
        )
    }

    renderlist () {
        if (this.state.isloading) {
            return (<Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>)
        } else {
            return
        }
    }
}
