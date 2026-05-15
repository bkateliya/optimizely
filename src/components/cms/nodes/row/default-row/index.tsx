import {
  extractSettings,
  type CmsLayoutComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import { DefaultRowProps } from "../displayTemplates";
import {
  contentSpacingClasses,
  maxWidthClasses,
  rowAlignClasses,
  rowDirectionClasses,
  rowJustifyClasses,
  textColorClasses,
  verticalSpacingClasses,
} from "../../layout-classes";

export const DefaultRow: CmsLayoutComponent<DefaultRowProps> = ({
  layoutProps,
  children,
}) => {
  const layout = extractSettings(layoutProps);

  const className = [
    "vb:row vb:row:DefaultRow flex",
    rowDirectionClasses(layout.showAsRowFrom ?? "md"),
    rowJustifyClasses(layout.justifyContent ?? "stretch"),
    rowAlignClasses(layout.alignContent ?? "stretch"),
    contentSpacingClasses(layout.contentSpacing ?? "none"),
    verticalSpacingClasses(layout.verticalSpacing ?? "none"),
    maxWidthClasses(layout.maxWidth ?? "full"),
    textColorClasses(layout.textColor ?? "inherit"),
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
};

export default DefaultRow;
