import { getRandomId } from '../../../../../utils/utils';

interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  photoScreen?: string;
}
export function useTestimonials(): {
  testimonials: Testimonial[];
} {
  const testimonials = [
    {
      id: getRandomId(),
      name: 'Михайло Самуляк',
      city: 'Тернопіль',
      text: 'Користувався послугами цієї компанії, мій друг купив мені в павер банки і інші потрібні речі в наш час. Доставили вчасно, як і обіцяли, зовсім не дорого, у порівнянні з конкурентами.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Alex Krasnov',
      city: 'Одеса',
      text: 'Мене звуть Олександр і ми з волонтерською командою вже видали більше ніж 350 компьютерів до ЗСУ. Команда Ukrainets допомгла перевезти супер важливі дорогі роутери з Лондона до України, які дуже важливі на Південному напрямку! Команда не вязли гроші за це, і зробили це безкоштовно у супер сроки. Величезна їм за це дяка!',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Na Na',
      city: 'Тернопіль',
      text: 'Користувалася послугами цих перевізників. Дуже задоволена сервісом! Посилка з України  в Лондон заїхала в зазначений термін, все ціле та неушкоджене! Водії привезли посилку додому. Дуже дякую за Вашу роботу!',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Alexa Brown',
      city: 'Київ',
      text: 'Найкращий сервіс, швидко, зручно! Відповідальні водії, і чудові волонтери! Дякую за співпрацю!',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Михайло Самуляк',
      city: 'Тернопіль',
      text: 'Перед Новим Роком потрібно було передати обручку для того, щоб брат зробив пропозицію дівчині. Перевізник пішов на зустріч, ввійшов в ситуацію і попри навантаження виконав замовлення! Всі решта перевізників відмовили. Рекомендую.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Nataliya Levytska',
      city: 'Київ',
      text: 'Хочу порекомендувати цю компанію перевезень. Все дуже відповідально та чітко. Неодноразово отримувала посилку з України через Ukrainets. Все швидко, надійно та відповідально. Передавала також гостинці для батьків в Тернопіль і важливі документи, ніяких зауважень. Задоволена Вашою роботою хлопці! Дякую!',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Bohdan Orlov',
      city: 'Тернопіль',
      text: 'Відправляв старлінк на фронт і екофлоу батькам. Довго шукав перевізника, бо не хотілось довіряти дорогі посилки аби кому, і ось мені порекомендували цю компанію. Все успішно дойшло і старлінк відправили в прифронтове місто де самі бійці його змогли забрати. Рекомендую.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Max Anthony',
      city: 'Львів',
      text: 'Доставили платівки максимально швидко, надійно упаковано. Ввічливий персонал і взагалі сервіс на вищому рівні',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Yuliana Romaniv',
      city: 'Львів',
      text: 'Швидкий і доступний сервіс перевезень, вже двічі користувалися - все супер, дякую 👍',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Nadia Dobrianska',
      city: 'Київ',
      text: 'Дуже дякую за допомогу! Компанія швидко допомогла вирішити проблему з нестандартним перевезенням речей з Північної Ірландії в Україну',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Larisa Beskorovaynaya',
      city: 'Запоріжжя',
      text: 'Дуже дякую за гарне обслуговування, порядність і професійність!!!',
      photoScreen: '',
    },
  ];

  return { testimonials };
}
