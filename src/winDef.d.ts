import type {SC2DataManager} from "../../../dist-BeforeSC2/SC2DataManager";
import type {ModUtils} from "../../../dist-BeforeSC2/Utils";
import type jQuery from "jquery/misc";
import {DependencyHelper} from "./DependencyHelper";

declare global {
    interface Window {
        modUtils: ModUtils;
        modSC2DataManager: SC2DataManager;

        modLoaderGui: Gui;
        modLoaderGui_LoadingProgress: LoadingProgress;
        modLoaderGui_PassageTracer: PassageTracer;
        dependencyHelper: DependencyHelper;

        jQuery: jQuery;
    }
}
