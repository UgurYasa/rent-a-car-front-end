import React from "react";
import Cookies from "universal-cookie";
import { JWTPayload } from "jose";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") || {
    value: null,
  };

  return token;
};

export function useAuth() {
  const [auth, setAuth] = React.useState<JWTPayload | null | true>(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") || null;

    setAuth(token);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
