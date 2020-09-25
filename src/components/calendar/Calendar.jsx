import React from 'react';
import './Calendar.css'

const Calendar = (props) => {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = props.useCalendar();

    const onDateClick = (eventDate) => {
        props.activateEditMode(eventDate)
    }

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
                                {cols.map(col => (
                                    col.date === todayFormatted
                                        ? <td key={col.date} className={`${col.classes} today`} onClick={() => onDateClick(col.date)}>
                                            {col.value}
                                        </td>
                                        : <td key={col.date} className={col.classes} onClick={() => onDateClick(col.date)}>{col.value}</td>
                                ))}
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className="calendar__scroller">
                <button className="button" onClick={getPrevMonth}>Предыдущий</button>
                <button className="button" onClick={getNextMonth}>Следующий</button>
            </div>
        </div>
    )
}

export default Calendar;