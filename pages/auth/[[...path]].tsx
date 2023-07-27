import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import SuperTokens from "supertokens-auth-react";
import { canHandleRoute, getRoutingComponent } from "supertokens-auth-react/ui";
import { PreBuiltUIList } from "../../config/frontendConfig";
import { ThirdpartyEmailPasswordComponentsOverrideProvider } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { BlogsIcon } from "../../images";

const SuperTokensComponentNoSSR = dynamic<{}>(
  new Promise((res) =>
    res(() => (
      <ThirdpartyEmailPasswordComponentsOverrideProvider
        components={{
          // In this case, the <EmailPasswordSignInHeader_Override> will render the original component
          // wrapped in a div with an octocat picture above it.
          EmailPasswordSignInHeader_Override: ({
            DefaultComponent,
            ...props
          }) => {
            return <div className="text-black">Surplusmap</div>;
          },
        }}
      >
        {getRoutingComponent(PreBuiltUIList)}
      </ThirdpartyEmailPasswordComponentsOverrideProvider>
    ))
  ),
  {
    ssr: false,
  }
);

export default function Auth(): JSX.Element {
  useEffect(() => {
    if (canHandleRoute(PreBuiltUIList) === false) {
      SuperTokens.redirectToAuth({
        show: "signin",
        redirectBack: false,
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>SuperTokens 💫</title>
        <link
          href="//fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SuperTokensComponentNoSSR />
      </main>
    </div>
  );
}
