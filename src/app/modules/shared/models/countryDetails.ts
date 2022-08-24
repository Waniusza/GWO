type Currency = {
  name: string;
  symbol: string;
};

type Flags = {
  png?: string;
  svg?: string;
};

type Translation = {
  official: string;
  common: string;
};

export type CountryDetails = {
  capital: string[];
  cca3: string;
  currencies: {
    [key: string]: Currency;
  }[];
  flag: string;
  flags: Flags;
  name: Translation;
  population: number;
  timezones: string[];
  translations: {
    [key: string]: Translation;
  };
};
