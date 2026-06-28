import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeText(text, filter) {
    let prompt = "";

    switch (filter) {
        case "resume":
            prompt = `
Je bent een HR-specialist.

Maak een professionele samenvatting van dit CV.

CV:
${text}
`;
            break;

        case "pros-cons":
            prompt = `
Je bent een recruiter.

Analyseer dit CV.

Geef:

Sterke punten:
- ...

Zwakke punten:
- ...

CV:
${text}
`;
            break;

        case "growth":
            prompt = `
Je bent een carrièrecoach.

Analyseer dit CV.

Geef verbeterpunten en groeikansen.

CV:
${text}
`;
            break;

        default:
            prompt = text;
    }

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
}