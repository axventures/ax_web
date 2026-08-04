import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormRadioGroupProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  required?: boolean;
}

export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({ name, label, options, required }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string;


  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <label 
            key={option.value} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="w-5 h-5 text-brand-blue focus:ring-brand-blue border-gray-300 cursor-pointer"
            />
            <span className="text-[15px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-500 font-medium mt-0.5">{error}</p>
      )}
    </div>
  );
};
