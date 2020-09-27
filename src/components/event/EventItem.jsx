import React from 'react';
import './Event.css'

const EventItem = (props) => {
    return (
        <div className="event">
            <p>Название:</p>
            <span>{props.event.eventName}</span>
            <p>Время:</p>
            <span>{props.event.eventTime}</span>
            <p>Участники:</p>
            <span>{props.event.eventMembers}</span>
            <p>Описание:</p>
            <span>{props.event.eventDescription}</span>
            <div className="event__buttons">
                <>
                    <button onClick={() => props.deleteEvent(props.event.id)}>Удалить</button>
                </>
            </div>
        </div>
    )
}

export default EventItem;
