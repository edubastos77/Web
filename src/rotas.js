import { HashRouter, Routes, Route } from 'react-router-dom';

import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Principal from './paginas/Principal';
import NotFound from './paginas/NotFound';

const Rotas = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default Rotas;
