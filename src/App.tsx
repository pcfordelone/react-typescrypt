import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LoggedInUserProvider } from './shared/contexts/LoggedInUser';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LoggedInUserProvider>
        <AppRoutes />
      </LoggedInUserProvider>
    </BrowserRouter>
  );
};