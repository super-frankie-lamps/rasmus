import { FC } from "react"
import ServiceDescription from "@components/ServiceDescription"
import ServiceTitle from "@components/ServiceTitle"

interface ServiceProps {
   params: {
      id: string
   }
}

const Service: FC<ServiceProps> = ({ params }) => {
   return (
      <>
         <ServiceTitle id={params.id}/>
         <ServiceDescription id={params.id}/>
      </>
   )
}

export default Service