import {
  extractSettings,
  type CmsLayoutComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import { CardRowProps } from "../displayTemplates";
import { cardRowDirectionClasses } from "../../layout-classes";

export const CardRow: CmsLayoutComponent<CardRowProps> = ({
  layoutProps,
  children,
}) => {
  const layout = extractSettings(layoutProps);

  const className = [
    "vb:row vb:row:CardRow flex justify-between items-stretch",
    cardRowDirectionClasses(layout.columnOrderOnSmallScreen ?? "normal"),
  ].join(" ");

  return <div className={className}>{children}</div>;
};

export default CardRow;
