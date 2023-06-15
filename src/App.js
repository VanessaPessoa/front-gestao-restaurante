import Route from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import store, { persistor } from "./store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Route />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
