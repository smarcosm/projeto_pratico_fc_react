import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

const category: Category = {
  id: "65851-2244adff-42s4-a15d5333",
  name: "Olive",
  description: "Earum wuo at dolor tempore nissi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at: "2022-08-15T10:59:09+0000",
};

export const initialState = [
  category,
  { ...category, id: "65851-2244adff-42s4-a15d5217", name: "Luiz" },
  { ...category, id: "65851-2244adff-42s4-a15d5255", name: "Isaac" },
  { ...category, id: "65851-2244adff-42s4-a15d5235", name: "Isabel" },
  { ...category, id: "65851-2244adff-42s4-a15d5295", name: "Isadora" },
  { ...category, id: "65851-2244adff-42s4-a15d5215", name: "Israelle" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {
      state.push(action.payload);
    },
    updateCategory(state, action) {
      //find index on state of category to update
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      // update category on state
      state[index] = action.payload;
    },
    deleteCategory(state, action) {
      //find index on state of category to delete
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      // delete category on state
      state.splice(index, 1);
    },
  },
});

// Selectors
export const selectCategories = (state: RootState) => state.categories;
// Select category by id
export const selectCategoryById = (state: RootState, id: string) => {  
  state.categories.find((category) => category.id === id);

  return (
    category || {
    id: "",
    name: "",
    description: "",
    is_active: false,
    deleted_at: null,
    created_at: "",
    updated_at: "",
  }
  );
};
export default categoriesSlice.reducer;
export const {createCategory, updateCategory, deleteCategory } = 
  categoriesSlice.actions;