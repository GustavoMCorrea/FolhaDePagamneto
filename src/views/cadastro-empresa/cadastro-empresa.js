import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';

import './cadastro-empresa.css'

class CadastroEmpresa extends React.Component {
  state = {
    codigo: '',
    cnpj: '',
    razaoSocial: '',
    clasTributaria: '',
    natJuridica: '',
    dtInicioEmpresa: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    municipio: '',
    estado: '',
    pais: '',
    funcResponsavel: '',
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-empresa'>
        <Card title='Cadastro de Empresa'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Código: *' htmlFor='Codigo'>
                  <input
                    type='number'
                    id='Codigo'
                    value={this.state.Codigo}
                    className='form-control'
                    name='codigo'
                    onChange={(e) => this.setState({ codigo: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='CNPJ: *' htmlFor='inputCnpj'>
                  <input
                    type='text'
                    id='inputCnpj'
                    value={this.state.cnpj}
                    className='form-control'
                    name='cnpj'
                    onChange={(e) => this.setState({ cnpj: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Razão Social: *' htmlFor='inputRazaoSocial'>
                  <input
                    type='text'
                    id='inputRazaoSocial'
                    value={this.state.razaoSocial}
                    className='form-control'
                    name='razaoSocial'
                    onChange={(e) =>
                      this.setState({ razaoSocial: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Classificação Tributária: *' htmlFor='inputClasTributaria'>
                  <select id='inputClasTributaria'
                    value={this.state.clasTributaria}
                    className='form-control'
                    name='clasTributaria'
                    required
                    onChange={(e) => this.setState({ clasTributaria: e.target.value })}>
                    <option value="op1">Simples Nacional</option>
                    <option value="op2">Micro Empreendedor Individual</option>
                    <option value="op3">Pessoal Jurídica em Geral</option>
                    <option value="op3" selected></option>
                  </select>
                </FormGroup>
                <FormGroup label='Natureza Jurídica: *' htmlFor='inputNatJuridica'>
                  <select id='inputNatJuridica'
                    value={this.state.natJuridica}
                    className='form-control'
                    name='natJuridica'
                    required
                    onChange={(e) => this.setState({ natJuridica: e.target.value })}>
                    <option value="op1">Sociedade Anônima</option>
                    <option value="op2">Sociedade Empresária Limitada</option>
                    <option value="op3">Empresário Individual</option>
                    <option value="op2" selected></option>
                  </select>
                </FormGroup>
                <FormGroup label='Data de Início da Empresa: *' htmlFor='inputDataInicio'>
                  <input
                    type='date'
                    id='inputDataInicio'
                    value={this.state.dataInicio}
                    className='form-control'
                    name='dataInicio'
                    onChange={(e) =>
                      this.setState({ dataInicio: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='CEP: *' htmlFor='inputCep'>
                  <input
                    type='text'
                    id='inputCep'
                    value={this.state.cep}
                    className='form-control'
                    name='cep'
                    onChange={(e) =>
                      this.setState({ cep: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Logradouro: *' htmlFor='inputLogradouro'>
                  <input
                    type='text'
                    id='inputLogradouro'
                    value={this.state.logradouro}
                    className='form-control'
                    name='logradouro'
                    onChange={(e) =>
                      this.setState({ logradouro: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Número: *' htmlFor='inputNumero'>
                  <input
                    type='number'
                    id='inputNumero'
                    value={this.state.numero}
                    className='form-control'
                    name='numero'
                    onChange={(e) =>
                      this.setState({ numero: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Complemento: *' htmlFor='inputComplemento'>
                  <input
                    type='text'
                    id='inputComplemento'
                    value={this.state.complemento}
                    className='form-control'
                    name='complemento'
                    onChange={(e) =>
                      this.setState({ complemento: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Bairro: *' htmlFor='inputBairro'>
                  <input
                    type='text'
                    id='inputBairro'
                    value={this.state.bairro}
                    className='form-control'
                    name='bairro'
                    onChange={(e) =>
                      this.setState({ bairro: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Município: *' htmlFor='inputMunicipio'>
                  <input
                    type='text'
                    id='inputMunicipio'
                    value={this.state.municipio}
                    className='form-control'
                    name='municipio'
                    onChange={(e) =>
                      this.setState({ municipio: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Estado: *' htmlFor='inputEstado'>
                  <input
                    type='text'
                    id='inputEstado'
                    value={this.state.estado}
                    className='form-control'
                    name='estado'
                    onChange={(e) =>
                      this.setState({ estado: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='País: *' htmlFor='inputPais'>
                  <input
                    type='text'
                    id='inputPais'
                    value={this.state.pais}
                    className='form-control'
                    name='pais'
                    onChange={(e) =>
                      this.setState({ pais: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Funcionário Responsável: *' htmlFor='inputFunResponsavel'>
                  <select id='inputFunResponsavel'
                    value={this.state.funResponsavel}
                    className='form-control'
                    name='funResponsavel'
                    required
                    onChange={(e) => this.setState({ funResponsavel: e.target.value })}>
                    <option value="op1">Gustavo Mota Corrêa</option>
                    <option value="op2">Rayane da Silva Carvalho</option>
                    <option value="op3">William Vieira de Souza</option>
                    <option value="op2" selected></option>
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

export default CadastroEmpresa;