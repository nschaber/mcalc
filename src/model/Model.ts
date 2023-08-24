export interface Entity {
    key: string;
    name: string;
    returns: boolean;
    value: {
        default: number;
        return: number;
    }
}