const ACTIVATE_EDIT_MODE = 'ACTIVATE_EDIT_MODE';
const DEACTIVATE_EDIT_MODE = 'DEACTIVATE_EDIT_MODE';
const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';
const SET_EVENT_IN_EDIT = 'SET_EVENT_IN_EDIT';

let initialState = {
    editMode: false,
    eventDate: null,
    currentEvents: [
        {
            eventDate: '25-9-2020',
            eventName: 'Nice party',
            eventTime: '4:20',
            eventMembers: 'me'
        }
    ],
    isEventNew: null,
    eventInEdit: {}
}

const calendarReducer = (state = initialState, action) => {
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
            return {
                ...state,
                currentEvents: [...state.currentEvents, {
                    eventDate: action.eventDate,
                    eventName: action.eventName,
                    eventTime: action.eventTime,
                    eventMembers: action.eventMembers,
                    eventDescription: action.eventDescription
                }],
                eventInEdit: {}
            }
        case DELETE_EVENT:
            return {
                ...state,
                currentEvents: state.currentEvents.filter(event => event.eventDate !== action.eventDate)
            }
        case SET_EVENT_IN_EDIT:
            return {
                ...state,
                eventInEdit: action.event
            }
        default:
            return state;
    }
}

export const activateEditMode = (eventDate) => ({ type: ACTIVATE_EDIT_MODE, eventDate })
export const deactivateEditMode = () => ({ type: DEACTIVATE_EDIT_MODE })
export const addNewEvent = (eventDate, eventName, eventTime, eventMembers, eventDescription) => ({ type: ADD_NEW_EVENT, eventDate, eventName, eventTime, eventMembers, eventDescription })
export const deleteEvent = (eventDate) => ({ type: DELETE_EVENT, eventDate })
export const setEventInEdit = (event) => ({ type: SET_EVENT_IN_EDIT, event })

export default calendarReducer;