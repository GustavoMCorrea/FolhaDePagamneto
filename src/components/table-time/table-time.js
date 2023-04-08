import { Table, Button } from 'rsuite';
import { mockUsers } from './mock';

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(7);

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === 'EDIT';
  return (
    <Cell {...props} className={editing ? 'table-content-editing' : ''}>
      {editing ? (
        <input
          className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={event => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData.id);
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};

const App = () => {
  const [data, setData] = React.useState(defaultData);

  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEditState = id => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find(item => item.id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setData(nextData);
  };

  return (
    <Table height={420} data={data}>
      <Column width={200}>
        <HeaderCell>Dia</HeaderCell>
        <EditableCell dataKey="firstName" />
      </Column>

      <Column width={200}>
        <HeaderCell>Horário de entrada</HeaderCell>
        <EditableCell dataKey="lastName" onChange={handleChange} />
      </Column>

      <Column width={200}>
        <HeaderCell>Inicio do Intervalo</HeaderCell>
        <EditableCell dataKey="lastName" onChange={handleChange} />
      </Column>

      <Column width={200}>
        <HeaderCell>Fim do Intervalo</HeaderCell>
        <EditableCell dataKey="lastName" onChange={handleChange} />
      </Column>

      <Column width={200}>
        <HeaderCell>Horário de Saída</HeaderCell>
        <EditableCell dataKey="lastName" onChange={handleChange} />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>...</HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState} />
      </Column>
    </Table>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));