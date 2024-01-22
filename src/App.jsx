import "./App.css";

function App() {

	return (

    <div className="flex justify-between">
        <div className="flex-col flex items-center  h-[100vh] w-[30%] p-5">
          <div className="flex justify-between w-[75%] ">
            <p className="font-medium text-xl  ">Selected Seats</p>
            <p className="font-medium text-xl  ">Price</p>
          </div>
      
          <div className="flex flex-col gap-2  mt-6 h-[100vh] w-[75%]">
            {/*This section is for showing the selected seats and price */}
          </div>
        </div>
      
        <div className="bg-black w-[70%] h-[100vh] flex flex-col  justify-center items-center ">
          <p className="text-white text-5xl mb-[80px] ">SEAT MATRIX </p>
      
          <div className="flex gap-4 flex-wrap w-[420px] h-[420px]">
            {/* Seat Matrix UI will be written here */}
          </div>
        </div>
    </div>
      
	);
}

export default App;
