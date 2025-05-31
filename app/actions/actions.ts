import { threadDataType } from "@/app/types/types";
import { postDataType } from "@/app/types/types";

export async function getCategoryname(categoryId: number) {
  const response = await fetch(`http://localhost:3000/category/${categoryId}`, {
    cache: "no-store",
  });
  const categoryData = await response.json();
  return categoryData.name;
}

export async function getUsername(userId: number) {
  const response = await fetch(`http://localhost:3000/user/${userId}`, {
    cache: "no-store",
  });
  const userData = await response.json();
  return userData.email;
}
export async function getThreadData(){
	const response = await fetch("http://localhost:3000/thread",{
		cache: "no-store",
	});
	const threadsData: threadDataType[] = await response.json();
	return threadsData;
}

export async function getPost(threadId: number){
	const response = await fetch(`http://localhost:3000/thread/${threadId}/post`,{
		cache: "no-store",
	});
	const postData: postDataType[] = await response.json();
	return postData
}