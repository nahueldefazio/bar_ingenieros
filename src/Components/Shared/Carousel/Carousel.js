import React from 'react';
import '../Carousel/Carousel.css'
import imagen1 from '../../../images/carusel/WhatsApp Image 2021-08-26 at 19.37.25.jpeg';
import imagen2 from '../../../images/carusel/WhatsApp Image 2021-08-26 at 19.37.26.jpeg';
import imagen3 from '../../../images/carusel/WhatsApp Image 2021-08-26 at 19.37.26 (1).jpeg';
import imagen4 from '../../../images/carusel/WhatsApp Image 2021-08-26 at 19.37.29 (1).jpeg';
import imagen5 from '../../../images/carusel/WhatsApp Image 2021-08-26 at 19.37.28 (3).jpeg';


function Carousel() {

    const images = [imagen1, imagen2, imagen3, imagen4, imagen5]

    return (
        <div id="carouselExampleControls" className="carousel slide carousel-size" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((imagen, index) => {
                    if (index === 0) {
                        return (
                            <div className="carousel-item active" key={index}>
                                <img src={imagen}
                                     className="d-block w-100" alt={'imagen' + index} />
                            </div>
                        )
                    } else {
                        return (
                            <div className="carousel-item" key={index}>
                                <img src={imagen}
                                     className="d-block w-100" alt={'imagen' + index} />
                            </div>
                        )
                    }
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;