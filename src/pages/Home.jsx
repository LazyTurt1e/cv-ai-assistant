import Navbar from "../components/Navbar";
import UploadPanel from "../components/UploadPanel";
import ResponseWindow from "../components/ResponseWindow";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
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
                    <UploadPanel />
                    <ResponseWindow />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;