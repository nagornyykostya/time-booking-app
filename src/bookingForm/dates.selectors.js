import { createSelector } from "reselect"

export const isFinalMessageVisibleSelector = (state) => {
    return state.isFinalMessageVisible
}

export const selectedTimeSlotSelector = (state) => {
    return state.selectedTimeSlot
}

export const isLoadingSelector = (state) => {
    return state.isLoading
};

export const bookedDateSelector = (state) => {
    return state.bookedDate
}

export const isNewBookingSelector = (state) => {
    return state.isNewBooking
}
export const freeHours = createSelector([
    bookedDateSelector
], (bookedDate) => {
    if (!bookedDate) return null;
    return bookedDate.bookedHours.map(obj => obj.timeSlot);
});