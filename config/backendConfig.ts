import ThirdPartyEmailPasswordNode from "supertokens-node/recipe/thirdpartyemailpassword";
import SessionNode from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import { appInfo } from "./appInfo";
import { AuthConfig } from "../interfaces";

export let backendConfig = (): AuthConfig => {
    return {
        framework: "express",
        supertokens: {
            // this is the location of the SuperTokens core.
            connectionURI: "http://localhost:3567",
        },
        appInfo,
        // recipeList contains all the modules that you want to
        // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
        recipeList: [
            ThirdPartyEmailPasswordNode.init({
        override: {
          functions: (oI) => {
            return {
              ...oI,
              emailPasswordSignUpPOST: undefined,
            };
          },
        },
            }),
            SessionNode.init(),
            Dashboard.init(),
        ],
        isInServerlessEnv: true,
    };
};
