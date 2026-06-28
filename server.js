import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import multer from "multer";
import { PDFParse } from "pdf-parse";
import fs from "fs";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    dest: "uploads/",
});

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
    res.send("Server works!");
});

app.post("/analyze", upload.single("cv"), async (req, res) => {

    try {

        const filter = req.body.filter;

        const dataBuffer = fs.readFileSync(
            req.file.path
        );

        const parser = new PDFParse({

            data: dataBuffer,

        });

        const pdfData =
            await parser.getText();

        const text =
            pdfData.text;

        await parser.destroy();

        let prompt = "";

        switch (filter) {

            case "resume":

                prompt = `
Je bent een recruiter.

Maak een korte professionele samenvatting.

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

Conclusie:

CV:

${text}
`;

                break;

            case "growth":

                prompt = `
Je bent een carrièrecoach.

Analyseer dit CV.

Geef:

Verbeterpunten

Groeikansen

Aanbevelingen

CV:

${text}
`;

                break;

                case "score":

prompt = `

Je bent een recruiter.

Analyseer dit CV.

Geef uitsluitend:

Technische vaardigheden:
/10

Werkervaring:
/10

Presentatie:
/10

Potentieel:
/10

Algemene score:
/10

Korte toelichting.

CV:

${text}

`;

break;

            default:

                return res.status(400).json({

                    success: false,

                    response:
                        "Ongeldige filter.",

                });

        }

        const models = [

            "gemini-2.5-flash",

            "gemini-2.0-flash",

            "gemini-2.0-flash-lite",

        ];

        for (const model of models) {

            try {

                const response =
                    await ai.models.generateContent({

                        model,

                        contents:
                            prompt,

                    });

                return res.json({

                    success: true,

                    response:
                        response.text,

                    modelUsed:
                        model,

                });

            }

            catch {

                continue;

            }

        }

        return res.status(503).json({

            success: false,

            response:

                "AI is momenteel druk bezet.\n\nProbeer later opnieuw.",

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            response:

                "Er is een fout opgetreden.",

        });

    }

});

app.listen(3000, () => {

    console.log(

        "Server running on port 3000"

    );

});