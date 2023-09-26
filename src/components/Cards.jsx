import React from "react"

const Card = (props) => {
    return(
        <div className="flash-card">
            <h2>{props.qa}</h2>
        </div>
    )
}

export default Card;