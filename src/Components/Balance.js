import '../Styles/Balance.css'
import {useSelector} from "react-redux";
export default function Balance() {
    const amount = useSelector(state => state.amount)
    return(
        <>
            <div id="balance">
                Your Balance : {amount} $
            </div>
        </>
    )
}