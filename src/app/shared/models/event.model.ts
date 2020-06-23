export interface PeriodicElement {
    id: number;
    reidLeader: ReidLeader;
    raidLocationData: RaidLocationData;
    info: string;
    dataTime: string;
    raidComposition: RaidComposition;
}

export interface ReidLeader {
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

export interface RaidLocationData {
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
    reidLeader: ReidLeader;
    raidLocationData: RaidLocationData;
    raidComposition: RaidComposition;
    raidLocationId: number;
    reidDifficultId: string;
    character: string;
    role: string;
    totalTanks: number;
    totalHealers: number;
    totalDpsers: number;
    docId?: string;
}

export interface EventModelId extends EventModel { id: string; }
