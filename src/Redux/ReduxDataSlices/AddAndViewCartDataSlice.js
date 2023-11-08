import { createSlice } from "@reduxjs/toolkit";
export const AddAndViewCartDataSlice = createSlice({
  name: "AddAndViewCartData",
  initialState: {
    AddAndViewCartData: [],
  },
  reducers: {
    getAddAndViewCartData: (state, action) => {
      const newItem = action.payload;
      const existingProduct = state.AddAndViewCartData.find(
        (product) => product.uid === newItem.uid
      );

      if (!existingProduct) {
        newItem.quantity = 1; // Initialize quantity to 1 for new items
        state.AddAndViewCartData.push(newItem);
      } else {
        existingProduct.quantity += 1; // Increment quantity for existing items
      }
    },
    DeleteAddAndViewCartData: (state, action) => {
      const productIdToDelete = action.payload;
      // Use filter to create a new array excluding the item with the specified ID
      state.AddAndViewCartData = state.AddAndViewCartData.filter(
        (product) => product.uid !== productIdToDelete
      );
    },
    reduceItemQuantity: (state, action) => {
      const productIdToReduce = action.payload;
      const itemToReduce = state.AddAndViewCartData.find(
        (product) => product.uid === productIdToReduce
      );

      if (itemToReduce && itemToReduce.quantity > 1) {
        itemToReduce.quantity -= 1;
      } else {
        // Remove the item from the cart if the quantity is 1 or less
        state.AddAndViewCartData = state.AddAndViewCartData.filter(
          (product) => product.uid !== productIdToReduce
        );
      }
    },
  },
});

export const {
  getAddAndViewCartData,
  DeleteAddAndViewCartData,
  reduceItemQuantity,
} = AddAndViewCartDataSlice.actions;

export default AddAndViewCartDataSlice.reducer;
