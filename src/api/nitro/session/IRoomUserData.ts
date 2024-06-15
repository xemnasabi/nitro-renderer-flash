export interface IRoomUserData
{
    readonly roomIndex: number;
    activityPoints: number;
    name: string;
    type: number;
    sex: string;
    figure: string;
    custom: string;
    banner: string;
    lang: string;
    level: string;
    respects: string;
    onlinetime: string;
    instagram: string;
    discord: string;
    twitter: string;
    facebook: string;
    tiktok: string;
    verified: string;
    webID: number;
    groupId: number;
    groupName: string;
    groupStatus: number;
    ownerId: number;
    ownerName: string;
    rarityLevel: number;
    hasSaddle: boolean;
    isRiding: boolean;
    canBreed: boolean;
    canHarvest: boolean;
    canRevive: boolean;
    hasBreedingPermission: boolean;
    petLevel: number;
    botSkills: number[];
    isModerator: boolean;
}
