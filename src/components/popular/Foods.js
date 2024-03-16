import Food from "./Food";

function Foods() {
	return (
		<div className="max-w-7xl mx-auto px-4 mb-5 my-8">
			<h2 className="text-3xl font-bold mb-5">Popular From Food</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
				<Food />
			</div>
		</div>
	);
}

export default Foods;
