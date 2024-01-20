import styles from "./Flex.module.css";

export default function Flex() {
  return (
    <>
      <div className="flex h-screen w-full p-5 bg-black gap-2 flex-row-reverse">
        <div className="h-1/2 w-1/2  bg-red-500 border-4 flex ">
          <h1 className="text-bold size-5">1</h1>
        </div>

        <div className="h-1/2 w-1/2 bg-green-500 border-4">2</div>

        <div className="h-1/2 w-1/2 bg-yellow-400 border-4">3</div>
      </div>
    </>
  );
}
