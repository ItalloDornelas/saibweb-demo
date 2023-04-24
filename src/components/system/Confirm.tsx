import { Transition } from '@headlessui/react';
import { CheckCircle, XCircle } from '@phosphor-icons/react';

import { Button } from './Button';
import { Text } from './Text';

interface ConfirmProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
  confirm?: string;
  cancel?: string;
}

export function ConfirmService({
  isOpen,
  title = 'Confirmação',
  message,
  onConfirm,
  onClose,
  confirm = 'Confirmar',
  cancel = 'Cancelar',
}: ConfirmProps) {
  return (
    <Transition
      className="w-full h-full fixed top-0 left-0 bg-loading flex items-center justify-center z-[999]"
      show={isOpen}
      enter="transition-all ease-in-out duration-150 delay-100"
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex items-center justify-center flex-col gap-1 bg-white rounded-md h-max min-w-[280px] w-max max-w-fit overflow-auto">
        <Text
          size="lg"
          className="text-black font-bold text-left w-full border-b border-border-form py-1.5 px-2"
        >
          {title}
        </Text>
        <div className="flex flex-col items-center justify-start gap-2 bg-white w-max max-w-fit rounded-md py-1.5 px-2">
          <Text className="text-center text-black-600" size="lg">
            {message}
          </Text>
          <div className="flex items-center justify-center gap-4 w-full">
            <Button
              onClick={onConfirm}
              className="bg-green text-white"
              variant="structure"
            >
              <CheckCircle size={22} weight="fill" />
              {confirm}
            </Button>
            <Button
              onClick={onClose}
              className="bg-red text-white"
              variant="structure"
            >
              <XCircle size={22} weight="fill" />
              {cancel}
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
