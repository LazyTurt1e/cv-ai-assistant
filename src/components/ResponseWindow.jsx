import "../styles/ResponseWindow.css";

function ResponseWindow({ aiResponse }) {
    return (
        <div className="response-window">
            <div className="response-content">
                {aiResponse ||
                    "Stap 1: Upload een CV.\nStap 2: Kies een filter.\nStap 3: Klik op Analyseer CV."}
            </div>
        </div>
    );
}

export default ResponseWindow;