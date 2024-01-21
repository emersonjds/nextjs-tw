export default function Pnet() {
    return (
        <>
            <div className="w-screen h-screen bg-black p-4 flex flex-col">
                <div className="h-1/6 w-full bg-green-500">Header</div>
                {/* Content */}
                <div className="h-4/6 w-full flex flex-col md:flex-row lg:flex-row bg-red-500">
                    {/* Esquerda */}
                    <div
                        className="h-full w-full md:w-1/3 lg:w-1/3 bg-blue-500"
                    >
                        Esquerda
                    </div>
                    {/* Direita */}
                    <div
                        className="h-full w-full md:w-2/3 lg:w-2/3 bg-yellow-500"
                    >
                        Direita
                    </div>
                </div>
                <div className="h-1/6 bg-green-500">Footer</div>
            </div>
        </>
    )
}