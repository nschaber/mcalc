import {Context, createContext, ReactNode, useCallback, useState} from "react";
import {Entity} from "../model/Model.ts";
import bierburg from '../config/bierburg.json';
import megabar from '../config/megabar.json';
import {NavigateFunction, useNavigate} from "react-router-dom";

export interface ICalculatorContext {
    type: "mb" | "bb";
    name: "Megabar" | "Bierburg";
    total: number;
    given: number;
    centMode: boolean;
    setCentMode: (value: boolean) => void;
    directMode: boolean;
    setDirectMode: (value: boolean) => void;
    addValue: (value: number, product: boolean) => number;
    addGiven: (value: number, returns: boolean) => number;
    clear: () => void;
    abort: () => Promise<void>;
    productsCount: number;
    returnsCount: number;
    options: { returns: number, products: Array<Entity>};
}

interface IProps {
    type: "mb" | "bb";
    name: "Megabar" | "Bierburg";
    children: ReactNode;
}

export const CalculatorContext: Context<ICalculatorContext> = createContext({} as ICalculatorContext)

export const CalculatorProvider = ({type, name, children}: IProps) => {

    const [directMode, setDirectMode] = useState<boolean>(false);
    const [centMode, setCentMode] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0.0);
    const [given, setGiven] = useState<number>(0.0);
    const [returnsCount, setReturnsCount] = useState<number>(0);
    const [productsCount, setProductsCount] = useState<number>(0);
    const [options] = useState<{ returns: number, products: Array<Entity>}>(type == "bb" ? bierburg : megabar);
    const navigate: NavigateFunction = useNavigate()

    const addValue = useCallback((value: number, product: boolean) => {
        if(product) setProductsCount(productsCount + 1);
        setTotal(total + (centMode ? value * 0.1 : value));
        return total;
    }, [centMode, productsCount, total])

    const addGiven = useCallback((value: number, returns: boolean) => {
        if(returns) setReturnsCount(returnsCount + 1);
        setGiven(given + (centMode ? value * 0.1 : value));
        return given;
    }, [centMode, given, returnsCount])

    const clear = useCallback(() => {
        setTotal(0.0);
        setGiven(0.0);
        setProductsCount(0);
        setReturnsCount(0);
        setDirectMode(false);
        setCentMode(false);
    }, [])

    const abort = useCallback(async () => {
        clear();
        await navigate(`/${type}`)
    }, [clear, navigate, type])

    return (<CalculatorContext.Provider
        value={{
            type,
            name,
            total,
            given,
            directMode,
            setDirectMode,
            centMode,
            setCentMode,
            addValue,
            addGiven,
            clear,
            abort,
            productsCount,
            returnsCount,
            options
        }}>
        {children}
    </CalculatorContext.Provider>);

}