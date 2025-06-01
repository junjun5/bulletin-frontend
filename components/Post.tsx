"use client";
import type { postDataType } from "@/app/types/types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPostLike } from "@/app/actions/actions"
import { useState, useEffect } from "react";

interface postDataProps {
	postItem: postDataType;
}

export const Post = ({ postItem }: postDataProps) => {
	const { id, user_id, content, created_at, updated_at } = postItem;
	const [ likeNumber, setLikeNumber ] = useState<number>(0);
	// console.log(id)
	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(id)
				const data = await getPostLike(id);
				setLikeNumber(data)
			} catch (error) {
				console.error('Error fetching likes:', error);
				setLikeNumber(0);
			}
		};
		fetchData();
	}, [id]);

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>postIdは、{id}</CardTitle>
				<CardTitle>user_idは、{user_id}</CardTitle>
			</CardHeader>
			<CardContent>
				<div>
					<p>{content}</p>
				</div>
				<Badge>
					Like: {likeNumber}
				</Badge>
			</CardContent>
		</Card>
	);
};