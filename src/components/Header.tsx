import Image from 'next/image';
import { useRouter } from 'next/router';
import backImg from '~/assets/back.png';
import { paths } from '~/services/const/paths';

interface HeaderProps {
  title: string;
  isNavigation?: boolean;
}

export default function Header({ title, isNavigation }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-secondary-400 w-full border-b-[2px] border-bottom border-gray-500 py-2 px-8">
      <div className="gap-2 items-center flex">
        {isNavigation && (
          <Image
            src={backImg}
            alt="imagem para voltar"
            onClick={() => router.push(paths.homepage)}
            className="cursor-pointer"
          />
        )}
        <span className="font-medium text-xl">{title}</span>
      </div>
    </div>
  );
}
