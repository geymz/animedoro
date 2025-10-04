import { useState } from 'react';
import CalendarComponent from 'react-calendar';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-card">
      <h3>Calendar 🗓️</h3>
      <CalendarComponent 
        onChange={onChange}
        value={date}
        locale="en-EN"
        className="react-calendar-override"
      />
    </div>
  );
}

export default Calendar;