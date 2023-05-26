import Route from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Route />
    </QueryClientProvider>
  );
}

export default App;
