import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultGridProps } from "../displayTemplates";

export const DefaultGrid : CmsLayoutComponent<DefaultGridProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:_section vb:_section:DefaultGrid">{ children }</div>);
}

export default DefaultGrid;