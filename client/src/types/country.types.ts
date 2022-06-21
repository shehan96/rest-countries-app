export interface IName {
  common: string;
  official: string;
}

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, IName>;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  currencies: Record<string, ICurrency>;
  capital: string[];
  languages: Record<string, string>;
}
