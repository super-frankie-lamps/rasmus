'use client'
import Image from "next/image";
import { Container } from "@components/common";
import { AText, Box, Section } from "@components/uikit";
import clsx from "clsx";
import { FC } from "react";
import rasmus from "@public/assets/images/rasmus.jpg";
import { useMediaQuery } from "react-responsive";
import { MOBILE_QUERY } from "@constants";
import styles from "./index.module.css";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
   const isMobile = useMediaQuery(MOBILE_QUERY)
   return(
      <Section justify="center" direction={isMobile ? 'column' : 'row'} className={styles.wrapper}>
         <Image src={rasmus} alt="" className={styles.mobPhoto}/>
         <Container>
            <Box direction="column" className={styles.content}>
               <AText as="h2" color="-color3" font="bold" size={isMobile ? 'xxl' : 'xxxl'}>Rasmus Albrechtsen</AText>
               <Box top="l" bottom="l" direction="column">
                  <a className={clsx([styles.externalLink, styles.emailLink])} href="mailto:ral@paragraffen.dk">ral@paragraffen.dk</a>
                  <a className={styles.externalLink} href="tel:+4561483456">+45 61 48 34 56</a>
               </Box>
               <Box bottom="m">
                  <AText color="-color2">Rasmus er direktør i Lukvirksomhed.dk og er uddannet dansk advokat med speciale i nedlukning af virksomheder.
                  </AText>
               </Box>
               <Box bottom="m">
                  <AText color="-color2">
                  Bl.a. har Rasmus assisteret med frivillig nedlukning af mere end 250 selskaber/virksomheder samt konkursbehandlet mere end 50 selskaber.
                  </AText>
               </Box>
               <Box bottom="m">
                  <AText color="-color2">
                  Rasmus har i flere år rådgivet virksomhedsejere, ledelser og kreditorer om nedlukning af virksomheder.
                  </AText>
               </Box>
               <AText color="-color2">
               Desuden har han undervist på Københavns Universitet i bl.a. konkurs og nedlukning af selskaber.
               </AText>
            </Box>
         </Container>
      </Section>
   )
}
export default AboutMe;