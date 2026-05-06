import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { CardRowProps } from "../displayTemplates";

export const CardRow : CmsLayoutComponent<CardRowProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:CardRow" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>{ children }</div>);
}

export default CardRow;