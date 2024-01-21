import styles from "./Flex.module.css";

export default function Flex() {
  return (
    <>
      {/* <div className="flex h-screen w-full p-5 bg-black gap-2 flex-row-reverse">
        <div className="h-1/2 w-1/2  bg-red-500 border-4 flex flex-none">1</div>

        <div className="h-1/2 w-1/2 bg-green-500 border-4">2</div>

        <div className="h-1/2 w-1/2 bg-yellow-400 border-4 flex-none">3</div>
      </div> */}

      {/* <div className="flex flex-col h-screen w-full bg-blue-400 p-5">
        <div>Header</div>
        <div className="flex flex-col md:flex-row bg-green-500 p-5 h-full w-full gap-4">
          <div className="bg-orange-600 basis-2/12">Sidebar</div>
          <div className="bg-pink-500 basis-8/12"> Main Content</div>
          <div className="bg-indigo-600 basis-2/12">Sidebar 2</div>
        </div>
      </div> */}

      {/* FLEX WRAP */}
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex flex-wrap w-full bg-pink-400 p-5 gap-3 justify-around items-center">
          <div className="border-solid border-2 w-32 h-32">1</div>
          <div className="border-solid border-2 w-32 h-32">2</div>
          <div className="border-solid border-2 w-32 h-32">3</div>
        </div>
      </div>
    </>
  );
}
