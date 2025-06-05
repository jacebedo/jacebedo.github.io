

export default function GuestEntry({guestName, onGuestNameChanged}) {
  return (
    <div className="guest-entry">
      <input 
        className="guest-entry-input" 
        type="text" 
        placeholder="Enter guest name here..."
        value = {guestName || ''}
        onChange={(e) => onGuestNameChanged(e.target.value)}
      />
    </div>
  );
}