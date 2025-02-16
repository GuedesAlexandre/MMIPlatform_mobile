import {Status} from "@/app/models/enum/status.enum";

export interface UserInformation {
    lastName: string;
    firstName: string;
    promo: string;
    group: string;
    numEtu: string;
    notes: Note[];
}

export interface Note {
    coeff: number;
    name: string;
    note: number;
    status: Status;
    module: Module;
}

export interface Module {
    name: string;
    promo: string;
    semester: string;
    coeff: number;
    ueName: string;
    sumNote: number;
}

export interface UserInformationStore {
    userInformation: undefined | UserInformation;
    getUserInformation: (numEtu: string | undefined) => Promise<void>;
}
