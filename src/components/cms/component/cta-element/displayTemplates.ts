//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type CTAElementAnimatedStylesStyles from "./cta-element-animated-styles.opti-style.json"
import type CTAElementDefaultStylesStyles from "./cta-element-default-styles.opti-style.json"

export type CTAElementAnimatedStylesProps = LayoutProps<typeof CTAElementAnimatedStylesStyles>
export type CTAElementAnimatedStylesKeys = LayoutPropsSettingKeys<CTAElementAnimatedStylesProps>
export type CTAElementAnimatedStylesOptions<K extends CTAElementAnimatedStylesKeys> = LayoutPropsSettingValues<CTAElementAnimatedStylesProps, K>
export type CTAElementAnimatedStylesComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, CTAElementAnimatedStylesProps>,'children'> & JSX.IntrinsicElements['div']
export type CTAElementAnimatedStylesComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<CTAElementAnimatedStylesComponentProps<DT>>

export type CTAElementDefaultStylesProps = LayoutProps<typeof CTAElementDefaultStylesStyles>
export type CTAElementDefaultStylesKeys = LayoutPropsSettingKeys<CTAElementDefaultStylesProps>
export type CTAElementDefaultStylesOptions<K extends CTAElementDefaultStylesKeys> = LayoutPropsSettingValues<CTAElementDefaultStylesProps, K>
export type CTAElementDefaultStylesComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, CTAElementDefaultStylesProps>,'children'> & JSX.IntrinsicElements['div']
export type CTAElementDefaultStylesComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<CTAElementDefaultStylesComponentProps<DT>>

export type CTAElementLayoutProps = CTAElementAnimatedStylesProps | CTAElementDefaultStylesProps
export type CTAElementLayoutKeys = LayoutPropsSettingKeys<CTAElementLayoutProps>
export type CTAElementLayoutOptions<K extends CTAElementLayoutKeys> = LayoutPropsSettingValues<CTAElementLayoutProps,K>
export type CTAElementComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, CTAElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type CTAElementComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<CTAElementComponentProps<DT>>

export function isDefaultProps(props?: CTAElementLayoutProps | null) : props is CTAElementDefaultStylesProps
{
    return props?.template == "CTAElementDefaultStyles"
}

export function isCTAElementAnimatedStylesProps(props?: CTAElementLayoutProps | null) : props is CTAElementAnimatedStylesProps
{
    return props?.template == "CTAElementAnimatedStyles"
}

export function isCTAElementDefaultStylesProps(props?: CTAElementLayoutProps | null) : props is CTAElementDefaultStylesProps
{
    return props?.template == "CTAElementDefaultStyles"
}