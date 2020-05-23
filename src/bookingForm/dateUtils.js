export const createNewBookingDateObj = (date) => {
    return {
        bookingDate: date,
        bookedHours: new Array(24).fill({
            issue: null,
            timeSlot: ""
        })
    }
}

export const updateNewBookingObjDate = (bookingDateObj, timeSlot, issueValue) => {

    const updatedBookedHours = bookingDateObj.bookedHours
        .map((obj, index) => {
            if (index === +timeSlot) {
                return {
                    ...obj,
                    timeSlot,
                    issue: issueValue
                }
            } else {
                return obj
            }
        });
    return {
        ...bookingDateObj,
        bookedHours: updatedBookedHours
    }
}