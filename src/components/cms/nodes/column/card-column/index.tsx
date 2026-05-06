import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { CardColumnProps } from "../displayTemplates";

export const CardColumn : CmsLayoutComponent<CardColumnProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:CardColumn" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>{ children }</div>);
}

export default CardColumn;