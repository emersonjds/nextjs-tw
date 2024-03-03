export default function PnetGrid() {
  return (
    <div className="h-screen w-screen p-4 bg-black">
      <div className="bg-green-500 h-1/6">Header</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 h-4/6">
        <div className="bg-blue-500">Esquerda</div>
        <div className="bg-yellow-500">Direita</div>
      </div>
      <div className="bg-red-500 h-1/6">Footer</div>
    </div>
  );
}
