import { NitroEvent } from '../core';

export class FurnitureDataEventLoading extends NitroEvent
{
    public static LOADING: string = 'FURNITURE_LOADING';
    public static LOADING_FAILED: string = 'FURNITURE_LOADING_FAILED';


    constructor(type: string)
    {
        super(type);
    }
}
