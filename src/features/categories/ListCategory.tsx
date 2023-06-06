import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./CategorySlice";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


export const CategoryList = ()=>{
  const categories = useAppSelector(selectCategories)

  // use categories to create rows
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,

  }))


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
  ];
  

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Box display="flex" justifyContent="flex-end">
        <Button 
          variant="contained"
          color="secondary"
          component={Link}
          to="/category/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

    
      {/* {categories.map((category) => (
        <Typography key={category.id}>{category.name}</Typography>

      ))} */}
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid 
      rows={rows} columns={columns} />
    </div>
  </Box>
  )
}
  
