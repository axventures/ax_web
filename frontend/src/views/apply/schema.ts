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
  legalEntity: z.enum(['Private Limited', 'LLP', 'Registered Partnership', 'Proprietorship'] as const, { message: 'Please select a legal entity' }),
  gstRegistered: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  website: z.string().url('Must be a valid URL').or(z.string().optional().refine(val => !val || val === '', { message: 'Must be a valid URL' })),
  cityState: z.string().min(2, 'City & State is required'),
  companyDescription: z.string().min(10, 'Please provide a brief description'),
  productService: z.string().min(10, 'Please describe your product/service'),

  // Step 3: Business Details
  ip: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  customerFocus: z.enum(['B2B', 'B2C', 'B2G', 'B2B2C', 'D2C'] as const, { message: 'Please select an option' }),
  businessSegment: z.string().min(1, 'Please select a business segment'),
  businessSegmentOther: z.string().optional(),
  revenueStage: z.enum(['Pre-Revenue Stage', '1L – 15L', '15L – 50L', '50L – 1Cr', '1Cr – 10Cr', '10Cr – 50Cr', '50Cr – 100Cr', 'Above 100Cr'] as const, { message: 'Please select a stage' }),
  fundingStatus: z.enum(['Bootstrapped', 'Friends & Family', 'Seed / Angel Funded', 'Pre-Series A', 'Series A & Beyond'] as const, { message: 'Please select funding status' }),
  lookingForInvestment: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),
  lookingForMentorship: z.enum(['Yes', 'No'] as const, { message: 'Please select an option' }),

  // Step 4: Business Operations
  currentTools: z.string().min(1, 'Please list your current tools'),

  // Step 5: FRP Application
  whyJoinFRP: z.string().min(20, 'Please tell us why you want to join (min 20 characters)'),
  hearAboutUs: z.enum(['LinkedIn', 'Instagram', 'Facebook', 'WhatsApp', 'Friend / Referral', 'Google Search', 'Startup Community', 'College / University', 'Incubator / Accelerator', 'Event', 'Other'] as const, { message: 'Please select an option' }),
  declaration: z.boolean().refine(val => val === true, {
    message: 'You must agree to the declaration',
  }),
}).superRefine((data, ctx) => {
  // Conditional Validations
  if (data.businessSegment === 'Others' && (!data.businessSegmentOther || data.businessSegmentOther.trim() === '')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please specify the segment',
      path: ['businessSegmentOther'],
    });
  }
});

export type FRPApplicationData = z.infer<typeof frpApplicationSchema>;
