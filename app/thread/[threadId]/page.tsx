import React from 'react'
import { threadDataType } from '@/app/types/types'
import { PostList } from '@/components/PostList'
import { getPost } from '@/app/actions/actions'
import Link from 'next/link'


async function getDetailThread(threadId: number){
	const response = await fetch(`http://localhost:3000/thread/${threadId}`,{
		cache: "no-store",
	});
	const threadDetailData: threadDataType = await response.json();
	return threadDetailData;
}

const threadDetailPage = async({ params }: { params: { threadId: number } }) => {
	const parameter = await params;
	const threadDetailData = await getDetailThread(parameter.threadId);
	const { title, category_id, created_at, updated_at, user_id } = threadDetailData;
	const postData = await getPost(parameter.threadId);
	// const postData = await getPostData(parameter.threadId);
	return (
		<div className="mx-auto max-w-4xl my-8">
			<div className="mb-8">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-sm text-gray-500">{`カテゴリ: ${category_id}`}</p>
				<p className="text-sm text-gray-500">{`作成日: ${created_at}`}</p>
				<p className="text-sm text-gray-500">{`更新日: ${updated_at}`}</p>
				<p className="text-sm text-gray-500">{`ユーザー: ${user_id}`}</p>
			</div>
			<PostList postData={postData}/>
			<div>
				<Link
					className="bg-black text-xl mx-2 py-2 px-4 text-white rounded-md font-medium"
					href={`/thread/${parameter.threadId}/create`}
				>
					Create Post
				</Link>
				<Link href={"/"} className="bg-blue-500 mx-2 text-white text-xl font-bold px-4 py-2 rounded-md">Home</Link>
			</div>
			<div className="mb-8">
			</div>
		</div>
	)
}

export default threadDetailPage
