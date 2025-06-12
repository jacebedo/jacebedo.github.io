import Header from './components/Header';
import './seating-chart.css';
import { useState, useEffect } from 'react';
import GuestEntry from './components/GuestEntry';
import VenueLayout from './components/VenueLayout';
import TableInfo from './components/TableInfo';
import guests from './data/Guests.json';

export default function SeatingChart() {

  const [guestName, setGuestName] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [isGuestValid, setIsGuestValid] = useState(false);
  const [autoFillGuests, setAutoFillGuests] = useState([]);

  useEffect(() => {
    // filter list of guests based on the guestName
    updateGuestAutofillSource(guestName);
  }, [guestName, guests, setAutoFillGuests]);

  const updateGuestAutofillSource = (guestName) => {
    setSelectedGuest(null);
    if (guestName && guestName.length > 2) {
      // if has exact match, close the autofill. Otherwise, filter the list of guests.
      let exactMatch = guests.find(guest => guest.name.toLowerCase() === guestName.toLowerCase());
      if (exactMatch) {
        setSelectedGuest(exactMatch);
      } else {
        let getFilteredGuestsFn = () => {
          setAutoFillGuests(
            guests.filter(guest => guest.name.toLowerCase().includes(guestName.toLowerCase()))
          );
        }
        clearTimeout(getFilteredGuestsFn);
        setTimeout(getFilteredGuestsFn, 50);
      }
    } else {
      setAutoFillGuests([]);
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
        selectedGuest={selectedGuest}
      />
      <VenueLayout selectedGuest={selectedGuest}/>
      <TableInfo selectedGuest={selectedGuest}/>
    </>
  )
};