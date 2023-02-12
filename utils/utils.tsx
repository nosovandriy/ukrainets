import { v4 } from 'uuid';

export const getRandomId = (): string => v4();

export const formatPhoneNumber = (contact: string) => {
  return contact.replace(
    /(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
    '$1 $2 $3 $4 $5'
  );
};
