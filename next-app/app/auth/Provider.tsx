"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

// create a wrapper component around the session provider to be able to use 'client' functions
const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
