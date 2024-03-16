import Image from "next/image";
import Link from "next/link";
import { formattedDate } from "../helper";

async function Food() {
	const posts = await getPosts();
    const categories = await getPostCats();

	if (!Array.isArray(posts) || posts.length === 0) {
		return <div>No Food found!</div>;
	}

	return (
		<>
			{posts.map((post) => (
				<div key={post.id} className="group w-full relative">
					<Link href={`/blog/${post.id}`}>
						<Image
							src={post.fimg_url}
							alt={post.title.rendered}
							width={500}
							height={300}
                            className="w-full h-[300px] object-cover"
						/>
						<p className="absolute top-2 left-2 text-white bg-gray-500 p-2">Food</p>
						<h3 className="text-2xl font-bold absolute bottom-2 left-2 text-white transition-opacity opacity-0 group-hover:opacity-100">
							{post.title.rendered}
						</h3>
					</Link>
				</div>
			))}
		</>
	);
}

export default Food;

export async function getPosts() {
	// Fetch posts from an external API endpoint
	const res = await fetch(
		"https://anisurdev.info/wp-json/wp/v2/posts?per_page=3"
	);
	if (!res.ok) throw new Error("failed to fetch posts");
	return res.json();
}


export async function getPostCats() {
    const categoriesResponse = await fetch(
        "https://anisurdev.info/wp-json/wp/v2/categories"
    );
    if (!categoriesResponse.ok) {
        throw new Error("Failed to fetch categories");
    }
    const categoriesData = await categoriesResponse.json();
    return categoriesData;
}
