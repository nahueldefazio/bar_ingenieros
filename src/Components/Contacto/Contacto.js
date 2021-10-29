import React, {Fragment} from 'react';
import '../Contacto/Contacto.css'
import delivery from "../../images/bar_dia_5.png";
import ImagenPrincipal from "../Shared/ImagenPrincipal/ImagenPrincipal";

function Contacto(props) {
    return (
        <Fragment>
            <ImagenPrincipal titulo={'Delivery'} imagen={delivery}/>

            <div className="accordion" id="accordionExample">
                <h2>Preguntas mas frecuentes</h2>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until
                            the collapse plugin adds the appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className='contenedor-horarios'>
                <div className='horarios-delivery'>
                    <h1>Horarios - Delivery</h1>
                    <h4>Turno mediodia</h4>
                    <span>Lunes a Sabados: 12:00 hrs - 15:00 hrs</span>
                    <h4>Turno Noche</h4>
                    <span>Lunes a Sabados: 19:30 hrs - 22:30 hrs</span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe className={'radiodelivery'}
                        src="https://www.google.com/maps/d/u/0/embed?mid=1D6FKIosfoa2svbnFbzaL8gsraUE5wYmf" width={640}
                        height={480}/>
            </div>

            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.9727203106786!2d-58.49711838416246!3d-34.50357585971449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb110e171a41d%3A0xc7143aebd38c950!2sBar%20Jos%C3%A9%20Ingenieros!5e0!3m2!1ses-419!2sar!4v1630562203139!5m2!1ses-419!2sar"
                style={{border: 0}} allowFullScreen loading="lazy" className={'googlemaps'}/>

            <form>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example1">Name</label>
                    <input type="text" id="form4Example1" className="form-control"/>

                </div>

                {// <!-- Email input -->}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example2">Email address</label>
                    <input type="email" id="form4Example2" className="form-control"/>

                </div>

                /*{!-- Message input --}*/}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example3">Message</label>
                    <textarea className="form-control" id="form4Example3" rows="4"/>

                </div>

                {/*{!--Checkbox--}*/}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form4Example4"
                        checked
                    />
                    <label className="form-check-label" htmlFor="form4Example4">
                        Send me a copy of this message
                    </label>
                </div>

                {/*{!--Submit button --}*/}
                <button type="submit" className="btn btn-primary btn-block mb-4 btn-submit">Send</button>
            </form>
        </Fragment>
    );
}

export default Contacto;