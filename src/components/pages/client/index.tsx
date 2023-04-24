import { useCurrentUser } from '~/context/CurrentUser';
import { ClientCreate } from './ClientCreate';
import { ClientEdit } from './ClientEdit';

export const Client = () => {
  const { currentUser } = useCurrentUser();

  return <>{currentUser ? <ClientEdit /> : <ClientCreate />}</>;
};
