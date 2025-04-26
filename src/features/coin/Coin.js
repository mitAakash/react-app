import { useSelector } from "react-redux";
function Coin(){
    const coin = useSelector((state)=> state.counter.counter)
    return (
        <div>
            <span>coin : {coin}</span>
        </div>
    )
}
export default Coin