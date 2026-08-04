import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  helperText?: string;
  as?: 'input' | 'textarea';
}

export const FormInput: React.FC<FormInputProps> = ({ name, label, helperText, as = 'input', className = '', ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string;
  
  const InputComponent = as as any;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label htmlFor={name} className="text-sm font-semibold text-gray-800">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        <InputComponent
          id={name}
          {...register(name)}
          {...props}
          className={`
            w-full px-4 py-3.5 rounded-xl bg-gray-100 border-2
            text-gray-900 placeholder:text-gray-400
            focus:outline-none focus:bg-white focus:border-brand-blue
            transition-all duration-200 ease-in-out
            ${error ? 'border-red-500 bg-red-50/50' : 'border-transparent'}
            ${as === 'textarea' ? 'min-h-[120px] resize-y' : ''}
          `}
        />
        {error && as !== 'textarea' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <AlertCircle size={18} />
          </div>
        )}
      </div>

      {error ? (
        <p className="text-sm text-red-500 font-medium flex items-center gap-1.5 mt-0.5">
          {as === 'textarea' && <AlertCircle size={14} />}
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-gray-500 mt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
};
