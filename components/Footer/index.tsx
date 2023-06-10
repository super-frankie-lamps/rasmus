import Image from "next/image"
import { Container } from "@components/common"
import { AText, Box, Section } from "@components/uikit"
import styles from "./index.module.css"
import mail from "@public/assets/icons/mail.svg"
import phone from "@public/assets/icons/phone.svg"
import map from "@public/assets/icons/map.svg"

const Footer = () => {
   return (
      <Box id="footer" as="footer" justify="center" className={styles.wrapper}>
         <Container>
            <Box direction="column" className={styles.content}>
               <AText font="semiBold" size="xl">Kontaktoplysninger</AText>
               <Box top="xl" justify="start">
                  <Box direction="column" className={styles.mailInfo}>
                     <Image src={mail} alt="mail" className={styles.icon}/>
                     <AText font="semiBold" size="xl">ral@paragraffen.dk</AText>
                  </Box>
                  <Box direction="column" className={styles.phoneInfo}>
                     <Image src={phone} alt="phone" className={styles.icon}/>
                     <AText font="semiBold" size="xl">+45 61 48 34 56</AText>
                  </Box>
                  <Box direction="column">
                     <Box className={styles.icon}>
                        <Image src={map} alt="map"/>
                        <AText className={styles.mapInfo} font="semiBold" size="xl">Legal Office ApS</AText>
                     </Box>
                     <AText font="semiBold" size="xl">Hindegade 6, 1303 København K</AText>
                  </Box>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}
export default Footer