import { defaultContacts } from '../../../consts/default-contacts';

interface Contacts {
  id: number;
  title: string;
  firstInfo: string;
  secondInfo: string;
  thirdInfo: string;
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
      "thirdInfo": defaultContacts.phones.thirdEnglandNumber,
    },
    {
      "id": 2,
      "title": defaultContacts.countries.ukraine,
      "firstInfo": defaultContacts.phones.ukraineNumber,
      "secondInfo": "",
      "thirdInfo": "",
    },
    {
      "id": 3,
      "title": "E-mail",
      "firstInfo": defaultContacts.email,
      "secondInfo": "",
      "thirdInfo": "",
    },
  ];

  return { contacts };
}
