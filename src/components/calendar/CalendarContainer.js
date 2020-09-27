import React from 'react';
import Calendar from './Calendar';
import useCalendar from '../../hooks/useCalendar';
import Event from '../event/Event';
import { activateEditMode, deactivateEditMode, addNewEvent, deleteEvent } from '../../redux/calendarReducer';
import { connect } from 'react-redux';
import EventItem from "../event/EventItem";

class CalendarContainer extends React.Component {
    componentDidMount() {
        this.props.deactivateEditMode()
    }

    render = () => {
        return (
            <>
                <Calendar useCalendar={useCalendar} currentEvents={this.props.currentEvents} activateEditMode={this.props.activateEditMode}
                    deactivateEditMode={this.props.deactivateEditMode}
                />
                {!this.props.editMode ? null
                    : <Event activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}
                        addNewEvent={this.props.addNewEvent} eventDate={this.props.eventDate} currentEvents={this.props.currentEvents}
                        deleteEvent={this.props.deleteEvent}
                    />}

                {
                    this.props.currentEvents.filter((event) => {
                        return event.eventDate === this.props.eventDate
                    }).map((event, index) => (
                        <EventItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
                    ))
                }
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    editMode: state.calendar.editMode,
    eventDate: state.calendar.eventDate,
    currentEvents: state.calendar.currentEvents
})

export default connect(mapStateToProps, {
    activateEditMode,
    deactivateEditMode,
    addNewEvent,
    deleteEvent
})(CalendarContainer);
