const CustomDropDown = () => {
  return ( <>
           <div className="relative ">
            <div className="p-2">
              <button>Dropdown</button>
            </div>
            <div className="absolute w-sm top-16">
              <div className="space-y-2">
                <div className="flex flex-col border-b">
                  <h5>Deribew Shimelis</h5>
                  <p>deribew@gmail.com</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="">icon</div>
                    <div className="">setting</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="">icon</div>
                    <div className="">setting</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="">icon</div>
                    <div className="">setting</div>
                  </div>
                </div>
                <div className="">
                  Logout
                </div>
              </div>
            </div>

           </div>
           <div className="fixed h-screen w-full">
           </div>
  </> );
}
 
export default CustomDropDown;