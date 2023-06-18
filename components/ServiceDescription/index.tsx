import { FC } from "react";
import { Container } from "@components/common"
import { Section } from "@components/uikit"
import { Aktieselskab, Anpartsselskab, EnkeltmandsvirkSomhed, Interessentskab, Kommanditselskab } from "@components/serviceDescriptions";
import SideBar from "@components/SideBar";
import styles from './index.module.css'

interface ServiceDescriptionProps {
   id: string;
}

const serviceDescriptionMap: { [key: string]: FC } = {
   'anpartsselskab': Anpartsselskab,
   'aktieselskab': Aktieselskab,
   'enkeltmandsvirk-somhed': EnkeltmandsvirkSomhed,
   'interessentskab': Interessentskab,
   'kommanditselskab': Kommanditselskab
}

const ServiceDescription: FC<ServiceDescriptionProps> = ({ id }) => {
   const ServiceDescriptionComp = serviceDescriptionMap[id] || Anpartsselskab;

   return (
      <Section justify="center" className={styles.wrapper}>
         <Container>
            <ServiceDescriptionComp />
            <SideBar />
         </Container>
      </Section>
   )
}

export default ServiceDescription