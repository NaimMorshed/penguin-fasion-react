import { useState, useEffect } from "react";

export default function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main>
      <h1 className="my-4 text-4xl font-bold text-center">Products API</h1>
      <section className="bg-global p-10 grid grid-cols-5">
        {data.map((data, index) => (
          <div className="m-3 bg-white rounded-md shadow-md p-6">
            <section className="w-full mb-8">
              <span className="text-gray-600 text-left text-sm font-medium">{data.category}</span>
            </section>
            <section className="w-full h-72 flex justify-items-center items-center mb-3">
              <img className="h-full w-full" src={data.image} alt="img" />
            </section>
            <section className="w-full flex justify-items-center items-center mb-3">
              <span className="text-2xl text-black font-bold">{data.title}</span>
            </section>
            {/* <section className="w-full my-3">
              <span className="text-md text-left font-medium text-gray-600">{data.description}</span>
            </section> */}
            <section className="w-full grid grid-cols-2">
              <span className="font-bold text-3xl text-red-600">${data.price}</span>
              <span className="font-medium text-green-600 text-sm ml-1 bg-gray-300 rounded-full px-2">{data.rating.rate}</span>
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}
