import React from "react";
import PropTypes from 'prop-types';


const CardTitle = (props) => {
    return (
        <div className="cardtitle" style={{ width: 83 + 'rem', height: 10 + 'rem', marginTop: 1 + 'rem', }}>
            <div className="card w-80 mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-warning">{props.button}</a>
                </div>
            </div>
        </div>
    )
}

CardTitle.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    button: PropTypes.string
}

export default CardTitle;
















