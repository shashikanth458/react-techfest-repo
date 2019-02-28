import React, { Component } from 'react';
import {Link} from "react-router-dom";
import StarComponent from '../StarComponent';

import './index.scss';

export default class ProductCardComponent extends Component{

    render(){

       
        let prdName=this.props.product.name,
            tagLine=this.props.product.category.name,
            url= `url(${this.props.product.imageUrl})`,
            styles={
                backgroundStyles:{
                    backgroundImage:url,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                }
            };
        

        return(
            <Link to={{pathname:`/pdp/${this.props.product.id}`}} >
                <div className="product">
                    {/* <span className="product-tag">Best selling</span> */}
                    <span className="product-image" style={styles.backgroundStyles}></span>
                        <div className="product-label-container">
                            <h6>{prdName}</h6>
                            <label>{tagLine}</label>
                            <div>
                              <StarComponent rating={this.props.product.rating}/>
                                </div>
                            
                            </div>
                    </div>
                  </Link>  
        )
    }
}
