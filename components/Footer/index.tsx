import Image from "next/image"
import { FC } from "react"
import { Container } from "@components/common"
import { AText, Box, Section } from "@components/uikit"
import mail from "@public/assets/icons/mail.svg"
import phone from "@public/assets/icons/phone.svg"
import map from "@public/assets/icons/map.svg"
import styles from "./index.module.css"

const Footer: FC = () => {
   return (
      <Box id="footer" as="footer" justify="center" className={styles.wrapper}>
         <Container>
            <Box direction="column" className={styles.content}>
               <AText font="semiBold" size="xl">Kontaktoplysninger</AText>
               <Box top="xl" justify="start">
                  <Box direction="column" className={styles.item}>
                     <Image src={mail} alt="mail" className={styles.icon}/>
                     <AText font="semiBold" size="xl"><a href="mailto:ral@paragraffen.dk">ral@paragraffen.dk</a></AText>
                  </Box>
                  <Box direction="column" className={styles.item}>
                     <Image src={phone} alt="phone" className={styles.icon}/>
                     <AText font="semiBold" size="xl"><a href="tel:+4561483456">+45 61 48 34 56</a></AText>
                  </Box>
                  <Box direction="column">
                     <Box className={styles.icon}>
                        <Image src={map} alt="map"/>
                        <AText className={styles.mapInfo} font="semiBold" size="xl">Legal Office ApS</AText>
                     </Box>
                     <AText font="semiBold" size="xl"><a target="_blank" href="https://goo.gl/maps/FzY8XCru2LzZqVrt7">Hindegade 6, 1303 København K</a></AText>
                  </Box>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}
export default Footer