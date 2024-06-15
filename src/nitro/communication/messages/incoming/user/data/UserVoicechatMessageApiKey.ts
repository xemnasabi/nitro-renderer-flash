import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { UserVoiceChatParser } from '../../../parser';

export class UserVoicechatMessageApiKey extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserVoiceChatParser);
    }

    public getParser(): UserVoiceChatParser
    {
        return this.parser as UserVoiceChatParser;
    }
}
