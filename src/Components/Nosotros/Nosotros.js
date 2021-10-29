import React from 'react';
import '../Nosotros/Nosotros.css'
import bar from "../../images/bar-de-esquina.jpg";
import bar_historia_2 from '../../images/nosotros/bar_historia_2.jpeg'
import ImagenPrincipal from "../Shared/ImagenPrincipal/ImagenPrincipal";

function Nosotros(props) {
    return (
        <div>
            <ImagenPrincipal titulo='Acerca de Nosotros' imagen={bar} nosotros={true} />
            <div className='contenedor_historia'>
                <div className='historia_parrafo'>
                    <h3 className='historia_parrafo_titulo'>El bar a comienzos de los años 50´</h3>
                    <p className='historia_parrafo_principal'>"En recuerdo a mis abuelos y mis padres, que regenteaban este bar a comienzo de los años 50´,
                        cuando el "Bar Jose iNgenieros" se llamaba "Bar el Serrano" y el tiempo transcurria mas
                        lentamente. Mie abuelo Francisco Menendez aparece en la foto esperando el colectivo 21,
                        mientas
                        que mi papa, Eduardo Solla esta retratado en la mesa de billar, durandte un campeonato
                        organizado en este mismo lugar y mi madre, Amelia Menendez aparece en la terraza del bar,
                        otra
                        de mi papa junto a uno de los mozos, luego hay una foto de una reunion familiar y por
                        ultimo, mi tio
                        Alberto Arteaga y mi tia Delia Menendez estan sentados junto a una mesa en la vereda</p>
                </div>
                <div className='historia_imagenes'>
                    {/* <img src={bar_historia} alt=''/> */}
                    <img src={bar_historia_2} alt='' className='imagenHistoria'/>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;