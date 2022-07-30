import React from "react";
import { AuthProvider } from "./context/authProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./components/Private";
import { GlobalStyle } from "./globalStyle";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/profile"
              element={
                <Private>
                  <h1>OI</h1>
                </Private>
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
