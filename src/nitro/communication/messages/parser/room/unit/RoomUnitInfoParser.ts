import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';

export class RoomUnitInfoParser implements IMessageParser
{
    private _unitId: number;
    private _figure: string;
    private _gender: string;
    private _motto: string;
    private _banner: string;


    private _level: string;
    private _respects: string;
    private _onlinetime: string;
    private _instagram: string;
    private _discord: string;
    private _twitter: string;
    private _facebook: string;
    private _tiktok: string;
    private _verified: string;


    private _lang: string;

    private _achievementScore: number;

    public flush(): boolean
    {
        this._unitId = null;
        this._figure = null;
        this._gender = 'M';
        this._motto = null;
        this._banner = null;
        this._lang = null;

        this._level = null;
        this._respects = null;
        this._onlinetime = null;
        this._instagram = null;
        this._discord = null;
        this._twitter = null;
        this._facebook = null;
        this._tiktok = null;
        this._verified = null;


        this._achievementScore = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._unitId = wrapper.readInt();
        this._figure = wrapper.readString();
        this._gender = wrapper.readString().toLocaleUpperCase();
        this._motto = wrapper.readString();
        this._banner = wrapper.readString();
        this._lang = wrapper.readString();

        this._level = wrapper.readString();
        this._respects = wrapper.readString();
        this._onlinetime = wrapper.readString();
        this._instagram = wrapper.readString();
        this._discord = wrapper.readString();
        this._twitter = wrapper.readString();
        this._facebook = wrapper.readString();
        this._tiktok = wrapper.readString();
        this._verified = wrapper.readString();


        this._achievementScore = wrapper.readInt();

        return true;
    }

    public get unitId(): number
    {
        return this._unitId;
    }

    public get figure(): string
    {
        return this._figure;
    }

    public get gender(): string
    {
        return this._gender;
    }

    public get motto(): string
    {
        return this._motto;
    }

    public get banner(): string
    {
        return this._banner;
    }

    public get lang(): string
    {
        return this._lang;
    }

    public get level(): string
    {
        return this._level;
    } 
    public get respects(): string
    {
        return this._respects;
    }
    public get onlinetime(): string
    {
        return this._onlinetime;
    }
    public get instagram(): string
    {
        return this._instagram;
    }
    public get discord(): string
    {
        return this._discord;
    }
    public get twitter(): string
    {
        return this._twitter;
    }
    public get facebook(): string
    {
        return this._facebook;
    }
    public get tiktok(): string
    {
        return this._tiktok;
    }
    public get verified(): string
    {
        return this._verified;
    }


    public get achievementScore(): number
    {
        return this._achievementScore;
    }
}
