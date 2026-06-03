import "../styles/UploadPanel.css";

function UploadPanel() {
    return (
        <div className="upload-panel">
            <button className="upload-btn">
                Upload CV
            </button>

            <p>FileName.pdf</p>

            <select>
                <option>Filter</option>
                <option>Résumé</option>
                <option>Voor/Nadelen</option>
            </select>
        </div>
    );
}

export default UploadPanel;