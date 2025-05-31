export async function getUsername(userId: number) {
	const response = await fetch(`http://localhost:3000/user/${userId}`, {
		cache: "no-store",
	});
	const userData = await response.json();
	return userData.email;
}
