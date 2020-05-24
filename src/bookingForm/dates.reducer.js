import { STORE_BOOKED_DATE, SET_LOADER, SET_IS_NEW_BOOKING, RESET_STORE, SET_SELECTED_TIME_SLOT, SET_IS_FINAL_MESSAGE_VISIBLE } from './dates.actionTypes.js';

const initialState = {
    bookedDate: null,
    isNewBooking: false,
    selectedTimeSlot: null,
    isLoading: false,
    isFinalMessageVisible: false,
}

const datesReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_BOOKED_DATE:
            return {
                ...state,
                bookedDate: action.payload.bookedDate
            };
        case SET_IS_NEW_BOOKING:
            return {
                ...state,
                isNewBooking: action.payload.isNewBooking
            }
        case SET_LOADER:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case RESET_STORE:
            return {
                ...state,
                bookedDate: null,
                isNewBooking: false,
                selectedTimeSlot: null,
                isLoading: false,
                isFinalMessageVisible: false
            }
        case SET_SELECTED_TIME_SLOT:
            return {
                ...state,
                selectedTimeSlot: action.payload.timeSlot
            }
        case SET_IS_FINAL_MESSAGE_VISIBLE:
            return {
                ...state,
                isFinalMessageVisible: action.payload.isVisible
            }
        default: return state
    }
};

export default datesReducer;