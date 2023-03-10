import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Title from '../Title';

const Calendar = () => {
    const [value, setValue] = useState(new Date());

    return (
        <>
        <Title>Agendamentos</Title>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                // openTo="year"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        </>
    );
}

export default Calendar;

