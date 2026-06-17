import "../styles/ResponseWindow.css";

function ResponseWindow({
    filter,
    selectedFile,
}) {

    let response = "Stap 1: Upload een CV.\nStap 2: Kies een filter.";

    if (selectedFile && filter === "resume") {
        response =
            `This is a summary of ${selectedFile.name}.

The candidate has experience in software development,
problem solving and teamwork.`;
    }

    if (selectedFile && filter === "pros-cons") {
        response =
            `Strengths:
• Good technical background
• Problem solving skills
• Experience with programming

Weaknesses:
• Could provide more projects
• Could improve certifications`;
    }
    
    if (selectedFile && filter === "growth") {
    response =
        `Potentiële Groei:

• Verdiepen in React en moderne frontend frameworks
• Meer praktijkprojecten toevoegen
• Certificeringen behalen
• Bijdragen aan open-source projecten`;
    }

    return (
        <div className="response-window">
            <div className="response-content">
                {response}
            </div>
        </div>
    );
}

export default ResponseWindow;