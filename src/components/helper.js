export function formattedDate(dateString) {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.toLocaleString("en-US", { month: "long" });
	const year = date.getFullYear();

	const suffix = ["th", "st", "nd", "rd"][Math.min(day % 10, 3)] || "th";

	return `${day}${suffix} ${month}, ${year}`;
}

