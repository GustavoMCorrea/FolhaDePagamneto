import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';


class CadastroDepartamento extends React.Component {
  state = {
    codigo: '',
    nome: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Departamento${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-departamento'>
        <Card title='Cadastro de Departamento' className='departamento'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>

                <FormGroup label='Código: *' htmlFor='inputCodigo'>
                  <input
                    type='number'
                    id='Codigo'
                    value={this.state.Codigo}
                    className='form-control'
                    name='codigo'
                    onChange={(e) => this.setState({ codigo: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Nome: *' htmlFor='inputNome'>
                  <input
                    type='text'
                    id='inputNome'
                    value={this.state.nome}
                    className='form-control'
                    name='nome'
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  />
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

export default CadastroDepartamento;