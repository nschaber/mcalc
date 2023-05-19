import {Entity} from "../model/Model.ts";
import {Fragment, ReactElement} from "react";

export const ProductPad = (props: {
    options: { returns: number; products: Array<Entity> },
    callbackfn: (value: Entity) => ReactElement
}) => {
    return <Fragment>
        {props.options.products.map(props.callbackfn)}
    </Fragment>;
};