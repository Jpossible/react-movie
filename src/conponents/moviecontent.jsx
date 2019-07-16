import React from 'react'
import { Card, Spin, Alert } from 'antd'
// import fetchJSONP from 'fetch-jsonp'
import MovieItem from './movieItem'
import './moviecontent.css'

const { Meta } = Card;

export default class MovieContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            prolist:[],
            isloading:true,
            routerArr: {
                All:{
                    pricePrice:'',
                    endPrice:''
                },
                Hundreds:{
                    pricePrice:'200.00',
                    endPrice:'1000.00'
                },
                Thousand:{
                    pricePrice:'1000.00',
                    endPrice:'3000.00'
                }
            },
            curRouter: window.location.hash.split('/')[2]
    }
    }
    componentWillMount() {
        this.getData()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps,nextContext)
        this.setState({
            curRouter:nextProps.match.params.type
        },this.getData)
    }

    render() {
        return (
            <div className="moviecontent">
                {this.renderlist()}
                {this.state.prolist.map((item,i) => <MovieItem {...item} key={i} history={this.props.history} />)}
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

    getData(){
        fetch(`http://127.0.0.1:3000/pros/list?minPice=${this.state.routerArr[this.state.curRouter].pricePrice}&maxPice=${this.state.routerArr[this.state.curRouter].endPrice}`,{
            method: 'GET'
        }) //当使用ES6 fetch API获取接口数据时第一个回调中获取不到服务器返回的数据
            .then(res=> res.json()) //需要对第一个返回的响应值调用json转换为promise对象并再次return
            .then(res=>{
                console.log(res.result.list)
                this.setState({
                    prolist:res.result.list,
                    isloading:false
                },function () {
                    console.log('setState之后的回调函数')
                })
            })
        // 服务器端若只支持JSONP跨域则使用fetchJSONP包，用法于原生ES6 fetch API相同 本测试使用跨域请求头 故注释
        // fetchJSONP('http://127.0.0.1:3000/pros/list')
        //     .then(res=> res.json())
        //     .then(res=>{
        //         console.log(res.result.list)
        //         this.setState({
        //             prolist:res.result.list,
        //             isloading:false
        //         })
        //     })
    }
}
