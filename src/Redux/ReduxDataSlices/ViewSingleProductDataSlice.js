import { createSlice } from "@reduxjs/toolkit";
export const ViewSingleProductDataSlice = createSlice({
  name: "ViewSingleProduct",
  initialState: {
    ViewSingleProductId: "",
  },
  reducers: {
    getViewSingleProductId: (state, action) => {
      state.ViewSingleProductId = action.payload;
    },
  },
});

export const { getViewSingleProductId } = ViewSingleProductDataSlice.actions;

export default ViewSingleProductDataSlice.reducer;
