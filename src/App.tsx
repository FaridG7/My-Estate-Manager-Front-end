import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
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

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
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
      </Container>
    </QueryClientProvider>
  );
};

export default App;
