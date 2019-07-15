import React from 'react'
import '../style/movieItem.scss'

export default function MovieItem (props) {
    return (
        <div className="itembox">
            <div className="itembox_imgbox"><img src={"./images/" + props.proImg} alt="props.proName"/></div>
            <div className="itembox_textbox">
                <p>{props.proName}</p>
                <p>{props.salePrice}</p>
            </div>
        </div>
    )
}
