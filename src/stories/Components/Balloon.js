import React from "react";
import {storiesOf} from "@storybook/react";
import {Balloon} from "../../../src/components/Balloon/Balloon";

export default storiesOf("Balloon", module)
    .add("Incoming", () => ([
        <Balloon key={1} message={"Тестовое входящее сообщение"}
            typeMessage={true}
            dateMessage={new Date()}/>,

    ]))
    .add("Outgoing", () => ([
        <Balloon key={2} message={"Тестовое исходящее сообщение"}
            typeMessage={false}
            dateMessage={new Date()}/>
    ]));
