import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios
			.get("https://dummyjson.com/products")
			.then((response) => {
				console.log(response.data.products);
				setProducts(response.data.products);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	}, []);
	return (
		<div className="w-screen h-auto flex flex-col justify-start items-center gap-[1rem] overflow-y-auto">
			<h1 className="text-5xl text-primary-blue font-semibold">Products</h1>
			<div className="flex flex-row flex-wrap justify-center items-center gap-4 w-full ">
				{products.map((product) => (
					<div
						key={product.id}
						className="border p-4 m-2 w-[16vw] flex flex-col justify-center items-center gap-3 font-montserrat min-h-[25vh] hover:scale-105 ">
						<img
							src={product.image}
							alt={product.title}
							className="w-full h-auto"
						/>
						<h2 className="text-l font-semibold text-center">
							{product.title}
						</h2>
						{/* <p className="text-xs ">{product.description}</p> */}
						<p>Price: ${product.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
