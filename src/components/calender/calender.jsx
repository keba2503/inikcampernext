import * as React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'

export default function Calendar() {
  const [valueini, setValueini] = useState(dayjs())


  // const [date, setDate] = useState(new Date().toLocaleDateString('fr-FR'))
  // const [value, setValue] = React.useState([null, null])

  const handleChange = (newValue) => {
    setValueini(newValue)
    
  }

  //Obtener datos de formulario

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          
          name="fecha"
          label="Fecha inicio"
          inputFormat="DD/MM/YYYY"
          value={valueini}
          onChange={handleChange}
          // {(date) => {
          //   const d = new Date(date).toLocaleDateString('fr-FR')
          //   console.log(d)
          //   setDate(d)

          renderInput={(params) => <TextField {...params} />}
        />

        {/* <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        /> */}
      </Stack>
    </LocalizationProvider>
  )
}
