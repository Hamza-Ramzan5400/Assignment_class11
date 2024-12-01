import Image from "next/image";
import corolla from "../../../public/corolla.jpg";
import HondaCity from "../../../public/Honda_City.jpg";
import Suzuki from "../../../public/Suzuki_Alto.png";
import kiaPicanto from "../../../public/Picanto.png";


const ArrayMap = () => {
  const carName = [
    { carName: "toyota", carPrice: 500000, carReviews: 6253, carPicture: corolla },
    { carName: "Honda", carPrice: 600000, carReviews: 6266, carPicture: HondaCity },
    {carName: "KiaPicanto",carPrice: 450000,carReviews: 45666,carPicture: kiaPicanto},
    { carName: "suzuki", carPrice: 650000,carReviews: 56457, carPicture: Suzuki },
  ];

  return (
     
    <div className="bg-slate-100 flex gap-4 flex-wrap justify-center">

      {carName.map((veh) => {
          
        return (

        <div key={veh.carName}>
          

<div className="flex flex-col justify-center items-center bg-white h-72 w-56 border-2 border-purple-900 my-1 rounded-lg shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <Image src={veh.carPicture} alt="car" width={500} height={500} />

            <h3 className="text-xl text-blue-600 font-semibold text-center cursor-pointer"> Model:{veh.carName}</h3>

            <h4 className="text-lg font-semibold text-green-600">PKR:{veh.carPrice} </h4>

            <h4 className="font-semibold">Reviews:{veh.carReviews}</h4>

          </div>

        </div>
        );
      })}
    </div>
  );
};

export default ArrayMap;
