import styles from "./Flex.module.css";

export default function Flex() {
  return (
    <>
      <div className="flex h-screen w-full p-5 bg-black gap-2">
        <div className="h-1/2 w-1/2  border-solid border-4 flex items-center justify-center">
          <h1 className="text-bold size-5">1</h1>
        </div>

        <div className="h-1/2 w-1/2 border-solid border-4">2</div>

        <div className="h-1/2 w-1/2 border-solid border-4">3</div>
      </div>
    </>
  );
}
