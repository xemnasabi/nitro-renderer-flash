import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';

export class UserVoiceChatParser implements IMessageParser
{
    private _voiceChatApiKey: string;

    public flush(): boolean
    {
        this._voiceChatApiKey = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._voiceChatApiKey = wrapper.readString();

        return true;
    }

    public get voiceChatApiKey(): string
    {
        return this._voiceChatApiKey;
    }

}
