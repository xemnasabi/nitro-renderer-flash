import { NitroEvent } from '../core';

export class WelcomeLoading extends NitroEvent
{
    public static WELCOME: string = 'WELCOME';


    constructor(type: string)
    {
        super(type);
    }
}
