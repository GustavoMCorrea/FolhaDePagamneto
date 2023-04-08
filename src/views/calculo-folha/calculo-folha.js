import React from 'react';

import Stack from '@mui/material/Stack';
import Card from '../../components/card';
import FormGroup from '../../components/form-group';

import { mensagemSucesso } from '../../components/toastr';

import '../../custom.css';

class CalculoFolha extends React.Component {
  state = {
    mes:'',
    ano:'',
  };

  calcular = () => {
    mensagemSucesso(`Folha mensal referente a competência ${this.state.competencia} calculada com sucesso!`);
  };

  cancelar = () => {};

  render() {
    return (
      <div className='container-folha'>
        <Card title='Calcular Folha Mensal'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
              <FormGroup label='Competência: *' htmlFor='inputCompetencia'>
                  <input
                    type='month'
                    id='inputMes'
                    value={this.state.mes}
                    className='form-control'
                    name='mes'
                    onChange={(e) => this.setState({ mes: e.target.value })}
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

export default CalculoFolha;
