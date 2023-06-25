import { faker } from '@faker-js/faker/locale/en';

export const createRandomAnimal = () => {
  return faker.animal.type();
};
