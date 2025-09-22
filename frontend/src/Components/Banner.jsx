import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";

const bannerData = [
	{
		id: 1,
		title: "Welcome to the best online market place on the Internet.",
		description:
			"Discover a wide range of products and services at unbeatable prices. Shop now and enjoy exclusive deals and discounts.",
		image:
			"https://res.cloudinary.com/de4y9ztvj/image/upload/carousel1_c6zafe.png",
	},
	{
		id: 2,
		title: "Welcome to the Internet.",
		description: "Have a look around.",
		image:
			"https://res.cloudinary.com/de4y9ztvj/image/upload/v1747667255/carousel3_sbgwob.png",
	},
];

const Banner = () => {
	const [current, setCurrent] = useState(0);
	const [isHover, setIsHover] = useState(false);
	const intervalRef = useRef(null);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % bannerData.length);
	};
	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + bannerData.length) % bannerData.length);
	};

	useEffect(() => {
		if (!isHover) {
			intervalRef.current = setInterval(() => {
				nextSlide();
			}, 3000);
		}
		return () => clearInterval(intervalRef.current);
	}, [isHover]);

	return (
		<div className="w-full h-90vh grid place-items-center p-3">
			<div
				className="relative w-[95vw] h-[60vh] aspect-video object-cover flex flex-col gap-2"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				style={{
					backgroundImage: `url(${bannerData[current].image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}>
				<div className="max-w-[100%] h-full text-white bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-start gap-2 py-5 px-[3rem] font-montserrat">
					<h2 className="text-[2.5rem] w-102 font-bold ">
						{bannerData[current]?.title}
					</h2>
					<p>{bannerData[current]?.description}</p>
				</div>

				<button
					onClick={prevSlide}
					className="absolute left-[-20px] top-[50%] translate-y-[-50%] h-[50px] w-[50px] bg-alice-blue rounded-full border-3 border-primary-blue cursor-pointer  grid place-items-center hover:bg-primary-blue hover:text-alice-blue">
					<RiArrowDropLeftFill size={40} />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-[-20px] top-[50%] translate-y-[-50%] h-[50px] w-[50px] bg-alice-blue rounded-full border-3 border-primary-blue cursor-pointer grid place-items-center  hover:bg-primary-blue hover:text-alice-blue">
					<RiArrowDropRightFill size={40} />
				</button>

				<div className="flex flex-row gap-3 mx-3 absolute bottom-[10px] left-[50%]">
					{bannerData.map((_, index) => (
						<span
							key={index}
							onClick={() => setCurrent(index)}
							className="w-[12px] h-[12px] rounded-full cursor-pointer"
							style={{
								background:
									current === index ? "white" : "rgba(255, 255, 255, 0.5)",
								transition: "background 0.3s",
							}}></span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Banner;
