const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
const DEACTIVATE_EDIT_MODE = 'DEACTIVATE_EDIT_MODE';
const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

let initialState = JSON.parse(localStorage.getItem('calendar')) || {
    editMode: false,
    eventDate: null,
    currentEvents: []
}

const calendarReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case ACTIVATE_EDIT_MODE:
            return {
                ...state,
                editMode: true,
                eventDate: action.eventDate,
                isEventNew: !state.currentEvents.find(event => event.eventDate === action.eventDate ? true : false)
            }
        case DEACTIVATE_EDIT_MODE:
            return {
                ...state,
                editMode: false,
                eventDate: null,
                isEventNew: null
            }
        case ADD_NEW_EVENT:
            const newEvent = {
                id: Math.random(),
                eventDate: action.eventDate,
                eventName: action.eventName,
                eventTime: action.eventTime,
                eventMembers: action.eventMembers,
                eventDescription: action.eventDescription
            }
            newState = {
                ...state,
                currentEvents: [...state.currentEvents, newEvent],
                eventInEdit: newEvent
            }
            localStorage.setItem('calendar', JSON.stringify(newState))
            return newState
        case DELETE_EVENT:
            newState = {
                ...state,
                currentEvents: state.currentEvents.filter(event => event.id !== action.id)
            }
            localStorage.setItem('calendar', JSON.stringify(newState))
            return newState
        default:
            return state;
    }
}

export const activateEditMode = (eventDate) => ({ type: ACTIVATE_EDIT_MODE, eventDate })
export const deactivateEditMode = () => ({ type: DEACTIVATE_EDIT_MODE })
export const addNewEvent = (eventDate, eventName, eventTime, eventMembers, eventDescription) => ({ type: ADD_NEW_EVENT, eventDate, eventName, eventTime, eventMembers, eventDescription })
export const deleteEvent = (id) => ({ type: DELETE_EVENT, id });

export default calendarReducer;
