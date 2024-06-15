import { Resource, Texture } from '@pixi/core';
import { INitroManager } from '../../common';
import { INitroCommunicationManager } from '../communication';
import { IFurnitureData } from './IFurnitureData';
import { IFurnitureDataListener } from './IFurnitureDataListener';
import { IGroupInformationManager } from './IGroupInformationManager';
import { IIgnoredUsersManager } from './IIgnoredUsersManager';
import { IProductData } from './IProductData';

export interface ISessionDataManager extends INitroManager
{
    getAllFurnitureData(listener: IFurnitureDataListener): IFurnitureData[];
    removePendingFurniDataListener(listener: IFurnitureDataListener): void;
    getFloorItemData(id: number): IFurnitureData;
    getFloorItemDataByName(name: string): IFurnitureData;
    getWallItemData(id: number): IFurnitureData;
    getWallItemDataByName(name: string): IFurnitureData;
    getProductData(type: string): IProductData;
    getBadgeUrl(name: string): string;
    getGroupBadgeUrl(name: string): string;
    getBadgeImage(name: string): Texture<Resource>;
    getUserTags(roomUnitId: number): string[];
    loadBadgeImage(name: string): string;
    getGroupBadgeImage(name: string): Texture<Resource>;
    loadGroupBadgeImage(name: string): string;
    hasSecurity(level: number): boolean;
    giveRespect(userId: number): void;
    givePetRespect(petId: number): void;
    sendSpecialCommandMessage(text: string, styleId?: number): void;
    ignoreUser(name: string): void;
    unignoreUser(name: string): void;
    isUserIgnored(name: string): boolean;
    getGroupBadge(groupId: number): string;
    communication: INitroCommunicationManager;
    userId: number;
    userName: string;
    figure: string;
    gender: string;
    realName: string;
    ignoredUsersManager: IIgnoredUsersManager;
    groupInformationManager: IGroupInformationManager;
    respectsReceived: number;
    respectsLeft: number;
    respectsPetLeft: number;
    canChangeName: boolean;
    clubLevel: number;
    securityLevel: number;
    isAmbassador: boolean;
    isNoob: boolean;
    isRealNoob: boolean;
    isSystemOpen: boolean;
    isSystemShutdown: boolean;
    isAuthenticHabbo: boolean;
    isModerator: boolean;
    isCameraFollowDisabled: boolean;
    uiFlags: number;
    tags: string[];
    userVoiceChatApiKey: string;
    lang: string;
}
