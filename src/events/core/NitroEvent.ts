import { INitroEvent } from '../../api';

export class NitroEvent implements INitroEvent
{

    public static FURNITURE_LOADED: string = 'FURNITURE_LOADED';


    private _type: string;

    constructor(type: string)
    {
        this._type = type;
    }

    public get type(): string
    {
        return this._type;
    }
}
