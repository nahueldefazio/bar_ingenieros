import React, {Fragment} from 'react';

function ImagenPrincipal(props) {

    const extras = () => {
        if (props.inicio){
            return (
                <Fragment>
                    <p className='textoTituloPrincipal'>Tu mejor eleccion!</p>
                    <a className="btn btn-primary" href="#" role="button">Ver Carta</a>
                </Fragment>
            )
        }else if (props.nosotros){
            return (
                <Fragment>
                    <p className='textoTituloPrincipal'>Tito u are de best!</p>
                </Fragment>
            )
        }else if (props.menu){
            <Fragment>

            </Fragment>
        }
    }
    return (
        <Fragment>
            <div className="fondoPrincipal">
                <img className='imagenFondo' src={props.imagen}/>
                <div className="contenedorMidIndex">
                    <h1 className='tituloPrincipal'> {props.titulo} </h1>
                    {extras()}
                </div>
            </div>
        </Fragment>
    );
}

export default ImagenPrincipal;