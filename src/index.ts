//read a pdf
import * as fs from "node:fs";
import pdf from "pdf-parse";

const parsePdf = (path: string) => {
	const dataBuffer = fs.readFileSync(
		"./Kalamazoo-Hybrid-Fire-Grill-Use-and-Care-Guide-North-America-English.pdf",
	);
	pdf(dataBuffer).then((data) => {
		console.log(data.text);
	});
};
