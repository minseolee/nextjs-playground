import Image from "next/image";
import {useEffect, useState} from "react";

const dummyUrls = [
    'https://dummyimage.com/600x400/000/fff',
    'https://dummyimage.com/600x400/000/0011ff',
]

const Main = () => {
    const [imageURLState, setImageURLState] = useState(0);

    useEffect(() => {
        window.setInterval(() => {
            if (imageURLState === 0) setImageURLState(1);
            if (imageURLState === 1) setImageURLState(0);
        }, 500);
    }, []);

    return (
        <div>
            <Image src={dummyUrls[imageURLState]} width={600} height={400} />
        </div>
    );
}

export default Main;