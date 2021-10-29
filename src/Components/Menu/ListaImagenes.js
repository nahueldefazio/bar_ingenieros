import React, {Fragment} from 'react';
import '../Menu/ListaImagenes.css'

const ListaImagenes = ({source}) => {
    return (
            source.map((img, index)=>(
            <Fragment key={index}>
                    <img src={img} width={'200px'} height={'500px'}/>
            </Fragment>
            )
    ))
}
export default ListaImagenes;