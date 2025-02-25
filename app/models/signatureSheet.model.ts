import {Promo} from "@/app/models/enum/promo.enum";
import {Justification} from "@/app/models/enum/justification.enum";
import {Presence} from "@/app/models/enum/presence.enum";
import {UserInformation} from "@/app/models/userInformation.model";

export interface SignatureSheet {
    promo: Promo;
    moduleName: string;
    createdAt: Date;
    finishAt: Date;
    signatures: Signature[];
    students: UserInformation[];
}

export interface Signature {
    sign: Presence;
    studentWhoSign: UserInformation;
    justification: Justification;
}

export interface SignatureSheetStore {
    signatureSheets?: SignatureSheet[]
    fetchSignatureSheets: (promo?: string, numEtu?: string) => Promise<void>;
}