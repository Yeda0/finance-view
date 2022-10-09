import styled from "styled-components/native";
import {RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`   
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 14px;
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${({theme})=> theme.fonts.medium};
    font-size: ${RFValue(16)}px;

`

export const SubTitle = styled.Text`
     font-family: ${({theme})=> theme.fonts.regular};
`