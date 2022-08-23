export type CountryResponse = {
  name: string;
  flag: string;
  population?: number;
};

export type CountriesListResponse = Array<CountryResponse>;
