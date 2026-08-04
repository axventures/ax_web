import React from 'react';
import { FormInput } from '../components/FormInput';
import { FormSelect } from '../components/FormSelect';
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
          label="What are the current business tools you are using?"
          as="textarea"
          placeholder="e.g. Jira for PM, Slack for comms, Hubspot for CRM, AWS for hosting..."
          required
        />

        <FormSelect
          name="teamSize"
          label="Current Team Size (including Founders)"
          required
          options={[
            { label: 'Solo Founder (1)', value: '1' },
            { label: '2 - 5 members', value: '2-5' },
            { label: '6 - 15 members', value: '6-15' },
            { label: '16 - 50 members', value: '16-50' },
            { label: '50+ members', value: '50+' },
          ]}
        />

        <FormInput
          name="monthlyActiveCustomers"
          label="Monthly Active Customers / Users"
          placeholder="e.g. 500 B2C users, 10 B2B enterprise clients..."
          required
        />

        <FormInput
          name="biggestChallenge"
          label="What is the biggest challenge your business is facing right now?"
          as="textarea"
          placeholder="e.g. Struggling with customer acquisition costs, need to hire a CTO, running out of runway..."
          required
        />
      </div>
    </motion.div>
  );
};
