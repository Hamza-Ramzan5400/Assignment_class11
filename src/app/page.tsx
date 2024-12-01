import ArrayMap from "./components/ArrayMap";
import ParentComponent from "./components/ParentComponent";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-2">
<ParentComponent/>
<h1 className="text-2xl lg:text-4xl text-center font-semibold text-purple-800 mb-4 underline ">Featured Newcars</h1>
<ArrayMap/>
    </div>
  );
}
