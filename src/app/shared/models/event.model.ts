export interface PeriodicElement {
    id: number;
    reidLider: ReidLider;
    raidLocetionData: RaidLocetionData;
    info: string;
    dataTime: string;
    raidComposition: RaidComposition;
}

export interface ReidLider {
    email: string;
    nikName: string;
    name: string;
}

export interface RaidComposition {
    tankNeed: number;
    tankHave: number;
    healNeed: number;
    healHave: number;
    dpsNeed: number;
    dpsHave: number;
}

export interface RaidLocetionData {
    id: number;
    reidDifficult: string;
    shortName: string;
    fullName: string;
    imgName?: string;
}

export interface EventModel {
    title: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    description: string;
    reidLider: ReidLider;
    raidLocetionData: RaidLocetionData;
    raidComposition: RaidComposition;
    raidLocetionId: number;
    reidDifficultId: string;
}

export interface EventModelId extends EventModel { id: string; }
