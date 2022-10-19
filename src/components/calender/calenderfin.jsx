import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




export default function CalendarFin() {
  const [valuefin, setValuefin] = React.useState(dayjs());


  const handleChangeini = (newValuefin) => {
    setValuefin(newValuefin);
     };

     
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker  
          label="Fecha Fin"
          inputFormat="DD/MM/YYYY"
          value={valuefin}
          onChange={handleChangeini}
          renderInput={(params) => <TextField {...params} />}
        />
               
      </Stack>
    </LocalizationProvider>
  );
}
