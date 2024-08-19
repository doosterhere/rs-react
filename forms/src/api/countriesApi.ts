const getCountriesList = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');

  const data = await response.json();

  return data.map((country: { name: { common: string } }) => country.name.common).sort();
};

export { getCountriesList };
