import Image from "next/image"
import { Container } from "@components/common"
import Header from "@components/Header"
import { AText, Box, Button, Section } from "@components/uikit"
import { FC } from "react"
import styles from "./index.module.css"
import booking from "@public/assets/icons/booking.svg"

const ServiceTitles: FC = () => {
   return (
      <Section justify="center" className={styles.wrapper}>
         <Container>
            <Box className={styles.listWrapper} direction="column">
               <Header/>
               <Box direction="column">
                  <Box bottom="xl">
                     <AText color="-color2" font="bold" size="xxxxl">Luk A/S</AText>
                  </Box>
                  <Box>
                     <Button className={styles.btn}><Image src={booking} alt="booking" className={styles.icon}/>Book the meeting</Button>
                  </Box>
               </Box>
            </Box>
         </Container>
      </Section>
   )
}

export default ServiceTitles