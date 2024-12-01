/* eslint-disable @typescript-eslint/no-explicit-any */


const ChildComponent = (props : any) => {
  
  return (
    <div className=" border-2 border-purple-900 mb-2 p-2 rounded-md">
<h1 className="text-lg sm:text-xl md:text-4xl text-center font-semibold text-blue-700 p-1">
  {props.name}
</h1>

<h1 className="text-lg sm:text-xl md:text-4xl text-center font-semibold text-green-700 p-1">
  {props.address}
</h1>

<h1 className="text-lg sm:text-xl md:text-4xl text-center font-semibold text-black p-1">
  {props.rollNO}
</h1>

<h1 className="text-lg sm:text-xl md:text-4xl text-center font-semibold text-blue-700 p-1">
  {props.fvtdish}
</h1>

<h1 className="text-lg sm:text-xl md:text-4xl text-center font-semibold text-black  p-1">
  {props.fvtclr}
</h1>
    </div>
  )
}

export default ChildComponent



