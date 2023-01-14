import { uuid } from 'uuidv4';

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
      id: uuid(),
      name: 'Галина Романівна1',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: uuid(),
      name: 'Галина Романівна2',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: uuid(),
      name: 'Галина Романівна3',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: uuid(),
      name: 'Галина Романівна4',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: uuid(),
      name: 'Галина Романівна5',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
  ];

  return { testimonials };
}