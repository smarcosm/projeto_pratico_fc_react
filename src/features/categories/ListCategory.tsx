import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteCategory, selectCategories } from "./CategorySlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { enqueueSnackbar, useSnackbar } from "notistack";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const componentsProps={
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  }

  // use categories to create rows
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleDateString("pt-BR"),
  }));

  const columns: GridColDef[] = [
    
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: renderNameCell,
    },

    {
      field: "isActive",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      type: "string",
      flex: 1,
      renderCell: renderActionsCell,
    },
   
  ];

  function handleDeleteCategory(id: string) {
    dispatch(deleteCategory(id));
    enqueueSnackbar("Category deleted successfully!", { variant: "error"})
  };


  function renderActionsCell(params: GridRenderCellParams) {

    return (
      <IconButton
        color="secondary"
        onClick={() => handleDeleteCategory(params.value)}
        arial-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
     <Link 
        style={{ textDecoration: "none" }}
        to={`/categories/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
     </Link>
    );
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

      <Box sx={{display: "flex", height: 300 }}>
        <DataGrid
         rows={rows}
         columns={columns}
         disableColumnFilter={true}
         disableColumnSelector={true}
          disableDensitySelector={true}
          componentsProps={componentsProps}
          pageSizeOptions={[2, 20, 50, 100]}
          components={{ Toolbar: GridToolbar }}          
        />
      </Box>
    </Box>
  );
};
