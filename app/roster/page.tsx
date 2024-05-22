import { wrestlers } from "@/data/wrestlers"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Image from "next/image"
import NavMenu from "@/components/NavMenu"

const Roster = () =>{
  return (
    <>
      <NavMenu />
    <h1 className="text-4xl font-bold text-red-500 py-32 text-center">Roster</h1>
    <CardContainer className="grid grid-cols-3 gap-4">
       
        <CardBody className="flex flex-col">
        {wrestlers.map(({id, name, image}) =>(
        <div key={id}>
          <CardItem translateZ={"50"} className="text-2xl font-bold text-neutral-700 dark:text-white">
            {name}
          </CardItem>
          <CardItem translateZ={"100"} className="w-full mt-4">
            <Image src={image} alt={name} width={300} height={300}/>
          </CardItem>
        </div>
       ))}  
        </CardBody>
      </CardContainer>
    </>
  )
}

export default Roster
