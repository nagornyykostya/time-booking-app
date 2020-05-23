import { fetchBookedDate, postNewBooking, updateBookingObj } from "./gateway.js";
import { createNewBookingDateObj } from "./dateUtils.js";
import {STORE_BOOKED_DATE, SET_LOADER, SET_IS_NEW_BOOKING, RESET_STORE, SET_SELECTED_TIME_SLOT} from './dates.actionTypes.js'
var moment = require("moment");

export const setSelectedTimeSlot = (timeSlot) => {
    return {
        type: SET_SELECTED_TIME_SLOT,
        payload: {
            timeSlot
        }
    };
};

export const resetStore = () => {
    return {
        type: RESET_STORE
    }
}

export const setIsNewBooking = (isNewBooking) => {
    return {
        type: SET_IS_NEW_BOOKING,
        payload: {
            isNewBooking
        }
    };
};

export const setLoader = (isLoading) => {
    return {
        type: SET_LOADER,
        payload: {
            isLoading
        }
    };
};

export const storeDates = (bookedDate) => {
    return {
        type: STORE_BOOKED_DATE,
        payload: {
            bookedDate
        }
    };
};


export const fetchDate = (date) => {
    const formatedDate = moment(date).format('YYYY-MM-DD')
    return function (dispatch) {
        dispatch(setLoader(true))
        dispatch(setSelectedTimeSlot(null))
        fetchBookedDate(formatedDate)
            .then(bookedDate => {
                if (bookedDate[0]) {
                    dispatch(storeDates(bookedDate[0]));
                } else {
                    dispatch(setIsNewBooking(true));
                    dispatch(storeDates(createNewBookingDateObj(formatedDate)));
                }
                dispatch(setLoader(false));
            }
            )
    };
};

export const postNewBookingDateObj = (newBookingObj) => {
    return function (dispatch) {
        dispatch(setLoader(true))
        postNewBooking(newBookingObj)
            .then(() => {
                dispatch(resetStore());
            })
    };
};

export const updateBookingObjData = (id, newBookingObj) => {
    return function (dispatch) {
        dispatch(setLoader(true))
        updateBookingObj(id, newBookingObj)
            .then(() => {
                dispatch(resetStore());
            })
    };
};