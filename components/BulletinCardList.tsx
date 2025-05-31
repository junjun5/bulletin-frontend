import BulletinCard from "@/components/BulletinCard";
import type { threadDataType } from "../app/types/types";

interface threadDataListProps {
	threadData: threadDataType[];
}

const BulletinCardList = ({ threadData }: threadDataListProps) => {
	return (
		<div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
			{threadData.map((data: threadDataType) => (
				<BulletinCard key={data.id} threadItem={data} />
			))}
		</div>
	);
};

export default BulletinCardList;
