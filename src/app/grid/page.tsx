export default function Grid() {
  return (
    <div className="grid grid-cols-4 gap-4 h-full w-full">
      <div className="bg-red-500 col-span-4 h-1/3">1</div>
      <div className="bg-red-600 col-span-2 h-2/3">2</div>
      <div className="bg-blue-500 col-span-2 h-2/3">3</div>
      <div className="bg-green-500 col-span-4 1/3">4</div>
    </div>
  );
}
