import { createSlice } from "@reduxjs/toolkit";

export interface ConvertorState {
  value: number;
}

const initialState: ConvertorState = {
  value: 1,
};

export const convertorSlice = createSlice({
  name: "convertor",
  initialState,
  reducers: {
    kilometersToMiles: (state) => {
      state.value *= 0.621371;
    },
    milesToKilometers: (state) => {
      state.value *= 1.60934;
    },
    feetToMeters: (state) => {
      state.value *= 0.3048;
    },
    metersToFeet: (state) => {
      state.value *= 3.28084;
    },
    centimetersToInches: (state) => {
      state.value *= 0.393701;
    },
    inchesToCentimeters: (state) => {
      state.value *= 2.54;
    },
  },
});

export const {
  kilometersToMiles,
  milesToKilometers,
  feetToMeters,
  metersToFeet,
  centimetersToInches,
  inchesToCentimeters,
} = convertorSlice.actions;

export default convertorSlice.reducer;
