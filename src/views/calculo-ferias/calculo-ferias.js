import React from 'react';

import Stack from '@mui/material/Stack';
import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';

class CalculoFerias extends React.Component {
  state = {
    matricula:'',
    funcionario:'',
    inicioPeriodoAquisitivo:'',
    fimPeriodoAquisitivo:'',
    dataInicio:'',
    dataFim:'',
    quantDias:'',
    dataRetorno:'',
    dataPagamento:'',
  };

  calcular = () => {
    mensagemSucesso(`Férias referente ao funcionário ${this.state.funcionario} calculada com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-ferias'>
        <Card title='Calcular Férias'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
              <FormGroup label='Funcionario: *' htmlFor='inputFuncionario'>
                  <input
                    type='number'
                    id='inputMatricula'
                    value={this.state.matricula}
                    className='form-control'
                    name='matricula'
                    onChange={(e) => this.setState({ matricula: e.target.value })}
                  />
                  <input
                    type='text'
                    id='inputNomeFuncionario'
                    value={this.state.funcionario}
                    className='form-control'
                    name='funcionario'
                    onChange={(e) => this.setState({ funcionario: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Início Período Aquisitivo: *' htmlFor='inputInicioPerAquisitivo'>
                  <input
                    type='date'
                    id='inputInicioPerAquisitivo'
                    value={this.state.inicioPeriodoAquisitivo}
                    className='form-control'
                    name='inicioPerAquisitivo'
                    onChange={(e) =>
                      this.setState({ inicioPeriodoAquisitivo: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Fim Período Aquisitivo: *' htmlFor='inputFimPerAquisitivo'>
                  <input
                    type='date'
                    id='inputFimPerAquisitivo'
                    value={this.state.fimPeriodoAquisitivo}
                    className='form-control'
                    name='fimPerAquisitivo'
                    onChange={(e) =>
                      this.setState({ fimPeriodoAquisitivo: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Data Início: *' htmlFor='inputDataInicio'>
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
                <FormGroup label='Data Fim: *' htmlFor='inputDataFim'>
                  <input
                    type='date'
                    id='inputDataFim'
                    value={this.state.dataFim}
                    className='form-control'
                    name='dataFim'
                    onChange={(e) =>
                      this.setState({ dataFim: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Quantidade de dias: *' htmlFor='inputQuantDias'>
                  <input
                    type='text'
                    id='inputQuantDias'
                    value={this.state.quantDias}
                    className='form-control'
                    name='quantDias'
                    onChange={(e) => this.setState({ quantDias: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label='Data Retorno: *' htmlFor='inputDataRetorno'>
                  <input
                    type='date'
                    id='inputDataRetorno'
                    value={this.state.dataFim}
                    className='form-control'
                    name='dataRetorno'
                    onChange={(e) =>
                      this.setState({ dataRetorno: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Data Pagamento: *' htmlFor='inputDataPagamento'>
                  <input
                    type='date'
                    id='inputDataPagamento'
                    value={this.state.dataPagamento}
                    className='form-control'
                    name='dataPagamento'
                    onChange={(e) =>
                      this.setState({ dataPagamento: e.target.value })
                    }
                  />
                </FormGroup>
                <Stack spacing={1} padding={1} direction='row'>
                  <button
                    onClick={this.calcular}
                    type='button'
                    className='btn btn-success'
                  >
                    Calcular
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

export default CalculoFerias;
