import { createSlice } from "@reduxjs/toolkit"

interface Category {
  id: string,
  name: string,
  is_active: boolean,
  created_at: string,
  updated_at: string,
  deleted_at: null | string,
  description: null | string,
}



const category: Category = {
  id: "65851-2244adff-42s4-a15d5215",
  name: "Olive",
  description: "Earum wuo at dolor tempore nissi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at:  "2022-08-15T10:59:09+0000",
}


export const initialState = [
    category,
    { ...category, id: "65851-2244adff-42s4-a15d5215", name: "Peach"},
    { ...category, id: "65851-2244adff-42s4-a15d5215", name: "Peach"},
    { ...category, id: "65851-2244adff-42s4-a15d5215", name: "Peach"},
    { ...category, id: "65851-2244adff-42s4-a15d5215", name: "Peach"},
    { ...category, id: "65851-2244adff-42s4-a15d5215", name: "Peach"}
  ];



const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action){},
    updateCategory(state, action){},
    deleteCategory(state, action){}
  }
});

export default categoriesSlice.reducer;