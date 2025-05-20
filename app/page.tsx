import Image from "next/image";
import BulletinCardList from "@/components/BulletinCardList";
import BulletinCard from "@/components/BulletinCard";
import { threadDataType } from "./types/types";

async function getThreadData(){
	const response = await fetch("http://localhost:3000/thread",{
		cache: "no-store",
	});
	const threadsData: threadDataType[] = await response.json();
	return threadsData;
}

export default async function Home() {
	const threadData = await getThreadData()
	console.log(threadData)

  return (
		<div>
		<main>
			<BulletinCardList threadData={threadData} />
		</main>
		<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/file.svg"
					alt="File icon"
					width={16}
					height={16}
				/>
				Learn
			</a>
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/window.svg"
					alt="Window icon"
					width={16}
					height={16}
				/>
				Examples
			</a>
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/globe.svg"
					alt="Globe icon"
					width={16}
					height={16}
				/>
				Go to nextjs.org →
			</a>
		</footer>
	</div>
  );
}
