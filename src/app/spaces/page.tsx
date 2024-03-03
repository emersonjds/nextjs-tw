export default function Space() {
  return (
    <>
      {/* <div className="flex min-h-screen">
        <div className="w-1/5 bg-green-400">Navbar</div>
        <div className="w-4/5 bg-red-500">Content</div>
      </div> */}
      <div className="flex min-h-screen space-x-4">
        <div className="w-1/5 bg-green-400">Navbar</div>
        <div className="w-4/5 bg-red-500">Content</div>
      </div>
    </>
  );
}

// sempre que utilizar m-h-screen ou h-screen, o componente pai deve ter a classe min-h-screen, dessa forma o componente filho irá ocupar toda a tela

// quando utilizo space-x- é criado um espaço entre os componentes no eixo x
// quando utilizo space-y- é criado um espaço entre os componentes no eixo y
