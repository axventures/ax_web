import React from 'react';
import { FormInput } from '../components/FormInput';
import { motion } from 'framer-motion';

export const Step1PersonalInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-500 text-sm">Tell us about yourself so we can get in touch.</p>
      </div>

      <div className="flex flex-col gap-5">
        <FormInput
          name="fullName"
          label="Full Name"
          placeholder="e.g. Jane Doe"
          required
        />
        
        <FormInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="jane@example.com"
          required
        />
        
        <FormInput
          name="whatsapp"
          label="WhatsApp Number"
          type="tel"
          placeholder="+91 98765 43210"
          required
        />
        
        <FormInput
          name="socialMedia"
          label="LinkedIn / Twitter Profile"
          type="url"
          placeholder="https://linkedin.com/in/janedoe"
        />
      </div>
    </motion.div>
  );
};
