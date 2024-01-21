export default function Grid() {
  return (
    <div className="grid grid-cols-2 gap-2 h-screen w-full p-4 bg-black md:grid-cols-3 lg:grid-cols-4">
      <div className="bg-blue-500 p-3">1</div>
      <div className="bg-blue-500 p-3">2</div>
      <div className="bg-blue-500 p-3">3</div>
      <div className="bg-blue-500 p-3">4</div>
      <div className="bg-blue-500 p-3">5</div>
    </div>
  );
}
