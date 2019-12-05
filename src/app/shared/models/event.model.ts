export interface PeriodicElement {
    id: number;
    reidLider: ReidLider;
    raidName: RaidName;
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

export interface RaidName {
    id: number;
    reidDifficult: string;
    shortName: string;
    fullname: string;
}

export interface EventModel {
    title: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    description: string;
    reidLider: ReidLider;
    raidName: RaidName;
    raidComposition: RaidComposition;
}

export interface EventModelId extends EventModel { id: string; }
