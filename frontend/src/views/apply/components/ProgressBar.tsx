import React from 'react';
import { motion } from 'framer-motion';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = [
  'Personal',
  'Company',
  'Business',
  'Operations',
  'Submit'
];

export const ProgressBar: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-12 md:px-24 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        
        return (
          <div key={stepNum} className="flex flex-col items-center gap-2">
            <motion.div
              initial={false}
              animate={{
                backgroundColor: isActive ? '#1801AD' : '#F3F4F6',
                color: isActive ? '#ffffff' : '#6B7280',
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold shadow-sm
                ${isActive ? 'bg-brand-blue text-white shadow-brand-blue/20' : 'bg-gray-100 text-gray-500'}
              `}
            >
              {stepNum}
            </motion.div>
            <span className={`text-sm font-semibold transition-colors duration-200 ${isActive ? 'text-brand-blue' : 'text-gray-400'}`}>
              {STEP_LABELS[index]}
            </span>
          </div>
        );
      })}
    </div>
  );
};
