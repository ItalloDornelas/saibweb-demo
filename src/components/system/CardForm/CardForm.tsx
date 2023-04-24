import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ClientsProps } from '~/components/pages/home/TableClient/clients.interface';
import { apiClient } from '~/services/api';
import { apiPaths } from '~/services/const/apiPaths';
import { Button } from '../Button';
import { ConfirmService } from '../Confirm';
import { Input } from '../Input';
import { Message } from '../Message';
import { schema } from './schema';
import { states } from './states';

interface CardFormProps {
  isEdit?: boolean;
  clientEdit?: ClientsProps;
}

export const CardForm = ({ isEdit, clientEdit }: CardFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const api = apiClient();

  const navigate = useRouter();
  const onSubmit = async (data: FieldValues) => {
    let response: AxiosResponse<any, any>;
    try {
      setLoading(true);
      if (isEdit) {
        response = await api.put(apiPaths.put.editUser, {
          TECL_NOME: data.name,
          TECL_ENDERECO: data.address,
          TECL_CIDADE: data.city,
          TECL_UF: data.state,
          TECL_TELEFONE: data.phone,
          TECL_ID: clientEdit?.TECL_ID,
        });
      } else {
        response = await api.post(apiPaths.post.addUser, {
          TECL_NOME: data.name,
          TECL_ENDERECO: data.address,
          TECL_CIDADE: data.city,
          TECL_UF: data.state,
          TECL_TELEFONE: data.phone,
        });
      }

      navigate.push('/');
      Message.success(response.data.message);
      setLoading(false);
    } catch (error) {
      if (isEdit) {
        Message.error('Não foi possivel editar o cliente!');
      } else {
        Message.error('Não foi possivel adicionar um novo cliente!');
      }
    }
  };

  const handleConfirmCancelRegister = () => {
    navigate.push('/');
  };

  const handleCancelRegister = () => {
    if (isDirty) {
      setIsOpen(true);
    } else {
      handleConfirmCancelRegister();
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  console.log(isEdit, clientEdit);

  return (
    <div className="flex flex-col w-full">
      <ConfirmService
        isOpen={isOpen}
        onConfirm={handleConfirmCancelRegister}
        onClose={onClose}
        message="Você tem certeza que deseja sair? Esta ação fará você perder todo
        seu progresso."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-gray.400 rounded-lg px-8 py-16 gap-2 flex flex-col">
          <div className="flex flex-col gap-2">
            <Input
              errors={errors.name?.message}
              defaultValue={isEdit ? clientEdit?.TECL_NOME : ''}
              label="Nome"
              register={register}
              name="name"
            />
            <Input
              errors={errors.address?.message}
              defaultValue={isEdit ? clientEdit?.TECL_ENDERECO : ''}
              label="Endereço"
              register={register}
              name="address"
            />
          </div>
          <div className="gap-2 flex md-max:flex-col">
            <Input
              defaultValue={isEdit ? clientEdit?.TECL_CIDADE : ''}
              errors={errors.city?.message}
              label="Cidade"
              register={register}
              name="city"
            />
            <div className="flex flex-col">
              <label className="text-base font-medium text-black w-full">
                UF
              </label>
              <div
                className="bg-white select-none flex items-center gap-3 rounded-md transition-all duration-75 w-full border border-border-form
          focus-within:border-primary focus-within:border-1 h-9"
              >
                <select
                  className="bg-transparent w-20 border-none text-base placeholder:font-normal font-medium py-2 px-3 rounded-[5px] outline-none h-full"
                  {...register('state')}
                  defaultValue={isEdit ? clientEdit?.TECL_UF : ''}
                >
                  {states.map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <Input
              errors={errors.phone?.message}
              label="Telefone"
              register={register}
              defaultValue={isEdit ? clientEdit?.TECL_TELEFONE : ''}
              name="phone"
            />
          </div>
        </div>

        <div className="flex mt-6 justify-end gap-4">
          <Button className="bg-primary" type="submit">
            {loading ? 'Carregando...' : 'Salvar'}
          </Button>
          <Button className="bg-secondary-300" onClick={handleCancelRegister}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};
