import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of a single ticket detail
interface TicketDetail {
  departureLocation: OptionType;
  arrivalLocation: OptionType;
  departureDate: string;
  returnDate: string;
  isRoundTrip: OptionType;
  adult: number;
  children: number;
  classOfTravel: OptionType;
}

// interface contactInfo {
//   email: string;
//   conatctNo: number;
//   passengerDetails: PassengerInfo[]

// }

// interface PassengerInfo {
//   first_name: string;
//   last_name: string;
//   date_of_birth: string;
//   gender: OptionType;
//   nationality: string;
//   passport_no: string;
//   passport_expiry_date: string;
// }

interface OptionType {
  label: string;
  value: string;
}
type TicketDetailsState = TicketDetail[];
const initialState: TicketDetailsState = [];

const ticketDetailsSlice = createSlice({
  name: 'ticketDetails',
  initialState,
  reducers: {
    setTicketDetails: (state, action: PayloadAction<TicketDetail[]>) => {
      return action.payload;
    },
    addTicketDetail: (state, action: PayloadAction<TicketDetail>) => {
      state.push(action.payload);
    },
    updateTicketDetail: (state, action: PayloadAction<{ index: number; newData: TicketDetail }>) => {
      const { index, newData } = action.payload;
      if (state[index]) {
        state[index] = newData;
      }
    },
    removeTicketDetail: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload); // Remove ticket by index
    },
  },
});

// Export actions and reducer
export const {
  setTicketDetails,
  addTicketDetail,
  updateTicketDetail,
  removeTicketDetail,
} = ticketDetailsSlice.actions;

export default ticketDetailsSlice.reducer;
