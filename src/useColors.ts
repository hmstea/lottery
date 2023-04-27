import {useEffect, useState} from "react";
import {getColors} from "./util";

function UseColors() {
    const [allColor, setAllColor] = useState<string[]>([]);

    useEffect(()=>{
        setAllColor(getColors(45));
    },[]);



    return allColor;
}

export default UseColors;