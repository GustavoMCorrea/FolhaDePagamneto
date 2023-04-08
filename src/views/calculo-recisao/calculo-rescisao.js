import React from 'react';

import Stack from '@mui/material/Stack';
import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';
import { Schema } from 'rsuite';


class CalculoRescisao extends React.Component {
  state = {
    matricula:'',
    funcionario:'',
    motivo:'',
    dataRescisao:'',
    dataPagamento:'',
    saldoFgts:'',
    tipoAviso:'',
    observacoes:'',
  };

  calcular = () => {
    mensagemSucesso(`Rescisão referente ao funcionário ${this.state.funcionario} calculada com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-rescisao'>
        <Card title='Calcular Rescisão'>
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
                <FormGroup label='Motivo: *' htmlFor='inputMotivo'>
                  <select id='inputMotivo'
                    value={this.state.motivo}
                    className='form-control'
                    name='motivo'
                    required
                    onChange={(e) => this.setState({ motivo: e.target.value })}>
                    <option value="op1">Pedido de demissão, por iniciativa do empregado</option>
                    <option value="op2">Rescisão sem justa causa, por iniciativa do empregador</option>
                    <option value="op3">Rescisão com justa causa, por iniciativa do empregador</option>
                    <option value="op2" selected></option>
                  </select>
                </FormGroup>
                <FormGroup label='Último dia Trabalhado: *' htmlFor='inputDataRescisao'>
                  <input
                    type='date'
                    id='inputDataRescisao'
                    value={this.state.dataRescisao}
                    className='form-control'
                    name='dataRescisao'
                    onChange={(e) =>
                      this.setState({ dataRescisao: e.target.value })
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
                <FormGroup label='Saldo FGTS: ' htmlFor='inputSaldoFGTS'>
                  <input
                    type='number'
                    id='inputSaldoFGTS'
                    value={this.state.saldoFgts}
                    className='form-control'
                    name='saldoFgts'
                    onChange={(e) =>
                      this.setState({ saldoFgts: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label='Tipo de Aviso: *' htmlFor='inputTipoAviso'>
                  <select id='inputTipoAviso'
                    value={this.state.tipoAviso}
                    className='form-control'
                    name='tipoAviso'
                    required
                    onChange={(e) => this.setState({ tipoAviso: e.target.value })}>
                    <option value="op1">Indenizado</option>
                    <option value="op2">Trabalhado</option>
                    <option value="op3">Dispensado</option>
                    <option value="op2" selected></option>
                  </select>
                </FormGroup>
                <FormGroup label='Observações: *' htmlFor='inputObservacoes'>
                  <input
                    type='text'
                    id='inputObservacoes'
                    value={this.state.observacoes}
                    className='form-control'
                    name='observacoes'
                    onChange={(e) => this.setState({ observacoes: e.target.value })}
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

export default CalculoRescisao;
