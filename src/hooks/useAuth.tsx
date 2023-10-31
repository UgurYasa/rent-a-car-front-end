import React from "react";
import Cookies from "universal-cookie";
import { JWTPayload } from "jose";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  const cookieList = cookies();
  const { value: access_token } = cookieList.get("access_token") || {
    value: null,
  };

  return access_token;
};

export function useAuth() {
  const [auth, setAuth] = React.useState<JWTPayload | null | true>(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const access_token = cookies.get("access_token") || null;

    setAuth(access_token);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
