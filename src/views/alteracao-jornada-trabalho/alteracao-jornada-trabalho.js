import React from 'react';

import Stack from '@mui/material/Stack';
import LoadingButtonsTransition from '../../components/LoadingButtonsTransition';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';
import '../../views/alteracao-jornada-trabalho/alteracao-jornada-trabalho.css';

class AlteracaoJornadaTrabalho extends React.Component {
  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepeticao: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-alteracao-jornada-trabalho'>
        <Card title='Alteração de Jornada de Trabalho'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Código: *' htmlFor='inputCodigo'>
                  <input
                    type='text'
                    id='inputCodigo'
                    value={this.state.codigo}
                    className='form-control'
                    name='codigo'
                    onChange={(e) => this.setState({ codigo: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Descrição: *' htmlFor='inputDescricao'>
                  <input
                    type='text'
                    id='inputDescricao'
                    value={this.state.descricao}
                    className='form-control'
                    name='descricao'
                    onChange={(e) => this.setState({ descricao: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Jornada: '>
                  <div className='linha'>
                  <div className='coluna-50'>
                    <input 
                    type='date'
                    id='inputDescricao'
                    value={this.state.descricao}
                    className='form-control'
                    name='descricao'
                    onChange={(e) => this.setState({ descricao: e.target.value })}/>
                  </div>
                  <div className='coluna-50'>
                    <input 
                    type='date'
                    id='inputDescricao'
                    value={this.state.descricao}
                    className='form-control'
                    name='descricao'
                    onChange={(e) => this.setState({ descricao: e.target.value })}/>
                  </div>
                  </div>
                </FormGroup>

                <FormGroup label='Senha: *' htmlFor='inputSenha'>
                  <input
                    type='password'
                    id='inputSenha'
                    value={this.state.senha}
                    className='form-control'
                    name='senha'
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                  <input
                    type='password'
                    id='inputRepitaSenha'
                    value={this.state.senhaRepeticao}
                    className='form-control'
                    name='senha'
                    onChange={(e) =>
                      this.setState({ senhaRepeticao: e.target.value })
                    }
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

export default AlteracaoJornadaTrabalho;