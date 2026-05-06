import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { BackgroundRowProps } from "../displayTemplates";

export const BackgroundRow : CmsLayoutComponent<BackgroundRowProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:BackgroundRow" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>{ children }</div>);
}

export default BackgroundRow;