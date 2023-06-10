import Image from "next/image"
import { Container } from "@components/common"
import { AText, Box, CustomLink, Section } from "@components/uikit"
import briefcase from "@public/assets/icons/briefcase.svg"
import contacts from "@public/assets/icons/contacts.svg"
import booking from "@public/assets/icons/booking.svg"
import styles from './index.module.css'
import Button from "@components/uikit/Button"
import Link from "next/link"

const serviceList = ['Anpartsselskab (ApS)', 'Aktieselskab (A/S)', 'Enkeltmandsvirksomhed (EMV/PMV)', 'Interessentskab (I/S)', 'Kommanditselskab(K/S)']

const ServiceList = () => {
   return (
      <Section justify="center" className={styles.wrapper}>
         <Container>
            <Box className={styles.listWrapper} direction="column">
               <Box justify="between" bottom="xxxl">
                  <AText font="semiBold" size="l" color="-color2">
                     <Link href="/" >Rasmus Albrechtsen</Link>
                  </AText>
                  <Box as="nav">
                     <Box as="ul" align="center">
                        <AText as="li" color="-color2" size="m" className={styles.item}>
                           <Link href="/">
                              <Image src={briefcase} alt="briefcase"/>Vores Ydelser
                           </Link>
                        </AText>
                        <AText as="li" color="-color2" size="m" className={styles.item}>
                           <CustomLink  href="#calendly">
                              <Image src={booking} alt="booking"/>Book the Meeting
                           </CustomLink>
                        </AText>
                        <AText as="li" color="-color2" size="m" className={styles.item}>
                           <CustomLink href="#footer">
                              <Image src={contacts} alt="contacts"/>Contacts
                           </CustomLink>
                        </AText>
                     </Box>
                  </Box>
               </Box>
               <Box justify="between">
                  <Box className={styles.title}>
                     <AText font="bold" size="xxxxl" color="-color2">Professionel og Hurtig Nedlukning af Virksomhed til Fast Pris</AText>
                  </Box>
                  <Box className={styles.list} direction="column">
                     <AText color="-color2" size="xl">Vi kan hjælpe med alle typer nedlukninger af:</AText>
                     <Box as="ul" direction="column" top="l">
                        {serviceList.map((value, i) => {
                           return (
                              <AText as="li" key={i} color="-color2" className={styles.serviceList}>    
                                 <Image src={briefcase} alt="briefcase" className={styles.icon}/>
                                 {value}
                              </AText>
                           ) 
                        })}
                     </Box>
                  </Box>
               </Box>
                  <Box>
                     <Button className={styles.btn}><Image src={booking} alt="booking" className={styles.icon}/>Book the meeting</Button>
                  </Box>
            </Box>
         </Container>
      </Section>
   )
}

export default ServiceList