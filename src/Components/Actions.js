import '../Styles/Actions.css'
import {useDispatch} from "react-redux";
import {actionCreators} from "../state/index"
import {bindActionCreators} from "redux";

export default function Actions() {
    const dispatch = useDispatch();
    const {subtract} = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <div id="container">
                <div id="message">
                    Click on buttons to increase or decrease the balance by 50$
                </div>
                <div id="buttons">

                    {/* First Method */}
                    <button id="add" className="button"
                            onClick={() => {
                                dispatch(actionCreators.add(50))
                            }}>
                        Add
                    </button>

                    {/* Second Method */}
                    <button id="subtract" className="button"
                            onClick={() => {
                                subtract(50)
                            }}>
                        Subtract
                    </button>
                </div>

            </div>
        </>
    )
}