import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import { ICountry } from '../../types/country.types';

type CountryCardProps = {
  country: ICountry;
};

export const CountryCard = (props: CountryCardProps) => {
  // useEffect(() => {
  //   console.log(props.country.languages);
  //   console.log();
  // }, []);

  return (
    <>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <CardMedia component='img' height={190} width='100' image={props.country.flags.png} />
          <Typography>Common : {props.country.name.common}</Typography>
          <Typography>Official : {props.country.name.official}</Typography>
          <Typography>Population : {props.country.population}</Typography>
          <Typography>Capital : {props.country.capital.map((cap) => cap)}</Typography>
          <Typography>
            Languages : 
            {Object.keys(props.country.languages).map((key, index) => {
              var lang =
                index < Object.keys(props.country.languages).length - 1
                  ? props.country.languages[key] + ', '
                  : props.country.languages[key];
              return lang;
            })}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
