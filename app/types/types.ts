export interface threadDataType {
	id: number;
	category_id: number;
	user_id: number;
	title: string;
	created_at: Date;
	updated_at: Date;
	// category    Category @relation(fields: [category_id], references: [id], onDelete: Cascade)
}

export interface postDataType {
	id: number;
	thread_id: number;
	user_id: number;
	content: string;
	created_at: Date;
	updated_at: Date;
}
