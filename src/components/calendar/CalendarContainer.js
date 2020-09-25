import React from 'react';
import Calendar from './Calendar';
import useCalendar from '../../hooks/useCalendar';
import EventContainer from '../event/EventContainer';
import { activateEditMode, deactivateEditMode, addNewEvent, deleteEvent, setEventInEdit } from '../../redux/calendarReducer';
import { connect } from 'react-redux';

class CalendarContainer extends React.Component {
    componentDidUpdate() {
        this.props.currentEvents.find((event) => {
            if (event.eventDate === this.props.eventDate) {
                this.props.setEventInEdit(event)
            }
        })
    }

    render = () => {
        return (
            <>
                <Calendar useCalendar={useCalendar} activateEditMode={this.props.activateEditMode} />
                {!this.props.editMode ? null
                    : <EventContainer isEventNew={this.props.isEventNew} activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}
                        addNewEvent={this.props.addNewEvent} eventDate={this.props.eventDate} currentEvents={this.props.currentEvents}
                        deleteEvent={this.props.deleteEvent} eventInEdit={this.props.eventInEdit}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    editMode: state.calendar.editMode,
    eventDate: state.calendar.eventDate,
    isEventNew: state.calendar.isEventNew,
    currentEvents: state.calendar.currentEvents,
    eventInEdit: state.calendar.eventInEdit
})

export default connect(mapStateToProps, {
    activateEditMode,
    deactivateEditMode,
    addNewEvent,
    deleteEvent,
    setEventInEdit
})(CalendarContainer);