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
      id: '1',
      name: 'Галина Романівна',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: '2',
      name: 'Галина Романівна',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: '3',
      name: 'Галина Романівна',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: '4',
      name: 'Галина Романівна',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
    {
      id: '5',
      name: 'Галина Романівна',
      city: 'Київ',
      text: 'Чудовий сервіс! Я отримала вантаж вчасно цілим та неушкодженим.',
      photoScreen: '',
    },
  ];

  return { testimonials };
}