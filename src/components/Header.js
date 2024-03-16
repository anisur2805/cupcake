'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";
function Header() {
	const pathname = usePathname()
	return (
		<div className=" bg-gray-500 py-3">
			<div className="max-w-7xl text-white mx-auto px-4 text-3xl flex justify-between items-center">
				<h1><Link href={"/"}>CukCuk</Link></h1>
				<ul className="flex gap-x-3">
					<li>
						<Link className={`text-[20px] hover:text-white active:text-white ${pathname === '/' ? 'text-white' : 'text-gray-300 '}`} href="/">Home</Link>
					</li>
					<li>
						<Link className={`text-[20px] hover:text-white active:text-white ${pathname === '/about' ? ' text-white' : 'text-gray-300'}`} href="/about">About</Link>
					</li>
					<li>
						<Link className={`text-[20px] hover:text-white active:text-white ${pathname === '/blog' ? ' text-white' : 'text-gray-300 '}`} href="/blog">Post</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
