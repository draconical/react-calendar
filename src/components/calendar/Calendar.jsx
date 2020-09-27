import React from 'react';
import './Calendar.css'

const Calendar = (props) => {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth, selectDate, selectedDateFormatted } = props.useCalendar();

    const onMonthButtonClick = (which) => {
        if (which === 'next') {
            getNextMonth()
        } else {
            getPrevMonth()
        }
        props.deactivateEditMode()
    }

    const onDateClick = (eventDate) => {
        selectDate(eventDate);
        props.activateEditMode(eventDate)
    }
    const eventDates = props.currentEvents.map(i => i.eventDate);

    return (
        <div className="calendar">
            <div className="calendar__header">
                <p>Выбранный месяц: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
            </div>
            <table className="calendar__table">
                <thead>
                    <tr>
                        {daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(calendarRows).map(cols => {
                            return <tr key={cols[0].date}>
                                {cols.map(col => {
                                    if (col.date === todayFormatted) {
                                        return <td key={col.date} className={`${col.classes} today`}
                                            onClick={() => onDateClick(col.date)}>
                                            {col.value}
                                        </td>
                                    }

                                    if (eventDates.includes(col.date)) {
                                        return <td key={col.date} className={`${col.classes} event-day`}
                                            onClick={() => onDateClick(col.date)}>
                                            {col.value}
                                        </td>
                                    }


                                    if (col.date === selectedDateFormatted) {
                                        return <td key={col.date} className={`${col.classes} selected`}
                                            onClick={() => onDateClick(col.date)}>
                                            {col.value}
                                        </td>
                                    }

                                    return <td key={col.date} className={col.classes}
                                        onClick={() => onDateClick(col.date)}>{col.value}</td>

                                })}
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className="calendar__scroller">
                <button className="button" onClick={() => onMonthButtonClick('prev')}>Предыдущий</button>
                <button className="button" onClick={() => onMonthButtonClick('next')}>Следующий</button>
            </div>
        </div>
    )
}

export default Calendar;
