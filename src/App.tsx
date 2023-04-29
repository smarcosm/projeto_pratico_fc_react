import { Box, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";


export default function MyApp() {
  return(
  <ThemeProvider theme={{}}>
    <Box 
      component="main"
      sx={{
        height: "100vh",
        //backgroundColor: "#fff",
      }}
    >
      <Header />
      <Layout >
        <h1>Olá mundo</h1>
      </Layout>
    </Box>
  </ThemeProvider>
  );
}

