"use client";
import { store } from "@/redux/app/store";
import { Provider } from "react-redux";

const ProviderReduxToolkitQuery = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderReduxToolkitQuery;
