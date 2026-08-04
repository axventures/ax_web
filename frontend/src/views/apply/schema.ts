import * as z from 'zod';

export const frpApplicationSchema = z.object({
  // Step 1: Personal Info
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  whatsapp: z.string().min(10, 'Valid WhatsApp number is required'),
  socialMedia: z.string().url('Must be a valid URL').or(z.string().optional().refine(val => !val || val === '', { message: 'Must be a valid URL' })),

  // Step 2: Company Info
  companyName: z.string().min(2, 'Company Name is required'),
  yearOfIncorporation: z.string().regex(/^\d{4}$/, 'Must be a 4-digit year'),
  legalEntity: z.string().min(1, 'Please select a legal entity'),
  gstRegistered: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  gstNumber: z.string().optional(),
  website: z.string().url('Must be a valid URL').or(z.string().optional().refine(val => !val || val === '', { message: 'Must be a valid URL' })),
  cityState: z.string().min(2, 'City & State is required'),
  companyDescription: z.string().min(10, 'Please provide a brief description'),
  productService: z.string().min(10, 'Please describe your product/service'),

  // Step 3: Business Details
  ip: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  ipDescription: z.string().optional(),
  customerFocus: z.enum(['B2B', 'B2C', 'B2G', 'B2B2C', 'D2C'] as const, { message: 'Please select an option' }),
  businessSegment: z.string().min(1, 'Please select a business segment'),
  businessSegmentOther: z.string().optional(),
  revenueStage: z.enum(['Pre-Revenue Stage', '1L – 15L', '15L – 50L', '50L – 1Cr', '1Cr – 10Cr', '10Cr – 50Cr', '50Cr – 100Cr', 'Above 100Cr'] as const, { message: 'Please select a stage' }),
  fundingStatus: z.enum(['Bootstrapped', 'Friends & Family', 'Seed / Angel Funded', 'Pre-Series A', 'Series A & Beyond'] as const, { message: 'Please select funding status' }),
  lookingForInvestment: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  fundingAmount: z.string().optional(),
  lookingForMentorship: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  mentorshipAreas: z.array(z.string()).optional(),

  // Step 4: Business Operations
  currentTools: z.string().min(1, 'Please list your current tools'),
  teamSize: z.string().min(1, 'Please specify team size'),
  monthlyActiveCustomers: z.string().min(1, 'Please specify MAC'),
  biggestChallenge: z.string().min(10, 'Please describe your biggest challenge'),

  // Step 5: FRP Application
  whyJoinFRP: z.string().min(20, 'Please tell us why you want to join (min 20 characters)'),
  expectations: z.string().min(10, 'Please share your expectations'),
  hearAboutUs: z.enum(['LinkedIn', 'Instagram', 'Twitter / X', 'Referral / Word of Mouth', 'Event / Conference', 'Search Engine (Google, etc.)', 'Other'] as const, { message: 'Please select an option' }),
  declaration: z.boolean().refine(val => val === true, {
    message: 'You must agree to the declaration',
  }),
}).superRefine((data, ctx) => {
  // Conditional Validations
  if (data.gstRegistered === 'Yes' && (!data.gstNumber || data.gstNumber.trim() === '')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'GST Number is required if registered',
      path: ['gstNumber'],
    });
  }

  if (data.ip === 'Yes' && (!data.ipDescription || data.ipDescription.trim() === '')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'IP Description is required',
      path: ['ipDescription'],
    });
  }

  if (data.businessSegment === 'Others' && (!data.businessSegmentOther || data.businessSegmentOther.trim() === '')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please specify the segment',
      path: ['businessSegmentOther'],
    });
  }

  if (data.lookingForInvestment === 'Yes' && (!data.fundingAmount || data.fundingAmount.trim() === '')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Funding amount is required',
      path: ['fundingAmount'],
    });
  }

  if (data.lookingForMentorship === 'Yes' && (!data.mentorshipAreas || data.mentorshipAreas.length === 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please select at least one area',
      path: ['mentorshipAreas'],
    });
  }
});

export type FRPApplicationData = z.infer<typeof frpApplicationSchema>;
