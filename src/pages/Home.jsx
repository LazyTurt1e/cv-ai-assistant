import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadPanel from "../components/UploadPanel";
import ResponseWindow from "../components/ResponseWindow";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
    const [filter, setFilter] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

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
                    />

                    <ResponseWindow
                        filter={filter}
                        selectedFile={selectedFile}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;