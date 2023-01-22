import { defaultContacts } from '../../../../../consts/default-contacts';
import { NovaPoshta, Meest, UkrPoshta } from '@components/icons';

interface Partners {
  id: number;
  link: string;
  logo: React.ReactNode;
}

export function usePartners(): {
  partners: Partners[];
} {

  const partners = [
    {
      "id": 1,
      "link": defaultContacts.partners.novaPoshta.link,
      "logo": <NovaPoshta />,
    },
    {
      "id": 2,
      "link": defaultContacts.partners.ukrPoshta.link,
      "logo": <UkrPoshta />,
    },
    {
      "id": 3,
      "link": defaultContacts.partners.meest.link,
      "logo": <Meest />,
    },
  ];

  return { partners };
}
