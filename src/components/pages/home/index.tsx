import Header from '~/components/Header';
import { TableClient } from '~/components/pages/home/TableClient';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Teste ReactJS - SaibWeb" />
      <div className="flex flex-col h-max max-h-[55%] w-full">
        <TableClient />
      </div>
    </div>
  );
};
