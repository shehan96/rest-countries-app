import { Grid } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useGetCountries } from '../../hooks/useGetCountries';
import { ICountry } from '../../types/country.types';
import classes from './Home.module.css';

export const Home = () => {
  const { data, isLoading, isSuccess } = useGetCountries();
  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (isSuccess) {
      setCountryList(data?.payload);
    }
  }, [isSuccess]);

  useEffect(() => {
    let filteredList: ICountry[] = [];
    if (data) {
      filteredList = data.payload.filter((country) => country.name.common.toLowerCase().includes(searchText.toLowerCase()));
      setCountryList(filteredList);
    }
  }, [searchText]);

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLowerCase());
  };

  return (
    <>
      {/** Search bar goes here */}
      <Grid container={true}>
        <Grid item md={12} xs={12}>
          <SearchBar onSearch={handleOnChangeInput} />
        </Grid>
      </Grid>
      {isLoading ? 'Data is loading' : 'Completed'}
      <Grid container={true} spacing={3}>
        {countryList.map((country) => (
          <Grid item md={3} xs={12} key={country.name.official}>
            <CountryCard country={country}></CountryCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
