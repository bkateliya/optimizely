import {
  extractSettings,
  type CmsLayoutComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import { CardColumnProps } from "../displayTemplates";
import { cardColumnOrderClasses } from "../../layout-classes";

export const CardColumn: CmsLayoutComponent<CardColumnProps> = ({
  layoutProps,
  children,
}) => {
  const layout = extractSettings(layoutProps);

  const className = [
    "vb:column vb:column:CardColumn flex flex-col flex-1",
    cardColumnOrderClasses(layout.itemOrderOnSmallScreen ?? "normal"),
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
};

export default CardColumn;
