import React from "react";
import { ActionButton } from "../../components/ActionButton";
import { HighLightCard } from "../../components/HighLightCard";
import { TopicCard } from "../../components/TopicCard";
import { 
    Container,
    Header,
    HeaderTitle,
    HighLightCardList,
    Icon,
    UserProfile ,
    Teste
} from "./styles";

export function Dashboard(){ 
  return(
    <Container>
      <Header>
        <Icon name="menu"></Icon>
        <HeaderTitle>Home</HeaderTitle>
        <UserProfile source={{uri : 'https://i.pinimg.com/564x/16/0e/4b/160e4b9e75c90145e578be4273d4f8eb.jpg'}}/>
      </Header>

      <HighLightCardList 
        horizontal 
        howsHorizontalScrollIndicator={false}
      >
        <HighLightCard title="Entradas" amount="R$ 15.000,00" type="up" />
        <HighLightCard title="Entradas" amount="R$ 15.000,00" type="down" />
        <HighLightCard title="Entradas" amount="R$ 15.000,00" type="total" />
      </HighLightCardList>
            
            

      <TopicCard title="Featured" subTitle="See all"/>

      
            
           
    </Container>
  )
}