import { ReactNode } from 'react';

import { CurrentUserProvider } from './CurrentUser';
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <CurrentUserProvider>{children}</CurrentUserProvider>;
};

export default Providers;
