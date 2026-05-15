import {
  extractSettings,
  type CmsLayoutComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import { DefaultColumnProps } from "../displayTemplates";
import {
  columnAlignClasses,
  columnJustifyClasses,
  columnVisibilityClasses,
  contentSpacingClasses,
  minWidthClasses,
  overflowClasses,
} from "../../layout-classes";

export const DefaultColumn: CmsLayoutComponent<DefaultColumnProps> = ({
  layoutProps,
  children,
}) => {
  const layout = extractSettings(layoutProps);

  const className = [
    "vb:column vb:column:DefaultColumn flex flex-col",
    columnVisibilityClasses(layout.showFrom ?? "always"),
    columnAlignClasses(layout.alignContent ?? "start"),
    columnJustifyClasses(layout.justifyContent ?? "start"),
    contentSpacingClasses(layout.contentSpacing ?? "none"),
    minWidthClasses(layout.minWidth ?? "auto"),
    overflowClasses(layout.overflow ?? "full"),
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
};

export default DefaultColumn;
