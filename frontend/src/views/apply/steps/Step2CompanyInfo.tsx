import React from 'react';

import { FormInput } from '../components/FormInput';
import { FormRadioGroup } from '../components/FormRadioGroup';
import { FormSelect } from '../components/FormSelect';
import { motion } from 'framer-motion';

export const Step2CompanyInfo: React.FC = () => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Company Information</h2>
        <p className="text-gray-500 text-sm">Tell us about your startup and what you're building.</p>
      </div>

      <div className="flex flex-col gap-5">
        <FormInput
          name="companyName"
          label="Company Name"
          placeholder="e.g. Acme Corp"
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            name="yearOfIncorporation"
            label="Year of Incorporation"
            placeholder="e.g. 2023"
            maxLength={4}
            required
          />
          
          <FormSelect
            name="legalEntity"
            label="Legal Entity"
            required
            options={[
              { label: 'Private Limited', value: 'Private Limited' },
              { label: 'LLP', value: 'LLP' },
              { label: 'Registered Partnership', value: 'Registered Partnership' },
              { label: 'Proprietorship', value: 'Proprietorship' },
            ]}
          />
        </div>

        <FormRadioGroup
          name="gstRegistered"
          label="Is your company GST Registered?"
          required
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
        />



        <FormInput
          name="website"
          label="Company Website"
          type="url"
          placeholder="https://acmecorp.com"
        />

        <FormInput
          name="cityState"
          label="City & State"
          placeholder="e.g. Bangalore, Karnataka"
          required
        />

        <FormInput
          name="companyDescription"
          label="Brief Company Description"
          as="textarea"
          placeholder="What does your company do in 2-3 sentences?"
          required
        />

        <FormInput
          name="productService"
          label="Product / Service Overview"
          as="textarea"
          placeholder="Describe your core offering..."
          required
        />
      </div>
    </motion.div>
  );
};
