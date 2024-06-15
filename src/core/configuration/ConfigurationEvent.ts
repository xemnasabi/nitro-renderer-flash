import { NitroEvent } from '../../events';

export class ConfigurationEvent extends NitroEvent
{
    public static LOADED: string = 'NCE_LOADED';
    public static FAILED: string = 'NCE_FAILED';
    public static FURNITURE_LOADING: string = 'NLE_FURNITURE_LOADING';

    constructor(type: string)
    {
        super(type);
    }
}
