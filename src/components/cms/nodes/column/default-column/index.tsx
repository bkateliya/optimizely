import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultColumnProps } from "../displayTemplates";

export const DefaultColumn : CmsLayoutComponent<DefaultColumnProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:DefaultColumn" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>{ children }</div>);
}

export default DefaultColumn;