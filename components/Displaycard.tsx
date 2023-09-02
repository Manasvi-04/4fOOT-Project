
import OutCard from "./Outcard"
const DisplayCard = () => { 
    return(
      <div>

      
        <div className="border-b-[1px] border-b-zinc-600 py-10 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-12"> 
            <OutCard
        image={require("/Images/dog1.jpg")}
        title="Donation"
        subTitle="Hope for Paws"
        btnText="Donate"
      />
      <OutCard
        image={require("/Images/dog2.jpg")}
        title="Dog Boarding"
        subTitle="Home for Paws"
        btnText="Shelter"
      />
      <OutCard
        image={require("/Images/dog3.jpg")}
        title="Medical Care"
        subTitle="Care for Paws"
        btnText="Treatments"
      />
      <OutCard
        image={require("/Images/dog4.jpg")}
        title="Food"
        subTitle="Food for Paws"
        btnText="Fooding"
      />
      <OutCard
        image={require("/Images/dog6.jpg")}
        title="Injured Dogs"
        subTitle="Love for Paws"
        btnText="Care"
      />
      <OutCard
        image={require("/Images/dog5.jpg")}
        title="Sponsor a homeless dog"
        subTitle="Home for Paws"
        btnText="Services"
      />
        </div>
        
        </div>
    )
}
export default DisplayCard

