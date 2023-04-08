import React from 'react';

import Stack from '@mui/material/Stack';
import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';

class CadastroFalta extends React.Component {
  state = {
    matricula: '',
    funcionario:'',
    dataInicial: '',
    dataFinal: '',
    Justificativa: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Falta do funcionário ${this.state.matricula} - ${this.state.funcionario} cadastrada com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-falta'>
        <Card title='Cadastrar Falta'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Funcionario: *' htmlFor='inputFuncionario'>
                  <input
                    type='text'
                    id='inputNomeFuncionario'
                    value={this.state.funcionario}
                    className='form-control'
                    name='funcionario'
                    onChange={(e) => this.setState({ funcionario: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Justificativa: *' htmlFor='inputJustificativa'>
                  <select id='inputJustificativa'
                    value={this.state.justificativa}
                    className='form-control'
                    name='justificativa'
                    required
                    onChange={(e) => this.setState({ justificativa: e.target.value })}>
                    <option value="atestadoMedico">Atestado Médico</option>
                    <option value="faltaInjustificada">Falta Injustificada</option>
                    <option value="faltaInjustificada" selected></option>
                  </select>
                </FormGroup>
                <Stack spacing={1} padding={1} direction='row'>
                  <button
                    onClick={this.cadastrar}
                    type='button'
                    className='btn btn-success'
                  >
                    Salvar
                  </button>
                  <button
                    onClick={this.cancelar}
                    type='button'
                    className='btn btn-danger'
                  >
                    Cancelar
                  </button>
                </Stack>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default CadastroFalta;
