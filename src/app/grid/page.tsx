export default function Grid() {
  return (
    <div className="h-screen bg-black p-4">
      <div className="container p-2 mx-auto">
        <div className="grid grid-cols-4 gap-4 p-5">
          <div className="p-4 bg-blue-500 col-span-2">
            1
          </div>
          <div className="p-4 bg-blue-500">
            1
          </div>
          <div className="p-4 bg-blue-500">
            1
          </div>
          <div className="p-4 bg-blue-500">
            1
          </div>
          1
        </div>

        <hr className="my-4" />

        <div className="grid grid-cols-6 gap-4">
          <div className="bg-orange-400 col-start-2 col-span-4 p-6">
            1
          </div>
          <div className="col-start-1 col-end-3 bg-orange-400 p-6">
            2
          </div>
          <div className="bg-orange-400 p-6">
            3
          </div>
          <div className="col-start-1 bg-orange-400 p-6">
            4
          </div>
        </div>

        <hr className="my-4" />

        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="bg-green-400 p-6 row-span-2">
            1
          </div>
          <div className="bg-green-400 p-6">
            2
          </div>
          <div className="bg-green-400 p-6 row-span-2">
            3
          </div>
          <div className="bg-green-400 p-6 ">
            4
          </div>
        </div>
      </div>
    </div>
  );
}
