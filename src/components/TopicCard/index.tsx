import React from "react";
import { Container, SubTitle, Title } from "./styles";


interface TopicProps {
    title : string,
    subTitle : string
}

export function TopicCard({title, subTitle} : TopicProps) {
    return(
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    )
}