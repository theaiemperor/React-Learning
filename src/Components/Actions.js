import '../Styles/Actions.css'

export default function Actions() {
    return (
        <>
            <div id="container">
                <div id="message">
                    Click on buttons to increase or decrease the balance by 50$
                </div>
                <div id="buttons">
                    <button id="add" className="button">
                        Add
                    </button>
                    <button id="subtract" className="button">
                        Subtract
                    </button>
                </div>

            </div>
        </>
    )
}