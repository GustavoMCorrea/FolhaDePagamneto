import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';

class AlteracaoSalarial extends React.Component {
  state = {
    funcionario: '',
    salarioAtual: '',
    percentAlteracao: '',
    novoSalario: '',
    dataAlteracao: '',
    motivoAlteracao: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-alteracao-salarial'>
        <Card title='Alteração Salarial'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Funcionário: *' htmlFor='inputNome'>
                  <select id='inputNome'
                    value={this.state.nome}
                    className='form-control'
                    name='nome'
                    required
                    onChange={(e) => this.setState({ nome: e.target.value })}>
                    <option value="func1">Gustavo</option>
                    <option value="func2">Rayane</option>
                    <option value="func3">William</option>
                    <option value="func3" selected></option>
                  </select>
                </FormGroup>
                <FormGroup label='Salário Atual: *' htmlFor='SalarioAtual'>
                  <input
                    type='number'
                    id='SalarioAtual'
                    value={this.state.SalarioAtual}
                    className='form-control'
                    name='salarioAtual'
                    onChange={(e) => this.setState({ salarioAtual: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Percentual de Alteração: *' htmlFor='inputPercentual'>
                  <input
                    type='number'
                    id='inputPercentual'
                    value={this.state.percentual}
                    className='form-control'
                    name='percentual'
                    onChange={(e) => this.setState({ percentual: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Novo Salário: *' htmlFor='inputNovoSalario'>
                  <input
                    type='number'
                    id='inputNovoSalario'
                    value={this.state.novoSalario}
                    className='form-control'
                    name='novoSalario'
                    onChange={(e) =>
                      this.setState({ novoSalario: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Data de Alteração: *' htmlFor='inputDataAlteracao'>
                  <input
                    type='date'
                    id='inputDataAlteracao'
                    value={this.state.dataAlteracao}
                    className='form-control'
                    name='dataAlteracao'
                    onChange={(e) =>
                      this.setState({ dataAlteracao: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Motivo da Alteração: *' htmlFor='inputMotivoAlteracao'>
                  <input
                    type='text'
                    id='inputMotivoAlteracao'
                    value={this.state.motivoAlteracao}
                    className='form-control'
                    name='motivoAlteracao'
                    onChange={(e) =>
                      this.setState({ motivoAlteracao: e.target.value })
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

export default AlteracaoSalarial;