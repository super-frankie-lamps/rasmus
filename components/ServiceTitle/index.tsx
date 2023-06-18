import { FC } from "react"
import { BookMeetingBtn, Container } from "@components/common"
import Header from "@components/Header"
import { AText, Box, Section } from "@components/uikit"
import { serviceList } from "@data"
import styles from "./index.module.css"

interface ServiceTitleProps {
   id: string;
}

const ServiceTitle: FC<ServiceTitleProps> = ({ id }) => {
   const currentService = serviceList.find(({ id: serviceId }) => serviceId === id);
   const { name } = currentService || {};
   return (
      <Section justify="center" className={styles.wrapper}>
         <Container>
            <Box className={styles.listWrapper} justify="between" direction="column">
               <Header/>
               <Box direction="column">
                  <Box bottom="xl">
                     <AText color="-color2" font="bold" size="xxxxl">{name}</AText>
                  </Box>
                  <BookMeetingBtn />
               </Box>
            </Box>
         </Container>
      </Section>
   )
}

export default ServiceTitle