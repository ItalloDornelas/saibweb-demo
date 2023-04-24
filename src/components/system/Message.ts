import { toast } from 'react-toastify';

export class Message {
  private static duration = 9000;

  private static isClosable = true;

  static success(description: string) {
    toast.success(description, {
      autoClose: this.duration,
      closeOnClick: this.isClosable,
    });
  }

  static error(description: string) {
    toast.error(description, {
      autoClose: this.duration,
      closeOnClick: this.isClosable,
    });
  }

  static info(description: string) {
    toast.info(description, {
      autoClose: this.duration,
      closeOnClick: this.isClosable,
    });
  }

  static warning(description: string) {
    toast.warning(description, {
      autoClose: this.duration,
      closeOnClick: this.isClosable,
    });
  }
}
