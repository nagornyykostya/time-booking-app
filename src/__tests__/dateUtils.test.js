
import { updateNewBookingObjDate } from '../bookingForm/dateUtils.js'

const bookingObj = {
    bookingDate: '2020-03-04',
    bookedHours: [
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      }
    ]
  }
  
  const updatedBookingObj = {
    bookingDate: '2020-03-04',
    bookedHours: [
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: 'hi',
        timeSlot: '7'
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      },
      {
        issue: null,
        timeSlot: ''
      }
    ]
  }

test('returning updated booking object with time slot "7" and issue "hi"', () => {
  expect(updateNewBookingObjDate(bookingObj, "7", "hi")).toStrictEqual(updatedBookingObj);
});