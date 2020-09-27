import React, { useEffect, useState } from 'react';
import './Event.css'

const Event = (props) => {
    const [newEventName, setNewEventName] = useState('')
    const [newEventTime, setNewEventTime] = useState('')
    const [newEventMembers, setNewEventMembers] = useState('')
    const [newEventDescription, setNewEventDescription] = useState('')

    const clear = () => {
        setNewEventName('')
        setNewEventTime('')
        setNewEventMembers('')
        setNewEventDescription('')
    }

    useEffect(() => {
        clear();
    }, [props.eventDate])

    const onSaveButtonClick = () => {
        if (newEventName === '' || newEventTime === '') {
            alert('Строки названия и времени события должны быть заполнены!')
        } else {
            props.addNewEvent(props.eventDate, newEventName, newEventTime, newEventMembers, newEventDescription)
            clear();
        }
    }

    return (
        <div className="event">
            <p>Название:</p>
            <input value={newEventName} onChange={(e) => setNewEventName(e.target.value)} placeholder='Укажите название...'></input>
            <p>Время:</p>
            <input value={newEventTime} onChange={(e) => setNewEventTime(e.target.value)} placeholder='Укажите время...'></input>
            <p>Участники:</p>
            <input value={newEventMembers} onChange={(e) => setNewEventMembers(e.target.value)} placeholder='Укажите участников...'></input>
            <p>Описание:</p>
            <input value={newEventDescription} onChange={(e) => setNewEventDescription(e.target.value)} placeholder='Описание события...'></input>
            <div className="event__buttons">
                <>
                    <button onClick={() => onSaveButtonClick()}>Сохранить</button>
                    <button onClick={() => props.deactivateEditMode()}>Закрыть</button>
                </>
            </div>
        </div>
    )
}

export default Event;
