import { useRouter } from 'next/router';
import { paths } from '~/services/const/paths';

export default function EmptyTable() {
  const router = useRouter();
  return (
    <div
    // p="4"
    // boxShadow="lg"
    // m="4"
    // borderRadius="lg"
    // flexDir="column"
    // bg="blackAlpha.300"
    >
      <div
      // align="center" justify="center" gap="8"
      >
        <span
        // fontSize="xl" fontWeight="bold"
        >
          Não há clientes registrados!
        </span>
      </div>
      <span
      // fontSize="sm" fontWeight="medium"
      >
        Para registrar um novo cliente basta clicar em{' '}
        <div onClick={() => router.push(paths.register)}>registrar.</div>
      </span>
    </div>
  );
}
