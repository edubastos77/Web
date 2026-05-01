import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './unid-6/paginas/Login';
import Cadastro from './unid-6/paginas/Cadastro';
import Principal from './unid-6/paginas/Principal';
import NotFound from './unid-6/paginas/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/principal" element={<Principal/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;