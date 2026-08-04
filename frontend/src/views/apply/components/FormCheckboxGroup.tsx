import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Check } from 'lucide-react';

interface FormCheckboxGroupProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  required?: boolean;
}

export const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({ name, label, options, required }) => {
  const { watch, setValue, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string;
  
  // react-hook-form handles arrays for multiple checkboxes natively if you use the same name,
  // but we can also manage it by watching the array.
  const selectedValues: string[] = watch(name) || [];

  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      setValue(name, selectedValues.filter(v => v !== value), { shouldValidate: true, shouldDirty: true });
    } else {
      setValue(name, [...selectedValues, value], { shouldValidate: true, shouldDirty: true });
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return (
            <label 
              key={option.value} 
              className={`
                flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-brand-blue bg-white shadow-[0_0_0_4px_rgba(24,1,173,0.05)]' 
                  : 'border-transparent bg-gray-100 hover:bg-gray-200'}
              `}
              onClick={(e) => {
                e.preventDefault(); // prevent double toggle
                handleToggle(option.value);
              }}
            >
              <div className={`
                w-5 h-5 rounded border flex items-center justify-center transition-colors
                ${isSelected ? 'bg-brand-blue border-brand-blue' : 'border-gray-300 bg-white'}
              `}>
                {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
              
              <span className={`text-[15px] font-medium ${isSelected ? 'text-brand-blue' : 'text-gray-700'}`}>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="text-sm text-red-500 font-medium mt-0.5">{error}</p>
      )}
    </div>
  );
};
