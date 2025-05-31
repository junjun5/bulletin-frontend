"use client"
import React, { useEffect, useState } from 'react'
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
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { getUsername } from "@/app/actions/actions"
import { getCategoryname } from "@/app/actions/actions"

interface threadDataProps {
	threadItem: threadDataType
}

const BulletinCard = ({threadItem}: threadDataProps) => {
	const { id, title, user_id, category_id, created_at } = threadItem;
	const router = useRouter();
	const [useremail, setUseremail] = useState<string>('');
  const [categoryname, setCategoryname] = useState<string>('');
	useEffect(() => {
    const fetchData = async () => {
      const email = await getUsername(user_id);
      const category = await getCategoryname(category_id);
      setUseremail(email);
      setCategoryname(category);
    };
    fetchData();
  }, [user_id, category_id]);
	const deleteThread = async (threadId: number) => {
		try {
			const response = await fetch(`http://localhost:3000/threaddelete/${threadId}`, {
				method:"DELETE",
			});
			if (response.ok) {
				router.refresh();
			}
		} catch (error) {
			console.error(error);
		}
	}
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
				<Button 
					className="bg-red-500 text-white"
					onClick={() => deleteThread(id)}
				>Delete</Button>
      </CardFooter>
    </Card>
	)
}

export default BulletinCard
