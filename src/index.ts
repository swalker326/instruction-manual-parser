import * as fs from "node:fs";
import * as path from "node:path";
import pdf from "pdf-parse";
import { AIService } from "./ai/AIService";
import { AnthropicAdapter } from "./ai/ClaudeAdapter.server";

const parsePdf = async (pathString: string) => {
	const p = path.resolve(pathString);
	const dataBuffer = fs.readFileSync(p);
	return await pdf(dataBuffer);
};

const generateInstructionManualHowTo = async (pdfPath: string) => {
	const data = await parsePdf(pdfPath);
	const aiService = new AIService(new AnthropicAdapter());
	const response = aiService.submitPrompt({ prompt: data.text }).then((response) => {
		console.log(response);
	});
};
const pdfPath =
	"./pdf/Kalamazoo-Hybrid-Fire-Grill-Use-and-Care-Guide-North-America-English.pdf";
generateInstructionManualHowTo(pdfPath);
