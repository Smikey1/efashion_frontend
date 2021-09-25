import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class BlogRightComponent extends Component {
    render() {
        return (
            <div className="col-md-4">
                {/* Search Widget */}
                <div className="card mb-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Categories Widget */}
                <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                        <div className="row">
                            <ul className="w3-tag2">
                                <li>
                                    <Link to="#">amet</Link>
                                </li>
                                <li>
                                    <Link to="#">placerat</Link>
                                </li>
                                <li>
                                    <Link to="#">Proin </Link>
                                </li>
                                <li>
                                    <Link to="#">vehicula</Link>
                                </li>
                                <li>
                                    <Link to="#">vehicula</Link>
                                </li>
                                <li>
                                    <Link to="#">diam</Link>
                                </li>
                                <li>
                                    <Link to="#">amet</Link>
                                </li>
                                <li>
                                    <Link to="#">placerat</Link>
                                </li>
                                <li>
                                    <Link to="#">Proin </Link>
                                </li>
                                <li>
                                    <Link to="#">vehicula</Link>
                                </li>
                                <li>
                                    <Link to="#">vehicula</Link>
                                </li>
                                <li>
                                    <Link to="#">velit</Link>
                                </li>
                                <li>
                                    <Link to="#">felis</Link>
                                </li>
                                <li>
                                    <Link to="#">mauris</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Side Widget */}
                <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin
                        eget tortor risus.Curabitur non nulla sit.
                    </div>
                </div>

            </div>
        )
    }
}

export default BlogRightComponent
