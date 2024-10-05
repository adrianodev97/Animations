const fs = require("node:fs");
const path = require("node:path");

function capitalize(str) {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const pagesDir = path.join(__dirname, ".");

fs.readdir(pagesDir, (err, files) => {
	if (err) {
		return console.error("Unable to scan directory:", err);
	}

	const animations = files
		.filter((file) => fs.statSync(path.join(pagesDir, file)).isDirectory())
		.map((dir) => {
			const indexPath = path.join(pagesDir, dir, "index.html");
			if (fs.existsSync(indexPath)) {
				return {
					name: capitalize(dir.replace(/-/g, " ")),
					link: path.join(dir, "index.html"),
				};
			}
		})
		.filter(Boolean);

	fs.writeFileSync("animations.json", JSON.stringify(animations, null, 2));
});
