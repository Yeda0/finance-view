import styled from "styled-components/native";

import {Feather} from '@expo/vector-icons'

import {RFValue} from 'react-native-responsive-fontsize'


export const Container = styled.View`

    width: ${RFValue(86)}px;
    height: ${RFValue(86)}px;
    border-radius: 14px;

    background-color: ${({theme})=> theme.colors.text_white};
    

`