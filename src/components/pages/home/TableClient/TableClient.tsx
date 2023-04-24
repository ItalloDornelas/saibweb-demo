import { Spinner } from '@phosphor-icons/react';
import { SetStateAction, useEffect, useState } from 'react';
import { apiClient } from '~/services/api';
import { apiPaths } from '~/services/const/apiPaths';
import EmptyTable from './EmptyTable';
import { TableFromApi } from './TableFromApi';
import { ClientsProps } from './clients.interface';

export const TableClient = () => {
  const [clients, setClients] = useState<ClientsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const handleChange = (e: { target: { value: SetStateAction<string> } }) =>
    setValue(e.target.value);
  const api = apiClient();

  const getAllClients = async () => {
    try {
      const response = await api.get(apiPaths.get.getUsers);
      setClients(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredClient: ClientsProps[] = value
    ? clients.filter((res) => {
        let name = res.TECL_NOME.toString();
        return name.toLowerCase().match(`${value.toLowerCase()}.*`);
      })
    : clients;

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner
          color="#fff"
          size={20}
          weight="bold"
          className="animate-spin"
        />
      ) : (
        <>
          {clients.length ? (
            <div className="flex flex-col gap-5 items-center w-full mt-4">
              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Pesquisar"
                className="bg-transparent appearance-none w-3/6 border-primary border text-base leading-4 placeholder:font-normal font-medium py-2 px-3 rounded-[5px] outline-none h-full"
              />
              <TableFromApi
                clients={filteredClient}
                getAllClients={getAllClients}
              />
            </div>
          ) : (
            <EmptyTable />
          )}
        </>
      )}
    </>
  );
};
