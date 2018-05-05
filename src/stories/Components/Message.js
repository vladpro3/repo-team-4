import React from "react";
import {storiesOf} from "@storybook/react";
import {Message} from "../../../src/components/Message/Message";

export default storiesOf("Messages", module)
    .add("Outgoing/incoming", () => ([
        <Message key={1} isMyMessage={true} message={{
            message: "Тестовое исходящее сообщение",
            created_at: new Date()
        }}/>,
        <Message key={2} isMyMessage={false} message={{
            message: "Тестовое входящее сообщение",
            created_at: new Date()
        }}/>,
    ]));
