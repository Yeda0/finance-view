
import styled from "styled-components/native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'




export const Container = styled.View`
    flex: 1;
    background-color: red;
`

export const Header = styled.View`
    height: ${RFPercentage(25)}px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const UserProfile = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}PX;
    border-radius: 50px;
`

export const HeaderTitle = styled.Text`
    font-family: ${({theme})=> theme.fonts.medium};
    font-size: ${RFValue(16)}px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(30)}px;

`

export const HighLightCardList = styled.ScrollView`
    background-color: blue;
    padding-left: 7px;
    width: 100%;
`

export const Teste = styled.View`

`