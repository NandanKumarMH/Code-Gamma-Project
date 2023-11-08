import { createSlice } from "@reduxjs/toolkit";
export const AddAndViewCartDataSlice = createSlice({
  name: "AddAndViewCartData",
  initialState: {
    AddAndViewCartData: [],
  },
  reducers: {
    getAddAndViewCartData: (state, action) => {
      console.log("Adding product to cart:", action.payload);
      const existingProduct = state.AddAndViewCartData.find(
        (product) => product.uid === action?.payload?.uid
      );

      console.log(!existingProduct);

      if (!existingProduct) {
        state.AddAndViewCartData.push(action.payload);
        console.log("Product added to cart:", action.payload);
      } else {
        console.log("Product already in cart:", action.payload);
      }
    },
    DeleteAddAndViewCartData: (state, action) => {
      const productIdToDelete = action.payload;
      // Use filter to create a new array excluding the item with the specified ID
      state.AddAndViewCartData = state.AddAndViewCartData.filter(
        (product) => product.uid !== productIdToDelete
      );
    },
  },
});

export const { getAddAndViewCartData, DeleteAddAndViewCartData } =
  AddAndViewCartDataSlice.actions;

export default AddAndViewCartDataSlice.reducer;
