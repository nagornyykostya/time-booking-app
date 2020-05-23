import React from 'react';
import { Provider } from 'react-redux';
import BookingForm from './bookingForm/components/BookingForm.jsx';
import store from './store.js';

function App() {
  return (
    <main className="hours-booking-block">
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </main>

  );
}

export default App;
