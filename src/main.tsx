import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

// const ReactQueryDevtoolsProduction = React.lazy(() =>
//   import("@tanstack/react-query-devtools/build/lib/index.prod.js").then((d) => ({
//     default: d.ReactQueryDevtools,
//   }))
// );
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
