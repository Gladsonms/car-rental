import React from 'react'
import Styled from "styled-components";
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Navbar } from '../../components/Navbar';
import { TopSection } from './topSection';

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
    <TopSection/>
    <BookCard />
    </PageContainer>
}
