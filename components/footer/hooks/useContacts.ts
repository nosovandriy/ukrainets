import { defaultContacts } from '../../../consts/default-contacts';

interface Contacts {
  id: number;
  title: string;
  firstInfo: string;
  secondInfo: string;
}

export function useContacts(): {
  contacts: Contacts[];
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
    {
      "id": 3,
      "title": "E-mail",
      "firstInfo": defaultContacts.email,
      "secondInfo": "",
    },
  ];

  return { contacts };
}
