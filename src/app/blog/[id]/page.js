"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Post({ params }) {

	const [postData, setPostData] = useState(null);

	async function fetchPostData(id) {
		try {
			const response = await fetch(
				`https://anisurdev.info/wp-json/wp/v2/posts/${id}`
			);
			if (!response.ok) {
				throw new Error("Failed to fetch post");
			}
			const postData = await response.json();
			setPostData(postData);
		} catch (error) {
			console.error(error);
		}
	}

	fetchPostData(params.id);

	if (!postData) {
		return (
			<div className="max-w-7xl mx-auto px-4 mb-5 py-8">
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<>
			<div className="px-4 mb-5 py-8 bg-slate-200">
				<h1 className="my-5 text-2xl font-bold text-black text-center">
					{postData.title.rendered}
				</h1>
			</div>
			<div className="max-w-7xl mx-auto px-4 mb-5 py-8">
				<Image
					src={postData.fimg_url}
					alt={postData.title.rendered}
					width={500}
					height={300}
					className="w-full h-auto object-cover mb-4"
				/>
				<div
					className="prose"
					dangerouslySetInnerHTML={{
						__html: postData.content.rendered,
					}}
				/>
			</div>
		</>
	);
}
