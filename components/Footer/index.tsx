'use client'
import Image from "next/image"
import { FC } from "react"
import { Container } from "@components/common"
import { AText, Box } from "@components/uikit"
import mail from "@public/assets/icons/mail.svg"
import phone from "@public/assets/icons/phone.svg"
import map from "@public/assets/icons/map.svg"
import inn from "@public/assets/icons/inn.svg"
import { useMediaQuery } from "react-responsive"
import { MOBILE_QUERY } from "@constants"
import styles from "./index.module.css"

const Footer: FC = () => {
   const isMobile = useMediaQuery(MOBILE_QUERY)
   return (
      <Box id="footer" as="footer" justify="center" className={styles.wrapper}>
         <Container>
            <Box direction="column" className={styles.content}>
               <AText font="semiBold" size="xl">Legal Office ApS</AText>
               <Box top="xl" justify="start" direction={isMobile ? 'column' : 'row'}>
                  <Box align="center" className={styles.item}>
                     <Image src={mail} alt="mail" className={styles.icon}/>
                     <AText font="semiBold" size="l"><a href="mailto:ral@paragraffen.dk">ral@paragraffen.dk</a></AText>
                  </Box>
                  <Box align="center" className={styles.item}>
                     <Image src={phone} alt="phone" className={styles.icon}/>
                     <AText font="semiBold" size="l"><a href="tel:+4561483456">+45 61 48 34 56</a></AText>
                  </Box>
                  <Box align="center" className={styles.item}>
                     <Image src={map} alt="map" className={styles.icon}/>
                     <AText font="semiBold" size="l"><a target="_blank" href="https://goo.gl/maps/FzY8XCru2LzZqVrt7">Hindegade 6, 1303 København K</a></AText>
                  </Box>
                  <Box align="center" className={styles.item}>
                     <Image src={inn} alt="tax number" className={styles.icon}/>
                     <AText font="semiBold" size="l">CVR-nr. 39407108</AText>
                  </Box>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}
export default Footer