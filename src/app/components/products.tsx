"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Products() {
	const router = useRouter();
	const [middleProduct, setMiddleProduct] = useState(3);

	const onStart = () => {
		document
			.getElementById("products-container")
			?.addEventListener("transitionend", (event) => {
				if (event.propertyName === "transform") {
					document
						.getElementById(`product${middleProduct}`)
						?.classList.add("transitioned");
				}
			});
	};

	useEffect(() => {
		document.getElementById("product3")?.classList.add("transitioned");
		setTimeout(() => {
			document.getElementById("cards-container")?.classList.remove("opacity-0");
		}, 300);
	}, []);

	useEffect(onStart);

	function calculatePosition(currentPosition: number): string {
		let temp: number = currentPosition - middleProduct + 3;

		if (temp < 1) {
			temp += 5;
		} else if (temp > 5) {
			temp -= 5;
		}

		if (currentPosition !== middleProduct && typeof document === "object")
			document
				.getElementById(`product${currentPosition}`)
				?.classList.remove("transitioned");

		return `product-${temp}`;
	}

	function moveBack() {
		if (middleProduct > 5) {
			setMiddleProduct(1);
		} else {
			setMiddleProduct(middleProduct + 1);
		}
	}

	function moveForward() {
		if (middleProduct < 1) {
			setMiddleProduct(5);
		} else {
			setMiddleProduct(middleProduct - 1);
		}
	}

	function handleClick(position: number, href: string) {
		if (middleProduct === position) {
			router.push(href);
		} else {
			setMiddleProduct(position);
		}
	}

	return (
		<div
			id="cards-container"
			className="pt-16 relative w-full flex justify-center items-center opacity-0 transition-opacity duration-500"
		>
			<div className="absolute md:p-0 h-screen w-screen flex justify-between items-end">
				<svg
					viewBox="0 0 198 841"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-28 sm:w-44 md:w-72 fill-primary"
				>
					<path d="M0 1584V0C261 619.689 266.983 957.542 0 1584Z" />
				</svg>
				<svg
					viewBox="0 0 198 841"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-28 sm:w-44 md:w-72 fill-primary"
				>
					<path d="M198 1584V0C-63.0002 619.689 -68.9828 957.542 198 1584Z" />
				</svg>
			</div>
			<div className="flex justify-center drop-shadow-[0_-5px_25px_rgba(0,0,0,0.25)]">
				<div className="absolute w-[4.5rem] h-[4.5rem] sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-full bg-secondary transform -translate-x-10 -translate-y-20 sm:-translate-x-20 sm:-translate-y-40 md:-translate-x-32 md:-translate-y-60" />
				<div className="absolute w-[4.5rem] h-[4.5rem] sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-full bg-secondary transform translate-x-10 -translate-y-20 sm:translate-x-20 sm:-translate-y-40 md:translate-x-32 md:-translate-y-60" />
				<div className="absolute w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full bg-primary transform -translate-y-24 sm:-translate-y-48 md:-translate-y-[17rem]" />
			</div>
			<div className="absolute h-full w-full flex justify-between items-center md:justify-center px-2 sm:px-4 drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]">
				<div
					onClick={moveBack}
					className="w-5 sm:w-10 transition-all transform md:-translate-x-[500px] drop-shadow-xl cursor-pointer"
				>
					<svg
						fill="none"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="stroke-dark dark:stroke-light hover:-translate-x-1 transition-transform absolute z-40"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5 8.25 12l7.5-7.5"
						/>
					</svg>
				</div>
				<div
					onClick={moveForward}
					className="w-5 sm:w-10 transition-all transform md:translate-x-[500px] drop-shadow-xl cursor-pointer"
				>
					<svg
						fill="none"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="stroke-dark dark:stroke-light hover:translate-x-1 transition-transform absolute z-40"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</svg>
				</div>
			</div>
			<div
				id="products-container"
				className="relative flex justify-center items-center h-[148px] sm:h-[296px] md:h-[444px]"
			>
				<div
					id="product1"
					onClick={() => handleClick(1, "/orange")}
					className={`${calculatePosition(
						1,
					)} absolute flex justify-center items-center`}
				>
					<Image
						src="/images/orange.webp"
						fill
						alt="Orange"
						className="object-cover image"
					/>
					<h2 className="shop-text text-nowrap">Orange Toes</h2>
				</div>
				<div
					id="product2"
					onClick={() => handleClick(2, "/cherry")}
					className={`${calculatePosition(
						2,
					)} absolute flex justify-center items-center`}
				>
					<Image
						src="/images/cherry.webp"
						fill
						alt="Cherry"
						className="object-cover image"
					/>
					<h2 className="shop-text text-nowrap">Cherry Toes</h2>
				</div>
				<div
					id="product3"
					onClick={() => handleClick(3, "/products")}
					className={`${calculatePosition(
						3,
					)} absolute flex justify-center items-center`}
				>
					<Image
						src="/images/poster.webp"
						fill={true}
						alt="Discount"
						className="object-cover image"
					/>
					<h2 className="shop-text text-nowrap">Shop Now</h2>
				</div>
				<div
					id="product4"
					onClick={() => handleClick(4, "/grape")}
					className={`${calculatePosition(
						4,
					)} absolute flex justify-center items-center`}
				>
					<Image
						src="/images/grape.webp"
						fill={true}
						alt="Grape"
						className="object-cover image"
					/>
					<h2 className="shop-text text-nowrap">Grape Toes</h2>
				</div>
				<div
					id="product5"
					onClick={() => handleClick(5, "/apple")}
					className={`${calculatePosition(
						5,
					)} absolute flex justify-center items-center`}
				>
					<Image
						src="/images/apple.webp"
						fill={true}
						alt="Apple"
						className="object-cover image"
					/>
					<h2 className="shop-text text-nowrap">Apple Toes</h2>
				</div>
			</div>
		</div>
	);
}
