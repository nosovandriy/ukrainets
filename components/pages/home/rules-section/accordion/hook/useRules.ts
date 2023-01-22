import { Rule } from './../../../../../../types/Rule';
import { getRandomId } from '../../../../../../utils/utils';

export function useRules(): {
  rules: Rule[];
} {
  const rules = [
    {
      id: getRandomId(),
      title: 'Алкогольна продукція',
      text: 'Етиловий спирт, пиво, лікеро-горілчана продукція ',
    },
    {
      id: getRandomId(),
      title: 'Тютюнові вироби',
      text: 'Всі види тютюнових виробів та суміші для куріння',
    },
    {
      id: getRandomId(),
      title: 'Небезпечні речовини',
      text: 'Отруйні, радіоактивні, озоно-руйнівні речовини',
    },
    {
      id: getRandomId(),
      title: 'Культурні цінності',
      text: 'Культурні цінності, предмети старовини старше 50 років, антикваріат, карикатури, друковані репродукції',
    },
    {
      id: getRandomId(),
      title: 'Продукти',
      text: 'Кисломолочні, сирокопчені, заморожені, хлібобулочні вироби (продукти харчування можна ввозити/вивозити тільки в вакуумній або заводській упаковці)',
    },
    {
      id: getRandomId(),
      title: 'Документи',
      text: 'Кредитні, дебетові та подарункові карти, паспорти, посвідчення особи, трудові книжки, архіви; кореспонденція та листи',
    },
    {
      id: getRandomId(),
      title: 'Рослини',
      text: 'Рослини в любому вигляді та стані, насіння рослин',
    },
    {
      id: getRandomId(),
      title: 'Тварини',
      text: 'Живих тварин і їх частини (шкури тварин, хутро), риба і морепродукти',
    },
    {
      id: getRandomId(),
      title: 'Біологічні препарати',
      text: 'Вітаміни, лікарські препарати, біологічні активні добавки та інші види препаратів',
    },
    {
      id: getRandomId(),
      title: 'Алкогольна продукція',
      text: 'Етиловий спирт, пиво, лікеро-горілчана продукція ',
    },
    {
      id: getRandomId(),
      title: 'Алкогольна продукція',
      text: 'Етиловий спирт, пиво, лікеро-горілчана продукція ',
    },
    {
      id: getRandomId(),
      title: 'Алкогольна продукція',
      text: 'Етиловий спирт, пиво, лікеро-горілчана продукція ',
    },

  ];

  return { rules };
}
