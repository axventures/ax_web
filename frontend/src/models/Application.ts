export interface FounderApplication {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  pitch: string;
  stage: 'idea' | 'mvp' | 'revenue';
  submittedAt: string;
}

export const ApplicationModel = {
  /**
   * Factory function to create a new application instance
   */
  create(
    fullName: string,
    email: string,
    companyName: string,
    pitch: string,
    stage: 'idea' | 'mvp' | 'revenue' = 'idea'
  ): FounderApplication {
    return {
      id: crypto.randomUUID(),
      fullName: fullName.trim(),
      email: email.trim(),
      companyName: companyName.trim(),
      pitch: pitch.trim(),
      stage,
      submittedAt: new Date().toISOString(),
    };
  },

  /**
   * Validate the input fields and return field-specific error messages
   */
  validate(
    fullName: string,
    email: string,
    companyName: string,
    pitch: string
  ): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!fullName || fullName.trim().length === 0) {
      errors.fullName = 'Full name is required.';
    }

    if (!email || email.trim().length === 0) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!companyName || companyName.trim().length === 0) {
      errors.companyName = 'Company / Project name is required.';
    }

    if (!pitch || pitch.trim().length === 0) {
      errors.pitch = 'A brief pitch is required.';
    } else if (pitch.trim().length < 20) {
      errors.pitch = 'Please write a slightly longer pitch (at least 20 characters).';
    }

    return errors;
  },
};
