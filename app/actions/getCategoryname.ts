export async function getCategoryname(categoryId: number) {
	const response = await fetch(`http://localhost:3000/category/${categoryId}`, {
		cache: "no-store",
	});
	const categoryData = await response.json();
	return categoryData.name;
}
