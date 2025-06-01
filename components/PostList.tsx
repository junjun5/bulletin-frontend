"use client";
import type { postDataType } from "@/app/types/types";
import { Post } from "@/components/Post";
import { useState, useEffect } from "react";

interface postDataProps {
	postData: postDataType[];
}

export const PostList = ({ postData = [] }: postDataProps) => {
	const [posts, setPosts] = useState<postDataType[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = postData;
				setPosts(Array.isArray(data) ? data : []);
			} catch (error) {
				console.error("Error fetching posts:", error);
				setPosts([]);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [postData]);
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="grid lg:gred-cols-3 px-4 py-4 gap-4">
			{posts.map((data: postDataType) => (
				<Post key={data.id} postItem={data}/>
			))}
		</div>
	);
};
