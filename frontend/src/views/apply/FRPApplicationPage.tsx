import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import './frp-tailwind.css';

import { frpApplicationSchema } from './schema';
import type { FRPApplicationData } from './schema';
import { ProgressBar } from './components/ProgressBar';
import { Step1PersonalInfo } from './steps/Step1PersonalInfo';
import { Step2CompanyInfo } from './steps/Step2CompanyInfo';
import { Step3BusinessDetails } from './steps/Step3BusinessDetails';
import { Step4BusinessOps } from './steps/Step4BusinessOps';
import { Step5FRPApplication } from './steps/Step5FRPApplication';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { useNavigate } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'frp_application_draft';
const TOTAL_STEPS = 5;

export const FRPApplicationPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  // Initialize form with Zod schema
  const methods = useForm<FRPApplicationData>({
    resolver: zodResolver(frpApplicationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      socialMedia: '',
      companyName: '',
      yearOfIncorporation: '',
      legalEntity: '',
      gstRegistered: undefined,
      gstNumber: '',
      website: '',
      cityState: '',
      companyDescription: '',
      productService: '',
      ip: undefined,
      ipDescription: '',
      customerFocus: undefined,
      businessSegment: '',
      businessSegmentOther: '',
      revenueStage: undefined,
      fundingStatus: undefined,
      lookingForInvestment: undefined,
      fundingAmount: '',
      lookingForMentorship: undefined,
      mentorshipAreas: [],
      currentTools: '',
      teamSize: '',
      monthlyActiveCustomers: '',
      biggestChallenge: '',
      whyJoinFRP: '',
      expectations: '',
      hearAboutUs: undefined,
      declaration: false,
    }
  });

  const { trigger, getValues, reset } = methods;

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.data) {
          reset(parsed.data);
        }
        if (parsed.step && parsed.step > 1 && parsed.step <= TOTAL_STEPS) {
          setCurrentStep(parsed.step);
        }
      } catch (e) {
        console.error("Failed to parse saved application draft", e);
      }
    }
  }, [reset]);

  // Save to local storage on step change or data change
  useEffect(() => {
    const subscription = methods.watch((value) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        data: value,
        step: currentStep
      }));
    });
    return () => subscription.unsubscribe();
  }, [methods, currentStep]);

  // Save step on change
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
          ...parsed,
          step: currentStep
        }));
      } catch (e) {}
    }
    

    methods.reset(methods.getValues(), {
      keepValues: true,
      keepErrors: false,
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
    });
  }, [currentStep, methods]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = async () => {
    // Determine fields to validate based on current step
    let fieldsToValidate: (keyof FRPApplicationData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['fullName', 'email', 'whatsapp', 'socialMedia'];
        break;
      case 2:
        fieldsToValidate = ['companyName', 'yearOfIncorporation', 'legalEntity', 'gstRegistered', 'website', 'cityState', 'companyDescription', 'productService'];
        if (getValues('gstRegistered') === 'Yes') fieldsToValidate.push('gstNumber');
        break;
      case 3:
        fieldsToValidate = ['ip', 'customerFocus', 'businessSegment', 'revenueStage', 'fundingStatus', 'lookingForInvestment', 'lookingForMentorship'];
        if (getValues('ip') === 'Yes') fieldsToValidate.push('ipDescription');
        if (getValues('businessSegment') === 'Other') fieldsToValidate.push('businessSegmentOther');
        if (getValues('lookingForInvestment') === 'Yes') fieldsToValidate.push('fundingAmount');
        if (getValues('lookingForMentorship') === 'Yes') fieldsToValidate.push('mentorshipAreas');
        break;
      case 4:
        fieldsToValidate = ['currentTools', 'teamSize', 'monthlyActiveCustomers', 'biggestChallenge'];
        break;
      default:
        break;
    }

    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      methods.clearErrors();
      setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS));
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const onSubmit = async (data: FRPApplicationData) => {
    setIsSubmitting(true);
    
    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdHfD32v1S5YDw_MGgaPb_hQAfSVaf0rvRgnEnJUnLPen71pw/formResponse';
      
      const formData = new URLSearchParams();
      formData.append('emailAddress', data.email); // Required by Google Forms when 'Collect email addresses' is set to 'Responder input'
      
      // Step 1
      formData.append('entry.1099602319', data.fullName);
      formData.append('entry.984369828', data.email);
      formData.append('entry.640425509', data.whatsapp);
      formData.append('entry.977586761', data.socialMedia || '');
      
      // Step 2
      formData.append('entry.1048530545', data.companyName);
      formData.append('entry.1800196945', data.yearOfIncorporation);
      formData.append('entry.8620196', data.legalEntity);
      if (data.gstRegistered) formData.append('entry.349514980', data.gstRegistered);
      formData.append('entry.219077940', data.gstNumber || '');
      formData.append('entry.1962618055', data.website || '');
      formData.append('entry.1453979368', data.cityState);
      formData.append('entry.505650792', data.companyDescription);
      formData.append('entry.1551639600', data.productService);
      
      // Step 3
      if (data.ip) formData.append('entry.1056825011', data.ip);
      formData.append('entry.1830933875', data.ipDescription || '');
      if (data.customerFocus) formData.append('entry.272613480', data.customerFocus);
      formData.append('entry.606459004', data.businessSegment);
      formData.append('entry.2088586275', data.businessSegmentOther || '');
      if (data.revenueStage) formData.append('entry.1459170982', data.revenueStage);
      if (data.fundingStatus) formData.append('entry.1979542946', data.fundingStatus);
      if (data.lookingForInvestment) formData.append('entry.620680348', data.lookingForInvestment);
      formData.append('entry.252446569', data.fundingAmount || '');
      if (data.lookingForMentorship) formData.append('entry.168204896', data.lookingForMentorship);
      
      if (data.mentorshipAreas && data.mentorshipAreas.length > 0) {
        data.mentorshipAreas.forEach(area => {
          formData.append('entry.489911646', area);
        });
      }
      
      // Step 4
      formData.append('entry.902708671', data.currentTools);
      formData.append('entry.1224274060', data.teamSize);
      formData.append('entry.868815797', data.monthlyActiveCustomers);
      formData.append('entry.1966462283', data.biggestChallenge);
      
      // Step 5
      formData.append('entry.1958409274', data.whyJoinFRP);
      formData.append('entry.1635697151', data.expectations);
      formData.append('entry.1755611175', data.hearAboutUs);
      if (data.declaration) {
        formData.append('entry.1203904325', 'I declare that all the information provided above is true and accurate to the best of my knowledge.');
      }
      // 1. Submit to Google Forms silently
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      // 2. Trigger the welcome email via backend
      try {
        await fetch('/api/send-welcome-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            fullName: data.fullName,
            companyName: data.companyName,
          }),
        });
      } catch (emailErr) {
        console.error('Failed to send welcome email', emailErr);
      }
      
      // Clear draft after successful submission
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      
      setIsSuccess(true);
      scrollToTop();
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit application. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Success Screen
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-xl w-full bg-white rounded-[24px] shadow-xl p-10 sm:p-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8"
          >
            <CheckCircle size={48} strokeWidth={2} />
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Application Submitted
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Thank you for applying to the Founder Readiness Program. We've received your application and our team will review it shortly.
          </p>
          
          <div className="bg-gray-50 rounded-xl px-6 py-4 w-full mb-10 border border-gray-100">
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Reference ID</p>
            <p className="font-mono text-lg font-semibold text-gray-900">FRP-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          </div>

          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7FF] flex flex-col font-sans relative">
      {/* Full-Page Loading Overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-brand-blue/20 rounded-full"></div>
              <div className="w-20 h-20 border-4 border-brand-blue border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl font-bold text-gray-900"
            >
              Saving your application...
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-gray-500 font-medium"
            >
              Please don't close this window
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-50 relative">
        <Navbar onApplyClick={() => navigate('/apply')} />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-5xl mx-auto pt-24 pb-12 px-4 sm:px-6 flex flex-col z-10">
        {/* Stepper */}
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <FormProvider {...methods}>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (currentStep === TOTAL_STEPS) {
                void methods.handleSubmit(onSubmit as any)(e);
              } else {
                handleNext();
              }
            }} 
            className="flex flex-col flex-1 relative"
          >
            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 mb-10 min-h-[400px]">
              <AnimatePresence mode="wait">
                {currentStep === 1 && <Step1PersonalInfo key="step1" />}
                {currentStep === 2 && <Step2CompanyInfo key="step2" />}
                {currentStep === 3 && <Step3BusinessDetails key="step3" />}
                {currentStep === 4 && <Step4BusinessOps key="step4" />}
                {currentStep === 5 && <Step5FRPApplication key="step5" />}
              </AnimatePresence>
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ArrowLeft size={18} />
                  Previous
                </button>
              ) : (
                <div></div> // Empty div to maintain flex spacing
              )}

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-[#12008A] transition-colors shadow-md shadow-brand-blue/20"
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-[#12008A] transition-colors shadow-md shadow-brand-blue/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Submitting...
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>

      <FooterSection />
    </div>
  );
};
