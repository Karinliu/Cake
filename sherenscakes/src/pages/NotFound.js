import React, { Component } from 'react'
import {Title} from '../components/';
import { Link } from 'react-router-dom';


class NotFound extends Component {
    render() {
        return (
        	 <>
            <div className="container error-page">
              <Title classes="header-title" text="Not Found"/> 
              <div className="row">
              <div className="col col-md-10 col-lg-6 btn-block">
                  <Link className="btn btn-pink" to="/">Terug naar main</Link>
              </div>
              </div>
            </div>

            </>
        )
    }
}

export default NotFound