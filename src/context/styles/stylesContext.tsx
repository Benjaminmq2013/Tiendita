import { createContext } from "react"
import { activeStylesProps } from "../../interfaces/activeStyles"

interface styleContextProps{
    activeStyles: activeStylesProps,
    setActiveStyles: React.Dispatch<React.SetStateAction<activeStylesProps>>
}


export const StylesContext = createContext<styleContextProps>({} as styleContextProps)