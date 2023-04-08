import React from 'react';

import CadastroEmpresa from './views/cadastro-empresa/cadastro-empresa'
import CadastroDepartamento from './views/cadastro-departamento/cadastro-departamento';
import CadastroFuncao from './views/cadastro-funcao/cadastro-funcao';
import CadastroEventos from './views/cadastro-eventos/cadastro-eventos';

import AlteracaoSalarial from './views/alteracao-salarial/alteracao-salarial'
import AlteracaoJornadaTrabalho from './views/alteracao-jornada-trabalho/alteracao-jornada-trabalho'
import Faltas from './views/cadastro-faltas/cadastro-falta'

import FolhaMensal from './views/calculo-folha/calculo-folha';
import Ferias from './views/calculo-ferias/calculo-ferias'
import Recisao from './views/calculo-recisao/calculo-rescisao'
//import Faltas from './views/'

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/cadastro/cadastro-empresa' element={<CadastroEmpresa/>}/>
        <Route path='/cadastro/cadastro-departamento' element={<CadastroDepartamento/>}/>
        <Route path='/cadastro/cadastro-funcao' element={<CadastroFuncao/>}/>
        <Route path='/cadastro/cadastro-evento' element={<CadastroEventos/>}/>

        <Route path='/movimento/alteracao-jornada-trabalho' element={<AlteracaoJornadaTrabalho/>}/>
        <Route path='/movimento/alteracao-salarial' element={<AlteracaoSalarial/>}/>
        <Route path='/movimento/cadastro-faltas' element={<Faltas/>}/>

        <Route path='/calculo/calculo-folha-mensal' element={<FolhaMensal/>}/>
        <Route path='/calculo/calculo-ferias' element={<Ferias/>}/>
        <Route path='/calculo/calculo-recisao' element={<Recisao/>}/>
                  
        
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;