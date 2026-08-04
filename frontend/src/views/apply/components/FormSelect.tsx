import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ChevronDown, AlertCircle } from 'lucide-react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { label: string; value: string }[];
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, label, options, className = '', ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label htmlFor={name} className="text-sm font-semibold text-gray-800">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        <select
          id={name}
          {...register(name)}
          {...props}
          className={`
            w-full px-4 py-3.5 rounded-xl bg-gray-100 border-2 appearance-none
            text-gray-900 
            focus:outline-none focus:bg-white focus:border-brand-blue
            transition-all duration-200 ease-in-out cursor-pointer
            ${error ? 'border-red-500 bg-red-50/50' : 'border-transparent'}
          `}
        >
          <option value="" disabled>Select an option...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <ChevronDown size={18} />
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500 font-medium flex items-center gap-1.5 mt-0.5">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
};
