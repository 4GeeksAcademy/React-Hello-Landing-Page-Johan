import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {
    console.log(props)
    return (
        <>
            <div className="card" style={{ width: 83 + 'rem', }}>
                <img src={props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-warning">{props.button}</a>
                </div>
            </div>
            <div className="card" style={{ width: 83 + 'rem' }}>
                <img src={props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-warning">{props.button}</a>
                </div>
            </div>
            <div className="card" style={{ width: 83 + 'rem' }}>
                <img src={props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-warning">{props.button}</a>
                </div>
            </div>
            <div className="card" style={{ width: 83 + 'rem' }}>
                <img src={props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-warning">{props.button}</a>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    button: PropTypes.string
}

export default Card;


