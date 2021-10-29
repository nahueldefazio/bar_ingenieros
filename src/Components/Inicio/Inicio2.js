import React, {Fragment} from 'react';
import './carousel.css'
import home1 from "../../images/bar_dia.png"
import home2 from "../../images/bar_dia_2.png"
import home3 from "../../images/bar_interior.jpeg"
import index_comida1 from "../../images/index_parrafo.png"
import index_comida2 from "../../images/index_2.png"
import index_comida3 from "../../images/index_3.png"

function Inicio2(props) {
    return (
        <Fragment>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active"
                                aria-current="true" aria-label="Slide 1"/>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2"/>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3"/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/*<svg className="bd-placeholder-img" width="100%" height="100%"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"*/}
                            {/*     preserveAspectRatio="xMidYMid slice" focusable="false">*/}
                            {/*    <rect width="100%" height="100%" fill="#777"/>*/}
                            {/*</svg>*/}
                            <img src={home3} alt={'home3'}/>
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Example headline.</h1>
                                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <p><a className="btn btn-lg btn-primary">Sign up today</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/*<svg className="bd-placeholder-img" width="100%" height="100%"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"*/}
                            {/*     preserveAspectRatio="xMidYMid slice" focusable="false">*/}
                            {/*    <rect width="100%" height="100%" fill="#777"/>*/}
                            {/*</svg>*/}
                            <img src={home2} alt={'home2'}/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <p><a className="btn btn-lg btn-primary">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/*<svg className="bd-placeholder-img" width="100%" height="100%"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"*/}
                            {/*     preserveAspectRatio="xMidYMid slice" focusable="false">*/}
                            {/*    <rect width="100%" height="100%" fill="#777"/>*/}
                            {/*</svg>*/}
                            <img src={home1} alt={'home1'}/>
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>One more for good measure.</h1>
                                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <p><a className="btn btn-lg btn-primary">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Marketing messaging and featurettes
  ================================================== */}
                {/* START THE FEATURETTES */}
                <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span>
                        </h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine
                            some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        {/*<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"*/}
                        {/*     width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img"*/}
                        {/*     aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"*/}
                        {/*     focusable="false"><title>Placeholder</title>*/}
                        {/*    <rect width="100%" height="100%" fill="#eee"/>*/}
                        {/*    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>*/}
                        {/*</svg>*/}
                        <img src={index_comida1} alt={'index comida'}/>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span>
                        </h2>
                        <p className="lead">Another featurette? Of course. More placeholder content here to give you
                            an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        {/*<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"*/}
                        {/*     width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img"*/}
                        {/*     aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"*/}
                        {/*     focusable="false"><title>Placeholder</title>*/}
                        {/*    <rect width="100%" height="100%" fill="#eee"/>*/}
                        {/*    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>*/}
                        {/*</svg>*/}
                        <img src={index_comida2} alt={'index comida'}/>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one. <span
                            className="text-muted">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content.
                            Again, not really intended to be actually read, simply here to give you a better view of
                            what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5">
                        {/*<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"*/}
                        {/*     width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img"*/}
                        {/*     aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"*/}
                        {/*     focusable="false"><title>Placeholder</title>*/}
                        {/*    <rect width="100%" height="100%" fill="#eee"/>*/}
                        {/*    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>*/}
                        {/*</svg>*/}
                        <img src={index_comida3} alt={'index comida'}/>
                    </div>
                </div>
                <hr className="featurette-divider"/>
                {/* /END THE FEATURETTES */}
                {/* /.container */}
                {/* FOOTER */}
                <footer className="container">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <p className="float-end"><a >Back to top</a></p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <p>© 2017–2021 Company, Inc. · <a >Privacy</a> · <a >Terms</a></p>
                </footer>
        </Fragment>
    );
}

export default Inicio2;