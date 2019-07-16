import React from 'react'
import moviestyle from '../style/movieItem.scss'

export default class MovieItem extends React.Component{
    render() {
        return (
            <div className={moviestyle["itembox"]} onClick={this.toDetail}>
                <div className={moviestyle["itembox_imgbox"]}><img src={"./images/" + this.props.proImg} alt={this.props.proName}/></div>
                <div className={moviestyle["itembox_textbox"]}>
                    <p>{this.props.proName}</p>
                    <p>{this.props.salePrice}</p>
                </div>
            </div>
        )
    }

    toDetail =  () => {
        this.props.history.push('/movie/Detail/' + this.props.proId)
    }
}
