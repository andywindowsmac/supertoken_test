import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";

import * as SuperTokensConfig from "../config/frontendConfig";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SuperTokensWrapper>
      <Component {...pageProps} />
    </SuperTokensWrapper>
  );
}
