import React from "react";
import { 
    Container,
    Header,
    Amount,
    Icon,
    Title,
    Shape
 } from "./styles";




interface HighLightCardProps {
    title : string,
    amount : string,
    type : "up" | "down" | "total"

}

const icon = {
    up : "arrow-up-circle",
    down : "arrow-down-circle",
    total : "dollar-sign"
}

export function HighLightCard({title,amount,type} : HighLightCardProps) {
    return(
        <Container type={type}>
            <Header>
                <Title>{title}</Title>
                <Icon name={icon[type]}/>
            </Header>

            <Amount>{amount}</Amount>

            <Shape></Shape>
        </Container>
    )
}