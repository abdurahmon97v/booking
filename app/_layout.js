import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/query";
import { Header } from "../components";
import { View } from "react-native";

const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
};

export default Layout;
