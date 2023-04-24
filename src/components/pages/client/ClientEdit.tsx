import Header from '~/components/Header';
import { CardForm } from '~/components/system/CardForm';
import { useCurrentUser } from '~/context/CurrentUser';

export const ClientEdit = () => {
  const { currentUser } = useCurrentUser();
  return (
    <div className="column w-full">
      <Header title="Editar Registro" isNavigation={true} />
      <div className="w-full justify-center p-5">
        <CardForm isEdit={true} clientEdit={currentUser} />
      </div>
    </div>
  );
};
