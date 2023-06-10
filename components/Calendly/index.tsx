'use client'
import { Container } from "@components/common"
import { AText, Box, Section } from "@components/uikit"
import { InlineWidget } from "react-calendly"
import styles from "./index.module.css"

const Calendly = () => {
   return (
      <Section id="calendly" className={styles.calendly} justify="center">
         <Container>
            <Box direction="column" align="center">
               <AText font="bold" size="xxl" align="center">Book op til 30 minutters gratis rådgivning om nedlukning af virksomhed:</AText>
               <Box top="xl" className={styles.calendlyWrapper}>
                  <InlineWidget url="https://calendly.com/konstantinmgeni/one-to-one?background_color=fdfcfc&text_color=151515&primary_color=0a6cf8&month=2023-06"/>
               </Box>
            </Box>
         </Container>
      </Section>
   )
}

export default Calendly