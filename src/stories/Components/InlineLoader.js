import React from "react";
import {storiesOf} from "@storybook/react";
import {InlineLoader} from "../../../src/components/Loaders/InlineLoader/InlineLoader";

export default storiesOf("InlineLoader", module)
    .add("InlineLoader", () => ([
        <InlineLoader key={1}/>,
    ]));
