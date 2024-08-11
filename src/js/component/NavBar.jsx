import React from "react";
import PropTypes from 'prop-types';

const NavBar = ({ brandName, pageName, lastName, serviceName, contactName }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{brandName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="align-items-sm-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{pageName}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{lastName}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{serviceName}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{contactName}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

NavBar.protoTypes = {
    brandName: PropTypes.string.isRequired,
    pageName: PropTypes.string,
    lastName: PropTypes.string,
    serviceName: PropTypes.string,
    contactName: PropTypes.string
}

export default NavBar;