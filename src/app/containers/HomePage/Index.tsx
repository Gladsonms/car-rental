import React from "react";
import Styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import Navbar from "../../components/Navbar";
import AboutUs from "./aboutus";
import BookingSteps from "./bookingstep";

import TopSection from "./topSection";

export const PageContainer = Styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
    </PageContainer>
  );
}
