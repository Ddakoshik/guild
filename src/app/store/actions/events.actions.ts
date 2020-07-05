import {createAction, props} from '@ngrx/store';
import {EventModel} from '../../shared/models/event.model';
import {Character} from '../../shared/models/blog.model';


export const getEvents = createAction(
  '[Events Api] Get Events List'
);
export const getEventsSuccess = createAction(
  '[Events] Get Events List Success',
  props<{eventsList: EventModel[]}>()
);
export const getEventsFail = createAction(
  '[Events] Get Events List Fail'
);

export const deleteEvent = createAction(
    '[Events Api] Delete Event',
    props<{eventData: EventModel}>()
);
export const deleteEventSuccess = createAction(
    '[Events] Delete Event Success'
);
export const deleteEventFail = createAction(
    '[Events] Delete Event Fail'
);

export const openAddEventModal = createAction(
    '[Events] Open Add Event Modal'
);
export const closeAddEventModal = createAction(
    '[Events] Close Add Event Modal'
);

export const openEditEventModal = createAction(
    '[Events] Open Edit Event Modal',
    props<{eventData: EventModel}>()
);
export const closeEditEventModal = createAction(
    '[Events] Close Edit Event Modal'
);

export const openDeleteEventConfirmationModal = createAction(
    '[Events] Open Delete Event Confirmation Modal',
    props<{eventData: EventModel}>()
);
export const closeDeleteEventConfirmationModal = createAction(
    '[Events] Close Delete Event Confirmation Modal'
);


export const addNewEvent = createAction(
    '[Events Api] Add New Event',
    props<{eventData: EventModel}>()
);
export const addNewEventSuccess = createAction(
    '[Events] Add New Event Success',
);
export const addNewEventFail = createAction(
    '[Events] Add New Event Fail',
);

export const updateEvent = createAction(
    '[Events Api] Update Event',
    props<{eventData: EventModel}>()
);
export const updateEventSuccess = createAction(
    '[Events] Update Event Success'
);
export const updateEventFail = createAction(
    '[Events] Update Event Fail'
);


export const openAddCharacterToEventModal = createAction(
    '[Events] Open Add Character To Event Modal',
    props<{eventData: EventModel}>()
);
export const closeAddCharacterToEventModal = createAction(
    '[Events] Close Add Character To Event Modal'
);


export const addCharacterToEvent = createAction(
    '[Events Api] Add Character To Event',
    props<{character: Character}>()
);
export const addCharacterToEventSuccess = createAction(
    '[Events] Add Character To Event Success'
);
export const addCharacterToEventFail = createAction(
    '[Events] Add Character To Event Fail'
);

export const deleteCharacterFromEvent = createAction(
    '[Events Api] Delete Character From Event',
    props<{character: Character}>()
);
export const deleteCharacterFromEventSuccess = createAction(
    '[Events] Delete Character From Event Success'
);
export const deleteCharacterFromEventFail = createAction(
    '[Events] Delete Character From Event Fail'
);


