import Link from "next/link";
function Header() {
	return (
		<div className=" bg-gray-500 py-3">
			<div className="max-w-7xl text-white mx-auto px-4 text-3xl flex justify-between items-center">
				<h1><Link href={"/"}>CukCuk</Link></h1>
				<ul className="flex gap-x-3">
					<li>
						<Link className="text-gray-300 text-[20px] hover:text-white active:text-white" href="/">Home</Link>
					</li>
					<li>
						<Link className="text-gray-300 text-[20px] hover:text-white active:text-white" href="/about">About</Link>
					</li>
					<li>
						<Link className="text-gray-300 text-[20px] hover:text-white active:text-white" href="/blog">Post</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
