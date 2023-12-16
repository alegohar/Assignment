import React from "react";
import useAuth from "../hooks/useAuth";
import UnAuthorized from "../pages/UnAuthorized";
import Assignment from "../Pages/Assignment";
export default function Protected() {
  const isAuthorized = useAuth();
  return isAuthorized === true ? <Assignment /> : <UnAuthorized />;
}
