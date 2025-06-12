import { tab } from "@testing-library/user-event/dist/tab";


const styles = {
  container: {
    paddingTop: '!important',
  },
  innerContainer: {
    marginTop: '0',
    backgroundColor: '#D4B7B0', // Light beige background
    color: '3B270C',
    border: '1px solid #3B270C',
  },
  font: {
    fontFamily: 'roboto',
  },
  tableNumberContainer: {
    border: '1px solid #3B270C', // Gold border for the table number container
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: '#F7E7CE',
    color: '#3B270C',
    fontFamily: 'cursive'
  },
  tableNumber: {
    padding: '0',
    margin: '0',
    fontSize: '2.5rem',
    fontWeight: 'bolder',
  }
}



export default function TableInfo({selectedGuest}) {
  return selectedGuest 
    && (
      <div className="table-info p-3 pt-0 d-flex flex-column justify-content-center align-items-center text-black" style={styles.container}>
        <div className="inner-container h-100 w-100 d-flex flex-container flex-column justify-content-center align-items-center" style={styles.innerContainer}>
          <div className="table-info-header mb-auto pt-2" style={styles.font}>
            <i>You are seated at...</i>
          </div>
          <div className="table-info-table d-flex flex-column justify-content-center align-items-center" style={styles.tableNumberContainer}>
            <span className="">Table</span>
            <span style={styles.tableNumber}>{selectedGuest.table}</span>
            <span>{selectedGuest.name}</span>
          </div>
          <div className="mt-auto pb-2" style={styles.font}>
            <i>Please find your seat at the map above.</i>
          </div>
        </div>
      </div>
    );
}