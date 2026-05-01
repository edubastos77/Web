import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Home from './unid_5/paginas/Home';
import Sobre from './unid_5/paginas/Sobre';
import Contato from './unid_5/paginas/Contato';
import NotFound from './unid_5/paginas/NotFound';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/sobre" element={<Sobre/>} />
                <Route exact={true} path="/contato" element={<Contato/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;