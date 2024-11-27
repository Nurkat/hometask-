import AuthRoutes from "./routes/AuthRoutes";
import { Main } from "./pages";

const App = () => {
  const token = localStorage.getItem("access_token");
  return token ? <Main /> : <AuthRoutes />;
};

export default App;
