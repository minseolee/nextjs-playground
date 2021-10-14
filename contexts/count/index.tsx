import { createContext, useState } from "react";

const CountContext = createContext({
    count: 0,   // 근접한 Provider 가 없을 때에만 사용되는 기본값이다.
    plusCount: () => {},    // 졸리고 배고파요
});

interface Props {
    children: JSX.Element | JSX.Element[];
    destination: number;
}

const CountProvider = ({ children, destination }: Props): JSX.Element => {
    const [count, setCount] = useState(10);

    const plusCount = ():void => {
        setCount(destination);
    };

    return (
        <CountContext.Provider
            value={{
                count,
                plusCount,
            }}>
        {children}
        </CountContext.Provider>
    );
}

export { CountContext, CountProvider };