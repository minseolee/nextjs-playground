import { useContext } from "react";
import { CountContext } from "../contexts/count";

export const CountLabel = () => {
    const { count } = useContext(CountContext);
    return <div>{count}</div>;
};