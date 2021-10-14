import { CountProvider } from "../../../contexts/count";
import {CountLabel} from "../../../components/countLabel";
import {PlusButton} from "../../../components/plusButton";

function Main(): JSX.Element {
    return (
        <CountProvider destination={3}>
            <CountLabel />
            <PlusButton />
        </CountProvider>
    )
}

export default Main;