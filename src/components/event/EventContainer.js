import React from 'react';
import Event from './Event'

class EventContainer extends React.Component {
    render = () => {
        return (
            <Event isEventNew={this.props.isEventNew} activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}
                addNewEvent={this.props.addNewEvent} eventDate={this.props.eventDate} eventInEdit={this.props.eventInEdit}
                deleteEvent={this.props.deleteEvent} setEventInEdit={this.props.setEventInEdit}
            />
        )
    }
}

export default EventContainer;