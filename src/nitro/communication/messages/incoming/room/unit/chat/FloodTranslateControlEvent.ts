import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FloodTranslateControlParser } from '../../../../parser';

export class FloodTranslateControlEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FloodTranslateControlParser);
    }

    public getParser(): FloodTranslateControlParser
    {
        return this.parser as FloodTranslateControlParser;
    }
}
