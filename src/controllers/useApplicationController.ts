import { useState, useEffect } from 'react';
import axios from 'axios';
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
  clearError: (field: string) => void;
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

  const clearError = (field: string) => {
    setErrors((prev) => {
      if (!(field in prev)) {
        return prev;
      }
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const submitApplication = async (
    fullName: string,
    email: string,
    companyName: string,
    pitch: string,
    stage: 'idea' | 'mvp' | 'revenue'
  ): Promise<boolean> => {
    setErrors({});

    // Delegate validation to the Model FIRST before submitting state / latency simulation
    const validationErrors = ApplicationModel.validate(fullName, email, companyName, pitch);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setIsSubmitting(true);

    // Simulate network latency (e.g. 800ms) for a premium experience
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Map stage value to the exact string Google Form option expects
    let mappedStage = 'Idea Stage';
    if (stage === 'mvp') {
      mappedStage = 'MVP Stage (Prototype Built)';
    } else if (stage === 'revenue') {
      mappedStage = 'Generating Revenue';
    }

    const formData = new URLSearchParams();
    formData.append('entry.1495663917', fullName.trim());
    formData.append('entry.718001574', email.trim());
    formData.append('entry.787893745', companyName.trim());
    formData.append('entry.1137124921', mappedStage);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfG1AnkSfuxe14VDsi_HhRGgCkvczHeStzDA8A6l2mQyQfgzQ/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );

      // Send welcome email (non-blocking for UI success)
      try {
        const apiUrl = (import.meta as any).env.VITE_API_URL || '';
        axios.post(`${apiUrl}/api/send-welcome-email`, {
          email: email.trim(),
          fullName: fullName.trim(),
          companyName: companyName.trim(),
        }).catch(err => console.error('Failed to send welcome email:', err));
      } catch (emailErr) {
        console.error('Failed to trigger welcome email API:', emailErr);
      }

      // Instantiate new application via Model factory
      const newApp = ApplicationModel.create(fullName, email, companyName, pitch, stage);

      const updatedApps = [newApp, ...applications];
      setApplications(updatedApps);

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedApps));
      } catch (e) {
        console.error('Failed to save application to localStorage:', e);
      }

      setIsSuccess(true);
      return true;
    } catch (error) {
      console.error('Failed to submit application to Google Form:', error);
      setErrors({
        submit: 'Failed to submit application. Please check your internet connection and try again.',
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
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
    clearError,
  };
}

