import Header from '~/components/Header';
import { CardForm } from '~/components/system/CardForm';

export const ClientCreate = () => {
  return (
    <div className="column w-full">
      <Header title="Novo Registro" isNavigation={true} />
      <div className="w-full justify-center p-5">
        <CardForm />
      </div>
    </div>
  );
};
