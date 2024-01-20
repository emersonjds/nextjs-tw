import styles from "./Flex.module.css";

export default function Flex() {
  return (
    <>
      {/* <div className="flex h-screen w-full p-5 bg-black gap-2 flex-row-reverse">
        <div className="h-1/2 w-1/2  bg-red-500 border-4 flex flex-none">1</div>

        <div className="h-1/2 w-1/2 bg-green-500 border-4">2</div>

        <div className="h-1/2 w-1/2 bg-yellow-400 border-4 flex-none">3</div>
      </div> */}

      <div className="flex flex-col h-screen w-full bg-blue-400 p-5">
        <div>Header</div>
        <div className="flex bg-green-500">
          <div className="bg-pink-500"> Main Content</div>
          <div className="bg-orange-600">Sidebar</div>
        </div>
      </div>
    </>
  );
}
