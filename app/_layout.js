import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../config/query";

const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
};

export default Layout;
