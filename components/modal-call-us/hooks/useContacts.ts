import { defaultContacts } from '../../../consts/default-contacts';
import { Contact } from 'types/Contact';

export function useContacts(): {
  contacts: Contact[];
} {

  const contacts = [
    {
      "id": 1,
      "title": defaultContacts.countries.england,
      "firstInfo": defaultContacts.phones.firstEnglandNumber,
      "secondInfo": defaultContacts.phones.secondEnglandNumber,
    },
    {
      "id": 2,
      "title": defaultContacts.countries.ukraine,
      "firstInfo": defaultContacts.phones.ukraineNumber,
      "secondInfo": "",
    },
  ];

  return { contacts };
}
