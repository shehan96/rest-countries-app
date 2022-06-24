import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

type SearchBarProps = {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ ...props }: SearchBarProps) => {
  return (
    <>
      <TextField
        id='outlined-basic'
        label='Search a Country'
        variant='outlined'
        onChange={props.onSearch}
        sx={{ width: '100%' }}
      />
    </>
  );
};
