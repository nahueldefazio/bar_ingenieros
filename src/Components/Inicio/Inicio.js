import React from 'react';
import Carousel from "../Shared/Carousel/Carousel";
import './Inicio.css'
import milanesa from '../../images/index_parrafo.png'
import bar from '../../images/bar_dia_2.png'
import ImagenPrincipal from "../Shared/ImagenPrincipal/ImagenPrincipal";


function Inicio() {
    return (
        <div>
            <ImagenPrincipal titulo='Bar Jose Ingenieros' imagen={bar} inicio={true}/>
            <div className='seccionMidIndex'>
                <img src={milanesa}/>
                <div className='seccionMidIndex-parrafo'>
                    <p>Fluctuss sunt habenas de varius rumor.When grilling hot tunas, be sure they are room
                        temperature.Hercle, lacta neuter!.Pol, a bene burgus, nobilis
                        impositio.Fluctuss sunt habenas de varius rumor.When grilling hot tunas, be sure they are room
                        temperature.Hercle, lacta neuter!.Pol, a bene burgus, nobilis
                        impositio!!</p>
                    <a className="btn btn-primary" href="#" role="button">Conocer más sobre el bar!</a>
                </div>
            </div>
            <Carousel/>
        </div>

    );
}

export default Inicio;