"use client"
import { postDataType } from "@/app/types/types";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";

interface postDataProps {
	postItem: postDataType
}

export const Post = ({postItem}: postDataProps) => {
	const { id, user_id, content, created_at, updated_at } = postItem;
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
			</CardContent>

		</Card>
	)
}
