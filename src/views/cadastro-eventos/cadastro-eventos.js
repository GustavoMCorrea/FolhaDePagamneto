import * as React from 'react';

import Stack from '@mui/material/Stack';
//import Button from '@mui/material-next/Button';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import BasicSwitches from '../../components/buttonSwitch';

import { mensagemSucesso } from '../../components/toastr';


import '../../custom.css';
    

class CadastroEvento extends React.Component {
  state = {
    codigo: '',
    descricao: '',
    baseInss: '',
    baseIrrf: '',
    baseFgts: '',
    eventoFolhaMensal: '',
    eventoRescisao: '',
    eventoFerias: '',
    eventoDecimoTerceiro: '',
    fatorMultiplicativo:'',
    
  };

  cadastrar = () => {
    mensagemSucesso(`Usuário ${this.state.nome} cadastrado com sucesso!`);
  };

  cancelar = () => {};

  

  render() {
    return (
      <div className='container-eventos'>
        <Card title='Cadastro Evento'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bs-component'>
                <FormGroup label='Base INSS: *' htmlFor='inputDataInicio'>
                  <BasicSwitches/>
                </FormGroup>
                <FormGroup 
                label='Base IRRF: '>
                  <BasicSwitches/>
                </FormGroup>
                <FormGroup 
                label='Base FGTS: '>
                  <BasicSwitches/>
                </FormGroup>
                <FormGroup 
                label='Evento Folha Mensal: '>
                  <BasicSwitches/>
                </FormGroup>
                <FormGroup 
                label='Evento Rescisão: '>
                  <BasicSwitches/>
                </FormGroup>
                <FormGroup 
                label='Evento Férias: '>
                  <BasicSwitches/>
                </FormGroup>
                <FormGroup 
                label='Evento Décimo Terceiro: '>
                  <BasicSwitches/>
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

export default CadastroEvento;