import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../components/FormInput';
import { FormRadioGroup } from '../components/FormRadioGroup';
import { FormSelect } from '../components/FormSelect';
import { motion } from 'framer-motion';

export const Step3BusinessDetails: React.FC = () => {
  const { watch } = useFormContext();
  const businessSegment = watch('businessSegment');

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

        <FormSelect
          name="customerFocus"
          label="Customer Focus"
          required
          options={[
            { label: 'B2B', value: 'B2B' },
            { label: 'B2C', value: 'B2C' },
            { label: 'B2G', value: 'B2G' },
            { label: 'B2B2C', value: 'B2B2C' },
            { label: 'D2C', value: 'D2C' },
          ]}
        />

        <FormSelect
          name="businessSegment"
          label="Business Segment"
          required
          options={[
            { label: 'Food & Beverage (F&B)', value: 'Food & Beverage (F&B)' },
            { label: 'Fashion & Apparel', value: 'Fashion & Apparel' },
            { label: 'Beauty & Personal Care', value: 'Beauty & Personal Care' },
            { label: 'Health & Wellness', value: 'Health & Wellness' },
            { label: 'Home & Living', value: 'Home & Living' },
            { label: 'Consumer Electronics & Gadgets', value: 'Consumer Electronics & Gadgets' },
            { label: 'Baby & Kids', value: 'Baby & Kids' },
            { label: 'Pet Care', value: 'Pet Care' },
            { label: 'Personal Services (Consumer-facing Brands)', value: 'Personal Services (Consumer-facing Brands)' },
            { label: 'Lifestyle & Accessories', value: 'Lifestyle & Accessories' },
            { label: 'Mobility & Auto (Consumer-facing)', value: 'Mobility & Auto (Consumer-facing)' },
            { label: 'Digital-First Consumer Brands', value: 'Digital-First Consumer Brands' },
            { label: 'Luxury & Premium Experiences', value: 'Luxury & Premium Experiences' },
            { label: 'Sustainable / Conscious Brands', value: 'Sustainable / Conscious Brands' },
            { label: 'Defence, Aerospace & Technology', value: 'Defence, Aerospace & Technology' },
            { label: 'SportsTech & Gaming', value: 'SportsTech & Gaming' },
            { label: 'Social Impact, Rural Livelihood & Sustainability', value: 'Social Impact, Rural Livelihood & Sustainability' },
            { label: 'Manufacturing', value: 'Manufacturing' },
            { label: 'Distribution / Distributor', value: 'Distribution / Distributor' },
            { label: 'Import / Exports', value: 'Import / Exports' },
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
              label="If Others, please specify"
              placeholder="Please specify..."
              required
            />
          </motion.div>
        )}

        <FormSelect
          name="revenueStage"
          label="Business Stage (Revenue Per Annum)"
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
          label="Funding Status"
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
          label="Are you looking for funding?"
          required
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
        />

        <FormRadioGroup
          name="lookingForMentorship"
          label="Are you looking for business mentorship from experts?"
          required
          options={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
        />

      </div>
    </motion.div>
  );
};

