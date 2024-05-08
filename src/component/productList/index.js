import React, { useEffect, useState } from 'react'
import "./style.css";

const ProductList = (props) => {

    return (
        <div>
            <div className="container">
                <div >
                    <section className="section-grid">
                        <div className="grid-prod">
                            {props?.productList && props?.productList.length > 0 && props?.productList.map((item, index) => {
                                return (
                                    <div className="col-md-3 card">
                                        <div className="prod-grid" key={index}>
                                            <img src={item?.image} alt={item.title} style={{ height: "350px" }} />
                                            <h3 className="pro_title">{item.title} </h3>
                                            <p className="pro_desc">{item.description}</p>
                                            <p className="pro_desc">{item.price}</p>
                                        </div>
                                    </div>
                                )

                            })}

                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default ProductList;