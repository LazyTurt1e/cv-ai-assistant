# CV AI Assistant

CV AI Assistant is a web application that analyses CVs using Google's Gemini AI. Users can upload a PDF file, select an analysis filter and receive AI generated feedback.

## Features

* Upload PDF CV files
* Generate a summary of the CV
* Show strengths and weaknesses
* Suggest growth opportunities
* Calculate an overall CV score
* AI powered analysis using Gemini API

## Technologies

### Frontend

* React
* Vite

### Backend

* Node.js
* Express

### Libraries

* Multer
* PDF Parse
* Google Gemini API
* Cors
* Dotenv

## Installation

Clone the repository:

```bash
git clone https://github.com/LazyTurt1e/cv-ai-assistant.git
cd cv-ai-assistant
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

You can obtain an API key from Google AI Studio.

## Running the project

Start the backend:

```bash
npm run server
```

Start the frontend:

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:5173
```

The backend runs on:

```text
http://localhost:3000
```

## Usage

1. Upload a PDF CV.
2. Select an analysis filter.
3. Click **Analyseer CV**.
4. Wait for the AI analysis.
5. Review the generated feedback.

Available filters:

* Résumé
* Voor/Nadelen
* Potentiële Groei
* CV Score

## Notes

The application currently supports PDF files.

Gemini API usage may be limited by free-tier quotas. During periods of high demand, responses may temporarily be unavailable.

The project includes support for switching between Gemini models, although free-tier limitations may still apply.

## Future improvements

Possible future improvements include:

* DOCX support
* Database integration
* Authentication system
* Analysis history
* Improved formatting of AI responses

## Author

Mark Simoniants

Software Development MBO4
2026
