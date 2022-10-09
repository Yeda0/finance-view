import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'
import theme from "../../global/styles/theme";

interface TypeProps {
    type : "up" | "down" | "total"
}


export const Container = styled.View<TypeProps>`
    
    margin-right: 10px;
    border-radius: 14px;
    width: ${RFValue(300)}px;
    height: ${RFValue(194)}px;


    background-color: ${({theme,type})=> {
        if(type === "up") {
            return theme.colors.income_card

        } else if( type === "down") {
            return theme.colors.outcome_card
        }
        else {
            return theme.colors.total_card
        }
    }
    };
`


export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 18px;
    align-items: center;

`

export const Amount = styled.Text`
    font-size: ${RFValue(32)}px;
    color: ${({theme})=> theme.colors.text_white};
    padding: 20px 18px;
    font-family: ${({theme})=> theme.fonts.medium};

`

export const Icon = styled(Feather)<TypeProps>`
     color: ${({theme})=> theme.colors.text_white};
     font-size: ${RFValue(30)}px;
`

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.text_white};
    font-size: ${RFValue(24)}px;
    font-family: ${({theme})=> theme.fonts.medium};
`

export const Shape = styled.View`

`
