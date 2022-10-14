import "./main.global.css";
import React, { useEffect, useState } from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { RootReducer } from "./store/stor";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Layout>
          <Header />
          <Content />
        </Layout>
      )}
    </>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
