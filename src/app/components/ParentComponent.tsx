import ChildComponent from "./ChildComponent"

const ParentComponent = () => {

    const fullName = "Hamza"
    const address = "Karachi ,Pakistan"
    const rollNumber = 496839

    const fullName2 = "Haroon waheed"
    const address2 = "karachi,pakistan"
    const rollNumber2 = 498765

    const favouriteDish ="biryani"
    const favouriteColor = "Black"
  return (

    <div>
<ChildComponent
 name={fullName}
 address={address}
 rollNO={rollNumber}
/>

<ChildComponent
name={fullName2}
address={address2}
rollNO={rollNumber2}
/>

<ChildComponent
fvtdish={favouriteDish}
fvtclr ={favouriteColor}
/>

    </div>
  )
}

export default ParentComponent
