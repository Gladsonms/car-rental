import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";

const TopSectionContainer=styled.div`
min-height:400px;
margin-top:6em;
${tw`
w-full
max-w-screen-2xl
flex
justify-between
pl-3
pr-3
lg:pl-12 
lg:pr-12
`}`
const LeftContainer =styled.div`
${tw`
w-1/2
flex
flex-col
`}
`

const RightContainer =styled.div`
${tw`
w-1/2
flex
flex-col
relative
mt-20
`}
`

const Slogon = styled.div`
${tw`
font-bold
text-2xl
xl:text-6xl
sm:text-3xl
md:text-5xl
lg:font-black
md:font-extrabold
text-black
mb-4
sm:leading-snug
lg:leading-normal
xl:leading-relaxed
`}
`

const Description = styled.p`
${tw`
text-xs
lg:text-sm
xl:text-lg
sm:max-h-full
overflow-hidden
max-h-12
text-gray-800
`}
`

const BlobContainer = styled.div`
width:20em;
height:10em;
position:absolute;
top-9em;
z-index:-1;
transform:rotate(-30deg);

img {
    width:100%
    height:auto
    max-height:max-content;
}
@media(min-width:${SCREENS.sm}){
    width:40em;
    max-height:10em;
    right:-9em
    top-16em;
    transform:rotate(-25deg);
}
@media(min-width:${SCREENS.lg}){
    width:50em;
    max-height:30em;
    right:-7em
    top-15em;
    transform:rotate(-25deg);
}
@media(min-width:${SCREENS.xl}){
    width:70em;
    max-height:30em;
    right:-15em
    top-25em;
    transform:rotate(-20deg);
}
`
const StandaloneCar= styled.div`
width:auto;
height:10em;
right:-6em;
position:absolute;

img{
    width:auto
    height:100%
    max-width:fit-content;
}
@media(min-width:${SCREENS.sm}){
    height:16em
    right:-6em;
    top-6em;
}
@media(min-width:${SCREENS.lg}){
    height:21em
    right:-8em;
    top-9m;
}
@media(min-width:${SCREENS.xl}){
    height:30em
    right:-13em;
    top-6em;
}
`
export function TopSection(){
    return <TopSectionContainer>
    <LeftContainer>
        <Slogon>
            Rent the best quality cars with us
        </Slogon>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam cupiditate, minus commodi officiis aperiam. Pariatur at sed sapiente, rem magni consectetur nesciunt? Hic voluptatibus nam molestiae, odio culpa quasi.
        </Description>
    </LeftContainer>
    <RightContainer>
        <BlobContainer>
            <img src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
        <img src={MclarenCarImg}/>
        </StandaloneCar>
    </RightContainer>
    </TopSectionContainer>

}