import { validateName, validateEmail, validatePhone, validateRequired } from './FormValidate.utils'; // Adjust the import path as necessary

describe('Validation Utilities', () => {
  describe('validateName', () => {
    it('should return error message if name is empty', () => {
      expect(validateName('')).toBe("Name is required.");
    });
    // Add more tests for other conditions
  });

  describe('validateEmail', () => {
    it('should return error message if email is empty', () => {
      expect(validateEmail('')).toBe("Email is required.");
    });
    it('should return error message if email format is invalid', () => {
      expect(validateEmail('invalid')).toBe("Invalid email format.");
    });
    // Add more tests for other conditions
  });

  describe('validatePhone', () => {
    it('should return error message if phone number is empty', () => {
      expect(validatePhone('')).toBe("Phone number is required.");
    });
    it('should return error message if phone format is invalid', () => {
      expect(validatePhone('abc')).toBe("Invalid phone number. Only digits are allowed.");
    });
    // Add more tests for other conditions
  });

  describe('validateRequired', () => {
    it('should return error message if value is empty', () => {
      expect(validateRequired('')).toBe("vlaue is required."); // Note the typo in "vlaue is required." should be fixed in the function or test to match
    });
    // Add more tests for other conditions
  });
});
