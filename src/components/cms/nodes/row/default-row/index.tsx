import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultRowProps } from "../displayTemplates";

export const DefaultRow : CmsLayoutComponent<DefaultRowProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:DefaultRow" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>{ children }</div>);
}

export default DefaultRow;