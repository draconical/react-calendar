import React from 'react';
import './Event.css'

const Event = (props) => {
    const newEventInput1 = React.createRef();
    const newEventInput2 = React.createRef();
    const newEventInput3 = React.createRef();
    const newEventInput4 = React.createRef();

    const refresh = () => {
        props.deactivateEditMode()
        props.activateEditMode(props.eventDate)
    }

    const onSaveButtonClick = () => {
        let eventValue1 = newEventInput1.current.value;
        let eventValue2 = newEventInput2.current.value;
        let eventValue3 = newEventInput3.current.value;
        let eventValue4 = newEventInput4.current.value;

        if (eventValue1 === '' || eventValue2 === '') {
            alert('Строки названия и времени события должны быть заполнены!')
        } else {
            props.addNewEvent(props.eventDate, eventValue1, eventValue2, eventValue3, eventValue4)
            refresh()
        }
    }

    const onDeleteButtonClick = (eventDate) => {
        props.deleteEvent(eventDate)
        refresh()
    }

    return (
        <div className="event">
            <p>Название:</p>
            {props.isEventNew === true ? <input ref={newEventInput1} placeholder='Укажите название...'></input> : <span>{props.eventInEdit.eventName}</span>}
            <p>Время:</p>
            {props.isEventNew === true ? <input ref={newEventInput2} placeholder='Укажите время...'></input> : <span>{props.eventInEdit.eventTime}</span>}
            <p>Участники:</p>
            {props.isEventNew === true ? <input ref={newEventInput3} placeholder='Укажите участников...'></input> : <span>{props.eventInEdit.eventMembers}</span>}
            <p>Описание:</p>
            {props.isEventNew === true ? <input ref={newEventInput4} placeholder='Описание события...'></input> : <span>{props.eventInEdit.eventDescription}</span>}
            <div className="event__buttons">
                {props.isEventNew === true
                    ? <>
                        <button onClick={() => onSaveButtonClick()}>Сохранить</button>
                        <button onClick={() => props.deactivateEditMode()}>Закрыть</button>
                    </>
                    : <>
                        <button>Редактировать</button>
                        <button onClick={() => onDeleteButtonClick(props.eventDate)}>Удалить</button>
                        <button onClick={() => props.deactivateEditMode()}>Закрыть</button>
                    </>}
            </div>
        </div>
    )
}

export default Event;