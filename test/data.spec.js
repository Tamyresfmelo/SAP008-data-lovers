
import {createCard, filterHouse, countCharactersHogwarts, selectNameAz, selectNameZa, filterFind} from '../src/data.js';

describe('Teste createCard', () => {
  it('is a function', () => {
    expect(typeof createCard).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(example()).toBe('OMG');
  });
});

describe('Teste FilterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('Teste countCharactersHogwarts', () => {
  it('is a function', () => {
    expect(typeof countCharactersHogwarts).toBe('function');
  });

  const HarryPotterData = [
    {
      Nome: "Hermione",
      House: "Gryffindor"
  },
  {
    Nome: "Draco",
    House: "Slytherin"
  },
  {
    Nome: "Luna",
    House: "Hufflepuff"
  }]

  it('should returns "[{ Name: "Hermione", House: "Gryffindor"}]" ', () => {
    expect(filterHouse(HarryPotterData)).toBe([{
      Nome: "Hermione",
      House: "Gryffindor"
    }]);
  });
});

describe('Teste selectNameAz', () => {
  it('is a function', () => {
    expect(typeof selectNameAz).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(example()).toBe('OMG');
  });
});

describe('Teste selectNameZa', () => {
  it('is a function', () => {
    expect(typeof selectNameZa).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(example()).toBe('OMG');
  });
});

describe('Teste filterFind', () => {
  it('is a function', () => {
    expect(typeof filterFind).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(example()).toBe('OMG');
  });
});