import { useState, useEffect } from 'react';
import type { FounderApplication } from '../models/Application';
import { ApplicationModel } from '../models/Application';

const LOCAL_STORAGE_KEY = 'ax_founder_applications';

export interface UseApplicationControllerReturn {
  isModalOpen: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: Record<string, string>;
  applications: FounderApplication[];
  
  // Actions
  openModal: () => void;
  closeModal: () => void;
  submitApplication: (
    fullName: string,
    email: string,
    companyName: string,
    pitch: string,
    stage: 'idea' | 'mvp' | 'revenue'
  ) => Promise<boolean>;
  resetForm: () => void;
}

export function useApplicationController(): UseApplicationControllerReturn {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [applications, setApplications] = useState<FounderApplication[]>([]);

  // Load applications from LocalStorage on mount
  useEffect(() => {
    try {
      const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (serialized) {
        setApplications(JSON.parse(serialized));
      }
    } catch (e) {
      console.error('Failed to load applications:', e);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    resetForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setErrors({});
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const submitApplication = async (
    fullName: string,
    email: string,
    companyName: string,
    pitch: string,
    stage: 'idea' | 'mvp' | 'revenue'
  ): Promise<boolean> => {
    setIsSubmitting(true);
    setErrors({});

    // Simulate network latency (e.g. 800ms) for a premium experience
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Delegate validation to the Model
    const validationErrors = ApplicationModel.validate(fullName, email, companyName, pitch);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return false;
    }

    // Instantiate new application via Model factory
    const newApp = ApplicationModel.create(fullName, email, companyName, pitch, stage);
    
    const updatedApps = [newApp, ...applications];
    setApplications(updatedApps);
    
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedApps));
    } catch (e) {
      console.error('Failed to save application:', e);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    return true;
  };

  return {
    isModalOpen,
    isSubmitting,
    isSuccess,
    errors,
    applications,
    openModal,
    closeModal,
    submitApplication,
    resetForm,
  };
}
