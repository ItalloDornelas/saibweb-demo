import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import editImg from '~/assets/edit.png';
import minusImg from '~/assets/minus.png';
import { ConfirmService } from '~/components/system/Confirm';
import { Message } from '~/components/system/Message';
import { useCurrentUser } from '~/context/CurrentUser';
import { apiClient } from '~/services/api';
import { apiPaths } from '~/services/const/apiPaths';
import { paths } from '~/services/const/paths';
import { ClientsProps } from './clients.interface';
import { headerTable } from './headerTable';

interface TableFromApiProps {
  clients: ClientsProps[];
  getAllClients: () => void;
}

export const TableFromApi = ({ clients, getAllClients }: TableFromApiProps) => {
  const [id, setId] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const { setCurrentUser } = useCurrentUser();
  const api = apiClient();

  const router = useRouter();

  const onClose = () => {
    setIsOpen(false);
  };

  const deleteClient = async (id: number) => {
    try {
      const response = await api.delete(`${apiPaths.delete.deleteUser}/${id}`);
      Message.success(response.data.message);
      getAllClients();
      onClose();
    } catch (error) {
      Message.error('Não foi possivel deletar!');
    }
  };

  return (
    <>
      <ConfirmService
        isOpen={isOpen}
        onClose={onClose}
        message="Você tem certeza que deseja deletar?"
        onConfirm={() => deleteClient(id)}
      />
      <section className="sm-max:hidden flex-grow overflow-auto flex justify-center w-full">
        <table className="table w-5/6 items-center">
          <thead>
            <tr>
              {headerTable.map((header) => (
                <td
                  key={header.label}
                  className="sticky top-0 px-2 py-1.5 bg-primary font-bold border-primary border"
                >
                  {header.imgPath ? (
                    <div className="cursor-pointer">
                      <Image
                        src={header.imgPath}
                        alt="imagem para adicionar"
                        onClick={() => {
                          router.push(paths.client);
                        }}
                      />
                    </div>
                  ) : (
                    <span>{header.label}</span>
                  )}
                </td>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y border-primary border">
            {clients.length ? (
              clients.map((client) => {
                return (
                  <tr
                    key={client.TECL_ID}
                    className="bg-white hover:bg-white-300"
                  >
                    <td className="px-2 py-1.5 font-medium w-24 border-b border-primary">
                      <div className="flex items-center gap-4 cursor-pointer">
                        <Image
                          src={minusImg}
                          alt="imagem para deletar"
                          onClick={() => {
                            setId(client.TECL_ID);
                            setIsOpen(true);
                          }}
                        />
                        <Image
                          src={editImg}
                          alt="imagem para editar"
                          onClick={() => {
                            setCurrentUser(client);
                            router.push(paths.client);
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-2 py-1.5  font-medium text-sm border-b border-primary">
                      <span>{client.TECL_NOME}</span>
                    </td>
                    <td className="px-2 py-1.5 font-medium text-sm border-b border-primary">
                      <span>{client.TECL_ENDERECO}</span>
                    </td>
                    <td className="px-2 py-1.5 font-medium text-sm border-b border-primary">
                      <span>{client.TECL_CIDADE}</span>
                    </td>
                    <td className="px-2 py-1.5  font-medium text-sm border-b border-primary">
                      <span>{client.TECL_UF}</span>
                    </td>
                    <td className="px-2 py-1.5 font-medium text-sm border-b border-primary">
                      <span>{client.TECL_TELEFONE}</span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>
                  <div>
                    <span>Pesquisa não encontrada.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
