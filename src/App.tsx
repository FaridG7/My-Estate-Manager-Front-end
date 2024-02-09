import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./UI/AppLayout";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import PeoplePage from "./pages/PeoplePage";
import PersonDetailsPage from "./pages/PersonDetailsPage";
import EstatesPage from "./pages/EstatesPage";
import EstateDetailsPage from "./pages/EstateDetailsPage";
import RentContractsPage from "./pages/RentContractsPage";
import SaleContractsPage from "./pages/SaleContractsPage";
import ContractDetailsPage from "./pages/ContractDetailsPage";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./UI/ProtedctedRoute";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    text: {
      primary: "#454545",
    },
    primary: {
      main: "#3d9970",
    },
    secondary: {
      main: "#8b1c1c",
    },
    background: {
      default:"#cbe0ce",
      paper: "#3d9970",
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="people" element={<PeoplePage />} />
              <Route path="people/:id" element={<PersonDetailsPage />} />
              <Route path="estates" element={<EstatesPage />} />
              <Route path="estates/:id" element={<EstateDetailsPage />} />
              <Route path="contracts/rent" element={<RentContractsPage />} />
              <Route path="contracts/sale" element={<SaleContractsPage />} />
              <Route path="contracts/:id" element={<ContractDetailsPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#ddd",
              color: "#454545",
            },
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
