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
      name: 'Галина Романівна1',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна2',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна3',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна4',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна5',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна6',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна7',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна8',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна9',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: getRandomId(),
      name: 'Галина Романівна10',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
  ];

  return { testimonials };
}
