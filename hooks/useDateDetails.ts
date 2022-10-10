export function useDateDetails(): {
  currentYear: number;
  weekDays: string[];
} {
  const date = new Date();
  const currentYear = date.getFullYear();
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

  return {
    currentYear,
    weekDays,
  };
}
