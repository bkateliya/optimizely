import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { CarouselRowProps } from "../displayTemplates";

export const CarouselRow : CmsLayoutComponent<CarouselRowProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:CarouselRow" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>{ children }</div>);
}

export default CarouselRow;