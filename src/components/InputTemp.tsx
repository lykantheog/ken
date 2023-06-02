import { FieldInputProps } from "formik";
import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  touched?: boolean;
  error?: string;
  placeholder?: string;
  Ibg?: string;
  styles?: { heading?: any; input?: any };
  className?: string;
}

export const InputTemp = (props: Props) => {
  //TODO switch ibg to inputprops
  const { label, touched, styles, required, error, className, ...rest } = props;

  return (
    <div className='w-full'>
      <div className='flex justify-between mb-1 text-sm font-medium'>
        <p {...(styles?.heading || {})} className='whitespace-nowrap'>
          {label} {required && <span className='text-red-500'>*</span>}
        </p>
        {touched && error && (
          <p className='text-red-500 text-center italic text-xs'>{error}</p>
        )}
      </div>
      <input
        className={`rounded-lg w-full py-1 px-4 bg-white outline-none ${className} border border-neutral-300`}
        {...rest}
      />
    </div>
  );
};

interface TProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  touched?: boolean;
  error?: string;
  placeholder?: string;
  Ibg?: string;
  styles?: { heading?: any; input?: any };
  className?: string;
  rows?: number;
}

export const InputTextarea = (props: TProps) => {
  //TODO switch ibg to inputprops
  const { label, touched, styles, required, error, className, ...rest } = props;

  return (
    <div className='w-full'>
      <div className='flex justify-between mb-1 text-sm font-medium'>
        <p {...(styles?.heading || {})}>
          {label} {required && <span className='text-red-500'>*</span>}
        </p>
        {touched && error && (
          <p className='text-red-500 text-center italic text-xs'>{error}</p>
        )}
      </div>
      <textarea
        className={`rounded-lg w-full py-1 px-2 bg-white outline-none ${className} border border-neutral-300 resize-none`}
        {...rest}
      />
    </div>
  );
};
