import PreviousPost from "./post";

function PreviousPosts() {
	return (
		<div className="max-w-7xl mx-auto px-4 mb-5">
			<h2 className="text-3xl font-bold mb-5">Previous Post</h2>
			<div className="flex flex-col gap-5">
				<PreviousPost />
			</div>
		</div>
	);
}

export default PreviousPosts;
