import {Module} from "@/app/models/userInformation.model";

export interface ModuleStore {
    allModules: Module[] | undefined;
    fetchModules: () => Promise<void>;
}