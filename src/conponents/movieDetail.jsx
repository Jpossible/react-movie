import React from 'react'
import { Button, Icon } from 'antd';

export default class MovieDetial extends React.Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <Button type="primary" onClick={this.goBack.bind(this)}>
                    <Icon type="left" />
                    Go back
                </Button>
                moviedetial---{this.props.match.params.id}
            </div>
        )
    }
    goBack(){
        this.props.history.go(-1)
    }
}
