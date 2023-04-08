import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

const SideBar = () => (
  <div style={{ width: 260}} >
    <Sidenav defaultOpenKeys={['2']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item  href='/' eventKey="1" icon={<DashboardIcon />}>
           Home
          </Nav.Item>
          <Nav.Menu href='/cadastro' eventKey="2" title="Cadastro" icon={<MagicIcon />}>
            <Nav.Item href='/cadastro/cadastro-empresa' eventKey="2-1">Empresa</Nav.Item>
            <Nav.Item href='/cadastro/cadastro-departamento' eventKey="2-2">Departamento</Nav.Item>
            <Nav.Item href='/cadastro/cadastro-funcao' eventKey="2-3">Função</Nav.Item>
            <Nav.Item eventKey="2-4">Jornada de Trabalho</Nav.Item>
            <Nav.Menu eventKey="2-5" title="Funcionário">
              <Nav.Item eventKey="2-5-1">Informações Básicas</Nav.Item>
              <Nav.Item eventKey="2-5-2">Informações de Contrato</Nav.Item>
            </Nav.Menu>
            <Nav.Item href='/cadastro/cadastro-evento' eventKey="2-6">Evento</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="3" title="Movimento" icon={<MagicIcon />}>
            <Nav.Item eventKey="3-1">Lançamento</Nav.Item>
            <Nav.Item href='/movimento/alteracao-jornada-trabalho' eventKey="3-2">Alteração de Jornada de Trabalho</Nav.Item>
            <Nav.Item href='/movimento/alteracao-salarial' eventKey="3-3">Alteração Salarial</Nav.Item>
            <Nav.Item href='/movimento/cadastro-faltas' eventKey="3-4">Faltas</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Cálculo" icon={<MagicIcon />}>
            <Nav.Item href='/calculo/calculo-folha-mensal' eventKey="4-1">Folha Mensal</Nav.Item>
            <Nav.Item href='/calculo/calculo-ferias' eventKey="4-2">Férias</Nav.Item>
            <Nav.Item href='/calculo/calculo-recisao' eventKey="4-3">Recisão</Nav.Item>
            <Nav.Item href='/calculo/calculo-decimo-terceiro' eventKey="4-4">Décimo Terceiro</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="5" title="Relatório" icon={<MagicIcon />}>
            <Nav.Item eventKey="5-1">Listagem de Cadastro</Nav.Item>
            <Nav.Item eventKey="5-2">Relatório de Processamento</Nav.Item>
          </Nav.Menu>
          <Nav.Item eventKey="6" icon={<GroupIcon />}>Sair</Nav.Item> 
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);

export default SideBar