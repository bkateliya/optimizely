type FlexAlign = "start" | "center" | "end" | "stretch";

const flexAlignMap: Record<FlexAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const flexJustifyMap: Record<FlexAlign, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  stretch: "justify-stretch",
};

const contentSpacingMap = {
  none: "gap-0",
  small: "gap-2",
  medium: "gap-4",
  large: "gap-6",
  xl: "gap-8",
  xxl: "gap-12",
} as const;

export function rowDirectionClasses(
  showAsRowFrom: "md" | "lg" | "xl" = "md",
): string {
  const map = {
    md: "flex-col md:flex-row",
    lg: "flex-col lg:flex-row",
    xl: "flex-col xl:flex-row",
  };
  return map[showAsRowFrom];
}

export function columnVisibilityClasses(
  showFrom: "always" | "fromSmall" | "fromMedium" | "fromLarge" = "always",
): string {
  const map = {
    always: "",
    fromSmall: "hidden sm:flex",
    fromMedium: "hidden md:flex",
    fromLarge: "hidden lg:flex",
  };
  return map[showFrom];
}

export function rowJustifyClasses(
  justifyContent: FlexAlign = "stretch",
): string {
  return flexJustifyMap[justifyContent] ?? flexJustifyMap.stretch;
}

export function rowAlignClasses(alignContent: FlexAlign = "stretch"): string {
  return flexAlignMap[alignContent] ?? flexAlignMap.stretch;
}

export function columnAlignClasses(
  alignContent: "start" | "center" | "end" = "start",
): string {
  return flexAlignMap[alignContent] ?? flexAlignMap.start;
}

export function columnJustifyClasses(
  justifyContent: "start" | "center" | "end" = "start",
): string {
  return flexJustifyMap[justifyContent] ?? flexJustifyMap.start;
}

export function contentSpacingClasses(
  spacing: keyof typeof contentSpacingMap = "none",
): string {
  return contentSpacingMap[spacing] ?? contentSpacingMap.none;
}

const verticalSpacingMap = {
  none: "py-0",
  small: "py-4",
  medium: "py-8",
  large: "py-12",
  verylarge: "py-16",
} as const;

export function verticalSpacingClasses(
  spacing: keyof typeof verticalSpacingMap = "none",
): string {
  return verticalSpacingMap[spacing] ?? verticalSpacingMap.none;
}

export function maxWidthClasses(
  maxWidth: "full" | "container" = "full",
): string {
  return maxWidth === "container" ? "mx-auto w-full max-w-7xl" : "w-full";
}

const textColorMap = {
  inherit: "",
  light: "text-white",
  lightShadow: "text-white drop-shadow-md",
  dark: "text-gray-900",
} as const;

export function textColorClasses(
  textColor: keyof typeof textColorMap = "inherit",
): string {
  return textColorMap[textColor] ?? textColorMap.inherit;
}

const minWidthMap = {
  auto: "min-w-0 flex-1",
  small: "min-w-[25%] flex-1",
  medium: "min-w-[33%] flex-1",
  large: "min-w-[50%] flex-1",
} as const;

export function minWidthClasses(
  minWidth: keyof typeof minWidthMap = "auto",
): string {
  return minWidthMap[minWidth] ?? minWidthMap.auto;
}

const overflowMap = {
  full: "overflow-visible",
  clip: "overflow-hidden",
  left: "overflow-x-auto",
  right: "overflow-x-auto",
} as const;

export function overflowClasses(
  overflow: keyof typeof overflowMap = "full",
): string {
  return overflowMap[overflow] ?? overflowMap.full;
}

export function cardRowDirectionClasses(
  columnOrderOnSmallScreen: "normal" | "reversed" = "normal",
): string {
  return columnOrderOnSmallScreen === "reversed"
    ? "flex-col-reverse md:flex-row"
    : "flex-col md:flex-row";
}

export function cardColumnOrderClasses(
  itemOrderOnSmallScreen: "normal" | "last" = "normal",
): string {
  return itemOrderOnSmallScreen === "last" ? "order-last md:order-none" : "";
}
