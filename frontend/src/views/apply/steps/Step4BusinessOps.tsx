import React from 'react';
import { FormInput } from '../components/FormInput';
import { motion } from 'framer-motion';

export const Step4BusinessOps: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Operations</h2>
        <p className="text-gray-500 text-sm">Tell us about how your business runs day-to-day.</p>
      </div>

      <div className="flex flex-col gap-5">
        <FormInput
          name="currentTools"
          label="What tools do you use for your business on a day-to-day basis?"
          as="textarea"
          placeholder="e.g. Jira for PM, Slack for comms, Hubspot for CRM, AWS for hosting..."
          required
        />
      </div>
    </motion.div>
  );
};
