import Navbar from "./Components/Shared/Navbar/Navbar";
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Delivery_Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Shared/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Menu2 from './Components/Menu/Menu2'
import Inicio2 from './Components/Inicio/Inicio2'

function App() {
    return (
        <Router>
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Inicio2} />
                    <Route path='/menu' component={Menu2} />
                    <Route path='/contacto' component={Delivery_Contacto} />
                    <Route path='/nosotros' component={Nosotros} />
                </Switch>
            <Footer />
        </Router>
    );
}

export default App;
