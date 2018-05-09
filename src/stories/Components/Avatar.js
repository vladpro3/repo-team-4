import React from "react";
import {storiesOf} from "@storybook/react";
import Avatar from "../../../src/components/Avatar/Avatar";

export default storiesOf("Avatar", module)
    .add("Standart Avatar", () => ([
        <Avatar key={1} size='small'/>,
        <Avatar key={2} size='medium'/>,
        <Avatar key={3}/>,
    ]))
    .add("Avatar with url props", () => ([
        <Avatar key={4}
            url={"https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409"}/>
    ]));
