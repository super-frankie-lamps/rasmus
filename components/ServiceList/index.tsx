'use client'
import Image from "next/image"
import { BookMeetingBtn, Container } from "@components/common"
import { AText, Box, Section } from "@components/uikit"
import briefcase from "@public/assets/icons/briefcase.svg"
import Header from "@components/Header"
import { useMediaQuery } from "react-responsive"
import { MOBILE_QUERY } from "@constants"
import styles from './index.module.css'

const serviceList = ['Anpartsselskab (ApS)', 'Aktieselskab (A/S)', 'Enkeltmandsvirksomhed (EMV/PMV)', 'Interessentskab (I/S)', 'Kommanditselskab(K/S)']

const ServiceList = () => {
   const isMobile = useMediaQuery(MOBILE_QUERY)
   return (
      <Section justify="center" className={styles.wrapper}>
         <Container>
            <Box className={styles.listWrapper} direction="column">
               <Header />
               <Box justify="between" direction={isMobile ? 'column' : 'row'} bottom={isMobile ? 'xl' : ''}>
                  <Box className={styles.title}>
                     <AText font="bold" size={isMobile ? 'xxxl' : 'xxxxl'} color="-color2">Professionel og Hurtig Nedlukning af Virksomhed til Fast Pris</AText>
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
               <BookMeetingBtn />
            </Box>
         </Container>
      </Section>
   )
}

export default ServiceList