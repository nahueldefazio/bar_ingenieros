import React, {Fragment} from 'react';
import '../Menu/Menu.css'
import menu from '../../images/menu/menu.png'
import ImagenPrincipal from "../Shared/ImagenPrincipal/ImagenPrincipal";
import comidas from '../../images/menu/menu_imagen.png'
import ListaImagenes from "./ListaImagenes";
const IMAGENES = [
    'https://i.ibb.co/LP3Hnky/comida-1.png',
    'https://i.ibb.co/XxzGZk1/comida-2.png',
    'https://i.ibb.co/JyqYh8T/comida-3.png',
    'https://i.ibb.co/qsdLsRC/comida-4.png',
    'https://i.ibb.co/bvTZZF4/comida-5.png',
    'https://i.ibb.co/m4jpHrR/comida-6.png',
    'https://i.ibb.co/QkqL063/comida-7.png',
    'https://i.ibb.co/4dr6Y7Z/comida-8.png',
    'https://i.ibb.co/Fg7D9ph/comida-9.png',
    'https://i.ibb.co/4Wvj5fH/comida-10.png',
    'https://i.ibb.co/fG3ztjL/comida-11.png',
    'https://i.ibb.co/C7qxKz2/comida-12.png',
    'https://i.ibb.co/k8xg4FK/comida-13.png',
    'https://i.ibb.co/TtwHsPJ/comida-14.png',
    'https://i.ibb.co/hLDVPzh/comida-15.png'

]

function Menu(props) {

    return (
        <Fragment>
            <ImagenPrincipal  titulo={'Menu de comidas'} imagen={comidas}/>
            <div className='imagen' >
                <img src={menu}/>
            </div>
            <div className='grilla_comidas'>
                <ListaImagenes source={IMAGENES} />
            </div>

        </Fragment>
    );
}

export default Menu;