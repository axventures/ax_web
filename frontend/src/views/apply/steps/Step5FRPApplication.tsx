import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../components/FormInput';
import { FormSelect } from '../components/FormSelect';
import { motion } from 'framer-motion';

export const Step5FRPApplication: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors['declaration']?.message as string;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">FRP Application</h2>
        <p className="text-gray-500 text-sm">Final details about your application to the Founder Readiness Program.</p>
      </div>

      <div className="flex flex-col gap-5">
        <FormInput
          name="whyJoinFRP"
          label="Why do you want to join the Founder Readiness Program?"
          as="textarea"
          placeholder="What made you apply? What do you hope to achieve?"
          required
        />



        <FormSelect
          name="hearAboutUs"
          label="How did you hear about us?"
          required
          options={[
            { label: 'Instagram', value: 'Instagram' },
            { label: 'LinkedIn', value: 'LinkedIn' },
            { label: 'Event / Conference', value: 'Event / Conference' },
            { label: 'Referral / Word of Mouth', value: 'Referral / Word of Mouth' },
            { label: 'Search Engine (Google, etc.)', value: 'Search Engine (Google, etc.)' },
            { label: 'Twitter / X', value: 'Twitter / X' },
            { label: 'Other', value: 'Other' },
          ]}
        />

        <div className="mt-4 pt-6 border-t border-gray-100 flex flex-col gap-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                type="checkbox"
                {...register('declaration')}
                className="w-5 h-5 rounded border-gray-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
              />
            </div>
            <span className="text-sm text-gray-700 leading-relaxed font-medium">
              I declare that all the information provided above is true and accurate to the best of my knowledge. I understand that any false information may lead to the rejection of my application.
            </span>
          </label>
          {error && (
            <p className="text-sm text-red-500 font-medium ml-8">{error}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
