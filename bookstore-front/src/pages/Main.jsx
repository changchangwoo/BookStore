import { useState } from "react";
import { css, jsx } from "@emotion/react";
import SearchEngine from "../components/SearchContainer/SearchContainer";
import MainSlider from "../components/MainSlider/MainSlider";
import ContentSection from "../components/ContentSection/ContentSection";
import LargeCard from "../components/Card/LargCard";
import SmallCard from "../components/Card/SmallCard";

function Main() {
  return (
    <>
      <MainSlider />
      <SearchEngine />
      <ContentSection title="베스트 셀러" backgroundColor="white">
      <LargeCard/>
      <LargeCard/>
      </ContentSection>
      <ContentSection title="신간 안내" backgroundColor="rgba(0,0,0,0)">
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
      </ContentSection>
      <ContentSection title="장르별" backgroundColor="white">
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
      </ContentSection>
      <ContentSection title="내가 방금 본 책" backgroundColor="rgba(0,0,0,0)">
      <LargeCard/>
      <LargeCard/>
      </ContentSection>
    </>
  );
}

export default Main;
