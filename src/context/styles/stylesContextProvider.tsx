import { useState } from "react";

import { StylesContext } from "./stylesContext";
import styles from "../../styles/index.module.scss"
import { activeStylesProps } from "../../interfaces/activeStyles";

const INITIAL_STATE:activeStylesProps = { 
    ["isVisible"]: styles.display_none,
    ["closeCartAnimation"]: "",
    ["openCartAnimation"]: "",
    ["addProductAlert"]: "",
    ["deleteProductAnim"]: "",
}

interface props{
    children: JSX.Element | JSX.Element[],
}

export const ContextStylesProvider = ({ children }:props) =>{
    const [activeStyles, setActiveStyles] = useState<activeStylesProps>(INITIAL_STATE)

    return(
        <StylesContext.Provider value={{ activeStyles, setActiveStyles }}>
            { children }
        </StylesContext.Provider>
    )
}
