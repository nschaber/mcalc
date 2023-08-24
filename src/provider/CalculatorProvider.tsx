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
    addValue: (value: number, product: boolean) => number;
    addGiven: (value: number, returns: boolean) => number;
    clear: () => Promise<void>;
    abort: () => Promise<void>;
    productsCount: number;
    finish: () => Promise<void>;
    returnsCount: number;
    options: {products: Array<Entity>};
}

interface IProps {
    type: "mb" | "bb";
    name: "Megabar" | "Bierburg";
    children: ReactNode;
}

export const CalculatorContext: Context<ICalculatorContext> = createContext({} as ICalculatorContext)

export const CalculatorProvider = ({type, name, children}: IProps) => {

    const [centMode, setCentMode] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0.0);
    const [given, setGiven] = useState<number>(0.0);
    const [returnsCount, setReturnsCount] = useState<number>(0);
    const [productsCount, setProductsCount] = useState<number>(0);
    const [options] = useState<{products: Array<Entity>}>(type == "bb" ? bierburg : megabar);
    const navigate: NavigateFunction = useNavigate();

    const addValue = useCallback((value: number, product: boolean) => {
        if(product) setProductsCount(productsCount + 1);
        setTotal(total + value);
        return total;
    }, [productsCount, total])

    const addGiven = useCallback((value: number, returns: boolean) => {
        if(returns) setReturnsCount(returnsCount + 1);
        setGiven(given + value);
        return given;
    }, [given, returnsCount])

    const save = useCallback(async () => {
        const value = localStorage.getItem("mcalc-sales") || "[]";
        const sales: Array<object> = JSON.parse(value);
        sales.push({ time: new Date(), total: total, given: given});
        localStorage.setItem("mcalc-sales", JSON.stringify(sales));
    }, [given, total])

    const clear = useCallback(async () => {
        setTotal(0.0);
        setGiven(0.0);
        setProductsCount(0);
        setReturnsCount(0);
        setCentMode(false);
    }, [])

    const finish = useCallback(async () => {
        await save();
        await clear();
        navigate(`/${type}`);
    }, [clear, navigate, save, type])

    const abort = useCallback(async () => {
        await clear();
        navigate(`/${type}`);
    }, [clear, navigate, type])

    return (<CalculatorContext.Provider
        value={{
            type,
            name,
            total,
            given,
            finish,
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