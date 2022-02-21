export default function List({ props }) {
  return (
    <main className="bg-gray-200 flex rounded-lg py-4 shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] my-4">
      <div className="w-[100px] grid items-center justify-center">
        <img className="w-full h-full" src={props.img} alt="jacket" />
      </div>
      <div className="w-[260px] grid grid-rows-3 ml-3">
        <header>
          <h3 className="text-2xl font-semibold text">{props.text}</h3>
        </header>
        <main className="grid grid-cols-2">
          <div className="font-semibold flex items-center">
            <span className="text-gray-400">Size</span>
            <span className="text-secondary ml-1">XL</span>
          </div>
          <div className="font-semibold flex items-center">
            <span className="text-gray-400">Color</span>
            <span className="text-secondary ml-1">Blue</span>
          </div>
        </main>
        <footer className="text-xl font-semibold grid-flow-row items-center">
          <span className="text-secondary">
            ${props.price - props.discount},00
          </span>
          <span className="text-gray-400 ml-2 font-normal">x 02</span>
        </footer>
      </div>
    </main>
  );
}
