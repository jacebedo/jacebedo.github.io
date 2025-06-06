

export default function GuestEntry({guestName, onGuestNameChanged, autoFillGuests, selectedGuest}) {
  
  
  return (
    <>
    <div className="guest-entry">
      <input 
        className="guest-entry-input" 
        type="text" 
        placeholder="Enter guest name here..."
        value = {guestName || ''}
        onChange={(e) => onGuestNameChanged(e.target.value)}
      />
    </div>
    {autoFillGuests?.length > 0 && !selectedGuest && 
      (<div className="guest-autofill">
          {autoFillGuests.map((guest, index) => (
            <div 
              key={index} 
              className="guest-autofill-item"
              onClick={() => onGuestNameChanged(guest.name)}
            >
              {guest.name}
            </div>
          ))}
        </div>
      )
    }
    </>
  );
}