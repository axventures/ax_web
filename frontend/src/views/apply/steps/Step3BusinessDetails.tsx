import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../components/FormInput';
import { FormRadioGroup } from '../components/FormRadioGroup';
import { FormSelect } from '../components/FormSelect';
import { FormCheckboxGroup } from '../components/FormCheckboxGroup';
import { motion } from 'framer-motion';

export const Step3BusinessDetails: React.FC = () => {
  const { watch } = useFormContext();
  const hasIP = watch('ip');
  const businessSegment = watch('businessSegment');
  const lookingForInvestment = watch('lookingForInvestment');
  const lookingForMentorship = watch('lookingForMentorship');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Details</h2>
        <p className="text-gray-500 text-sm">Help us understand your market and current stage.</p>
      </div>

      <div className="flex flex-col gap-5">
        <FormRadioGroup
          name="ip"
          label="Do you have any Intellectual Property (IP)?"
          required
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
        />

        {hasIP === 'Yes' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <FormInput
              name="ipDescription"
              label="IP Description"
              as="textarea"
              placeholder="Describe your patents, trademarks, or proprietary tech..."
              required
            />
          </motion.div>
        )}

        <FormSelect
          name="customerFocus"
          label="Customer Focus"
          required
          options={[
            { label: 'B2B (Business to Business)', value: 'B2B' },
            { label: 'B2C (Business to Consumer)', value: 'B2C' },
            { label: 'B2G (Business to Government)', value: 'B2G' },
            { label: 'B2B2C', value: 'B2B2C' },
            { label: 'D2C (Direct to Consumer)', value: 'D2C' },
          ]}
        />

        <FormSelect
          name="businessSegment"
          label="Business Segment / Industry"
          required
          options={[
            { label: 'SaaS / Software', value: 'SaaS / Software' },
            { label: 'Hardware / IoT', value: 'Hardware / IoT' },
            { label: 'E-commerce / D2C', value: 'E-commerce / D2C' },
            { label: 'FinTech', value: 'FinTech' },
            { label: 'HealthTech / MedTech', value: 'HealthTech / MedTech' },
            { label: 'EdTech', value: 'EdTech' },
            { label: 'AgriTech', value: 'AgriTech' },
            { label: 'DeepTech (AI/ML/Web3)', value: 'DeepTech (AI/ML/Web3)' },
            { label: 'Food & Beverage (F&B)', value: 'Food & Beverage (F&B)' },
            { label: 'Logistics & Supply Chain', value: 'Logistics & Supply Chain' },
            { label: 'CleanTech / Sustainability', value: 'CleanTech / Sustainability' },
            { label: 'Others', value: 'Others' },
          ]}
        />

        {businessSegment === 'Others' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <FormInput
              name="businessSegmentOther"
              label="Specify Business Segment"
              placeholder="e.g. SpaceTech, Agritech..."
              required
            />
          </motion.div>
        )}

        <FormSelect
          name="revenueStage"
          label="Current Revenue Stage"
          required
          options={[
            { label: 'Pre-Revenue Stage', value: 'Pre-Revenue Stage' },
            { label: '1L – 15L', value: '1L – 15L' },
            { label: '15L – 50L', value: '15L – 50L' },
            { label: '50L – 1Cr', value: '50L – 1Cr' },
            { label: '1Cr – 10Cr', value: '1Cr – 10Cr' },
            { label: '10Cr – 50Cr', value: '10Cr – 50Cr' },
            { label: '50Cr – 100Cr', value: '50Cr – 100Cr' },
            { label: 'Above 100Cr', value: 'Above 100Cr' },
          ]}
        />

        <FormSelect
          name="fundingStatus"
          label="Current Funding Status"
          required
          options={[
            { label: 'Bootstrapped', value: 'Bootstrapped' },
            { label: 'Friends & Family', value: 'Friends & Family' },
            { label: 'Seed / Angel Funded', value: 'Seed / Angel Funded' },
            { label: 'Pre-Series A', value: 'Pre-Series A' },
            { label: 'Series A & Beyond', value: 'Series A & Beyond' },
          ]}
        />

        <FormRadioGroup
          name="lookingForInvestment"
          label="Are you looking for investment currently?"
          required
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
        />

        {lookingForInvestment === 'Yes' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <FormInput
              name="fundingAmount"
              label="How much are you looking to raise?"
              placeholder="e.g. $500k, ₹1 Crore..."
              required
            />
          </motion.div>
        )}

        <FormRadioGroup
          name="lookingForMentorship"
          label="Are you looking for Mentorship / Guidance?"
          required
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
        />

        {lookingForMentorship === 'Yes' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <FormCheckboxGroup
              name="mentorshipAreas"
              label="Which areas do you need mentorship in? (Select all that apply)"
              required
              options={[
                { label: 'Fundraising & Pitching', value: 'Fundraising & Pitching' },
                { label: 'Go-to-Market Strategy', value: 'Go-to-Market Strategy' },
                { label: 'Product Development', value: 'Product Development' },
                { label: 'Scaling Operations', value: 'Scaling Operations' },
                { label: 'Hiring & Team Building', value: 'Hiring & Team Building' },
                { label: 'Legal & Compliance', value: 'Legal & Compliance' },
                { label: 'Marketing & Branding', value: 'Marketing & Branding' },
                { label: 'Financial Modeling', value: 'Financial Modeling' },
              ]}
            />
          </motion.div>
        )}

      </div>
    </motion.div>
  );
};
