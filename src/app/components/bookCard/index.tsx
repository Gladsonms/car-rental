import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import { Marginer } from "../marginer";
import "react-calendar/dist/Calendar.css";
import SCREENS from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-2
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;
const DateCalender = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  left: 0;
  top: 2em;


  @media(min-width : ${SCREENS.md}{
    top:3.5em;
    left:-2em;
  })
`;

function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalenderOpen, setStartCalenderOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalenderOpen, setReturnCalenderOpen] = useState(false);

  const toggleStartDateCalender = () => {
    setStartCalenderOpen(!isStartCalenderOpen);
    if (isReturnCalenderOpen) setReturnCalenderOpen(false);
  };

  const toggleReturnDateCalender = () => {
    setReturnCalenderOpen(!isReturnCalenderOpen);
    if (isStartCalenderOpen) setStartCalenderOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          {" "}
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalender}>Pick up Date</Name>
        <SmallIcon>
          {isStartCalenderOpen ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </SmallIcon>
        {isStartCalenderOpen && (
          <DateCalender value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator>
        <ItemContainer>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <Name onClick={toggleReturnDateCalender}>Return Date</Name>
          <SmallIcon>
            {isReturnCalenderOpen ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </SmallIcon>
          {isReturnCalenderOpen && (
            <DateCalender value={returnDate} onChange={setReturnDate as any} />
          )}
        </ItemContainer>
      </LineSeperator>
      <Marginer direction="horizontal" margin="4em" />
      <Button text="Book your Ride" className="none" theme="none" />
    </CardContainer>
  );
}

export default BookCard;
