import "../styles/UploadPanel.css";

function UploadPanel({
    filter,
    setFilter,
    selectedFile,
    setSelectedFile,
    analyzeCV,
}) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
        }
    };

    return (
        <div className="upload-panel">

            <label className="upload-btn">
                Upload CV
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    hidden
                />
            </label>

            <p>
                {selectedFile
                    ? selectedFile.name
                    : "No file selected"}
            </p>

            <select
                id="filter-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="" disabled>
                    Kies een filter
                </option>

                <option value="resume">
                    Résumé
                </option>

                <option value="pros-cons">
                    Voor/Nadelen
                </option>

                <option value="growth">
                    Potentiële Groei
                </option>
            </select>

            <button
                className="analyze-btn"
                onClick={analyzeCV}
                disabled={!selectedFile || !filter}
            >
                Analyseer CV
            </button>

        </div>
    );
}

export default UploadPanel;