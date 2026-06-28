import "../styles/ResponseWindow.css";

function ResponseWindow({

    aiResponse,

    loading,

}) {

    let response =

        "Stap 1: Upload een CV.\n" +

        "Stap 2: Kies een filter.\n" +

        "Stap 3: Klik op Analyseer CV.";

    if (loading) {

        response =

            "CV wordt geanalyseerd...\n\nEven geduld.";

    }

    if (

        aiResponse &&

        !loading

    ) {

        response = aiResponse;

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