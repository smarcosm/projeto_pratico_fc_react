import { Box, ThemeProvider, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/Theme";
import { Route, Routes } from "react-router-dom";
import { CategoryCreate } from "./features/categories/CreateCategory";
import { CategoryList } from "./features/categories/ListCategory";
import { CategoryEdit } from "./features/categories/EditeCategory";
import { SnackbarProvider } from "notistack";

export default function MyApp() {
  return(
  <ThemeProvider theme={appTheme}>
    <SnackbarProvider 
    autoHideDuration={2000}
    maxSnack={3}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    >
    <Box 
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: ( theme ) => theme.palette.grey[900],
      }}
    >
      <Header />
      <Layout >
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/create" element={<CategoryCreate />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />

          <Route 
            path="*"
            element={
              <Box sx={{color: "white"}}>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Page not found</Typography>
              </Box>
            }
          />
        </Routes>
      </Layout>
    </Box>
    </SnackbarProvider>
  </ThemeProvider>
  );
}

