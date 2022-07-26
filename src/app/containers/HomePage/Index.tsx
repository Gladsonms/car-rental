import React from 'react'
import Styled from "styled-components";
import tw from 'twin.macro';
import { Navbar } from '../../components/Navbar';

export const PageContainer =Styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`;

export function HomePage(){
    return <PageContainer>
    <Navbar/>
    </PageContainer>
}
