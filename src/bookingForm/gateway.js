const baseUrl = 'https://5ec78c4b155c130016a90213.mockapi.io/bookedDates';

export const fetchBookedDate = (searchingDate) => {

    return fetch(`${baseUrl}/?search=${searchingDate}`).then(response => {
        if (response.ok) {
            return response.json()
        } throw new Error('Loading vacant hours data failed')
    })
}

export const postNewBooking = (newBookingObj) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newBookingObj),
    }).then(response => {
        if (response.ok) return response.json()
        throw new Error('Booking your time reservation failed')
    })
}

export const updateBookingObj = (id, newBookingObj) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newBookingObj),
    }).then(response => {
        if (response.ok) return response.json()
        throw new Error('Booking your time reservation failed')
    })
}