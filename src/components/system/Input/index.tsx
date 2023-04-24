import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

import { TextAction } from '../TextAction';

interface InputType {
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  label?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  defaultValue: string | number | readonly string[] | undefined;
}

export function Input({
  errors,
  label,
  register,
  name,
  defaultValue,
  ...props
}: InputType) {
  return (
    <div className="flex flex-col items-start justify-start gap-0.5 w-full">
      <label
        htmlFor={name}
        className="text-base font-medium text-black w-full md-max:uppercase -mb-0.5"
      >
        {label}
      </label>
      <div
        className="bg-white select-none flex items-center gap-3 rounded-md transition-all duration-75 w-full border border-border-form
          focus-within:border-primary focus-within:border-2 h-9"
      >
        <input
          className="bg-transparent appearance-none w-full border-none text-base leading-4 placeholder:font-normal font-medium py-2 px-3 rounded-[5px] outline-none h-full"
          id={name}
          {...register(name)}
          {...props}
        />
      </div>
      {errors && (
        <TextAction size="sm" className="text-red font-semibold">
          <>{errors}</>
        </TextAction>
      )}
    </div>
  );
}
