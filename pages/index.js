import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { StyledFish1, StyledFish2 } from "../components/Home/StyledFish";
import { HomeContainer } from "../components/Home/HomeContainer";
import { HomeMain } from "../components/Home/HomeMain";
import { HomePic } from "../components/Home/HomePic";
import { BigText, SmallText } from "../components/Home/HomeTexts";
import { HomeSection } from "../components/Home/HomeSection";
import {
  HomeCoral1
} from "../components/Home/HomeCoral";
import {
  StyledJellyFish1,
  StyledJellyFish2,
  StyledJellyFish3,
} from "../components/Home/HomeJellyfish";

export default function Home() {
  const ref = useRef(1);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [ref.current.offsetWidth]);

  const [xPosition, setXposition] = useState(0);
  const [width, setWidth] = useState(null);

  function catchX(e) {
    setXposition(e.nativeEvent.screenX);
  }
  let value = (xPosition - width / 2) / 9;

  return (
    
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomeMain onMouseMove={(e) => {
        catchX(e);
      }}>
      <HomeSection>
      <HomePic ref={ref}>
        <Image
          src="/background/sky.jpg"
          alt="Picture of the author"
          layout={"fill"}
        />
      </HomePic>
      <HomeContainer>
      <BigText>Welcome to my portfolio</BigText>
      <SmallText>here you can see some of my skills</SmallText>

      <HomeCoral1 value={value}>
        <Image
          src="/baloons/manWithThePhone.png"
          alt="Picture of coral"
          layout={"responsive"}
          height={550}
          width={550}
        />
      </HomeCoral1>

      <StyledJellyFish1 value={value}>
        <Image
          src="/baloons/ballon4.png"
          alt="Picture of coral"
          layout={"responsive"}
          height={150}
          width={150}
        />
      </StyledJellyFish1>
      <StyledJellyFish2 value={value}>
        <Image
          src="/baloons/ballon1.png"
          alt="Picture of coral"
          layout={"responsive"}
          height={50}
          width={50}
        />
      </StyledJellyFish2>
      <StyledJellyFish3 value={value}>
        <Image
          src="/baloons/ballon2.png"
          alt="Picture of coral"
          layout={"responsive"}
          height={200}
          width={200}
        />
      </StyledJellyFish3>
      </HomeContainer>
      </HomeSection>
      <HomeSection style={{backgroundColor: 'coral'}}><BigText>Section 3</BigText></HomeSection>  
      <HomeSection style={{backgroundColor: 'blue'}}><BigText>Section 4</BigText></HomeSection>  
      <HomeSection style={{backgroundColor: 'green'}}><BigText>Section 5</BigText></HomeSection>    
      </HomeMain>
      
    </>
  );
}
