import React from "react";
import {storiesOf} from "@storybook/react";
import {Spinner} from "../../../src/components/Loaders/Spinner/Spinner";

export default storiesOf("Spinner", module)
    .add("Spinner", () => ([
        <Spinner key={1}/>,
    ]));
