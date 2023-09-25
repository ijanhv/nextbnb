import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  label: country.name.common,
  value: country.cca2,
  flag: country.flag,
  latlang: country.latlng,
  regiion: country.region,
}));

const useCountries = () => {
  const getAllCountries = () => {
    return formattedCountries;
  };
};
