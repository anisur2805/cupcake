import Image from "next/image";
import Link from "next/link";
import { formattedDate } from "../helper";

async function PreviousPost() {
	const posts = await getPosts();
	const categories = await getPostCats();

	if (!Array.isArray(posts) || posts.length === 0) {
		return <div>No Food found!</div>;
	}

	return (
		<>
			{posts.map((post) => (
				<div key={post.id} className="group w-full relative">
					<Link
						href={`/blog/${post.id}`}
						className="flex flex-col sm:flex-row gap-3"
					>
						<Image
							src={post.fimg_url}
							alt={post.title.rendered}
							width={500}
							height={300}
							className="max-w-[360px] h-[500px] object-cover"
						/>
						<div>
							<p className="mb-2">Food</p>
							<h3 className="text-2xl font-bold ">
								{post.title.rendered}
							</h3>

                            <p>By {post.author_name} {formattedDate(post.date)}</p>

						</div>
					</Link>
				</div>
			))}
		</>
	);
}

export default PreviousPost;

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
