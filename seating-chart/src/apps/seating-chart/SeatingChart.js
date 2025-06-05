import Header from './components/Header';
import './seating-chart.css';
import { useState, useEffect } from 'react';
import GuestEntry from './components/GuestEntry';
import guests from './data/Guests.json';
import { clear } from '@testing-library/user-event/dist/clear';

export default function SeatingChart() {

  const [guestName, setGuestName] = useState(null);
  const [isGuestValid, setIsGuestValid] = useState(false);
  const [autoFillGuests, setAutoFillGuests] = useState([]);

  useEffect(() => {
    // filter list of guests based on the guestName
    updateGuestAutofillSource(guestName);
  }, [guestName, guests, setAutoFillGuests]);

  const updateGuestAutofillSource = (guestName) => {
    if (guestName && guestName.length > 2) {
      let getFilteredGuestsFn = () => {
        setAutoFillGuests(
          guests.filter(guest => guest.name.toLowerCase().includes(guestName.toLowerCase()))
        );
      }
      clearTimeout(getFilteredGuestsFn);
      setTimeout(getFilteredGuestsFn, 300);
    }
  }

  useEffect(() => { 
    setIsGuestValid(autoFillGuests.length > 0);
  }, [autoFillGuests])

  return (
    <>
      <Header/>
      <GuestEntry 
        guestName={guestName} 
        onGuestNameChanged={setGuestName} 
        autoFillGuests={autoFillGuests}
      />
    </>
  )
};