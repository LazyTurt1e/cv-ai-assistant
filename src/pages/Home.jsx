import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadPanel from "../components/UploadPanel";
import ResponseWindow from "../components/ResponseWindow";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
    const [filter, setFilter] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [aiResponse, setAiResponse] = useState("");

const analyzeCV = async () => {

    if (!selectedFile) {
        setAiResponse("Upload eerst een CV.");
        return;
    }

    if (!filter) {
        setAiResponse("Kies eerst een filter.");
        return;
    }

    try {

        const formData = new FormData();

        formData.append("cv", selectedFile);
        formData.append("filter", filter);

        const response = await fetch(
            "http://localhost:3000/analyze",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        setAiResponse(data.response);

    } catch (error) {

        console.error(error);

        setAiResponse(
            "Er is een fout opgetreden."
        );
    }
};

    return (
        <div className="page-container">
            <Navbar />

            <main className="main-content">
                <div className="hero-text">
                    <h2>CV-assistent met AI</h2>
                    <p>
                        Upload je CV en ontvang direct feedback,
                        samenvattingen en verbeterpunten.
                    </p>
                </div>

                <div className="content-wrapper">

                    <UploadPanel
                        filter={filter}
                        setFilter={setFilter}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        analyzeCV={analyzeCV}
                    />

                    <ResponseWindow
                        aiResponse={aiResponse}
                    />

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;