import { Character } from './blog.model';

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
    character?: Character;
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

//TODO: aff interface to raidGroup
export interface EventModel {
    title: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    description: string;
    reidLeader: ReidLeader;
    raidGroup: any;
    raidLocationData: RaidLocationData;
    raidComposition: RaidComposition;
    raidLocationId: number;
    reidDifficultId: number;
    character: Character;
    role: string;
    totalTanks: number;
    totalHealers: number;
    totalDpsers: number;
    docId?: string;
}
