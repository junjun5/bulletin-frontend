import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {threadDataType} from "../app/types/types";

interface threadDataProps {
	threadItem: threadDataType
}

async function getUsername(userId: number) {
  const response = await fetch(`http://localhost:3000/user/${userId}`, {
    cache: "no-store",
  });
  const userData = await response.json();
  return userData.email;
}
async function getCategoryname(categoryId: number) {
  const response = await fetch(`http://localhost:3000/category/${categoryId}`, {
    cache: "no-store",
  });
  const categoryData = await response.json();
  return categoryData.name;
}

const BulletinCard = async ({threadItem}: threadDataProps) => {
	const { id, title, user_id, category_id, created_at } = threadItem;
	const useremail = await getUsername(user_id);
	const categoryname = await getCategoryname(category_id);
	
	return (
		<Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Posted by: {useremail} • Category ID: {categoryname}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
				<Link href={`/thread/${id}`} className ="text-blue-500">Read More</Link>
      </CardFooter>
    </Card>
	)
}

export default BulletinCard
