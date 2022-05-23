import * as React from "react"
import styled from "styled-components"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import FlutterBuild from "../components/builds/FlutterBuild"

const IndexPage = () => (
  <Wrapper>
    <HeroWrapper>
      <CourseCard />
      <TextWrapper>
        <Logo src="/images/logos/react-logo.svg" alt="icon" />
        <Title>Build a web app with React Hooks</Title>
        <Caption>20 sections - 3 hours of videos</Caption>
        <Description>
          Learn how we build the new design code site with React Hooks
        </Description>
        <AuthorWrapper>
          <AuthorImage src="/images/avatars/Meng.png" alt="author" />
          <Caption>Taught by Meng To</Caption>
        </AuthorWrapper>
        <PurchaseButton />
        <SmallText>
          Purchase includes access to 30 courses. Over 80 hours of content,
          includng 12 hours for SwiftUI, IOS13, IOS14.
        </SmallText>
      </TextWrapper>
    </HeroWrapper>
    <FlutterBuild />
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;

  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 39px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const Title = styled.h1`
  max-width: 550px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-size: 15px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`

const SmallText = styled.p`
  max-width: 280px;
  font-style: normal;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`
