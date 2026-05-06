//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type DefaultImageElementStyles from "./default-image-element.opti-style.json"
import type IconImageElementStyles from "./icon-image-element.opti-style.json"

export type DefaultImageElementProps = LayoutProps<typeof DefaultImageElementStyles>
export type DefaultImageElementKeys = LayoutPropsSettingKeys<DefaultImageElementProps>
export type DefaultImageElementOptions<K extends DefaultImageElementKeys> = LayoutPropsSettingValues<DefaultImageElementProps, K>
export type DefaultImageElementComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, DefaultImageElementProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultImageElementComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<DefaultImageElementComponentProps<DT>>

export type IconImageElementProps = LayoutProps<typeof IconImageElementStyles>
export type IconImageElementKeys = LayoutPropsSettingKeys<IconImageElementProps>
export type IconImageElementOptions<K extends IconImageElementKeys> = LayoutPropsSettingValues<IconImageElementProps, K>
export type IconImageElementComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, IconImageElementProps>,'children'> & JSX.IntrinsicElements['div']
export type IconImageElementComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<IconImageElementComponentProps<DT>>

export type ImageElementLayoutProps = DefaultImageElementProps | IconImageElementProps
export type ImageElementLayoutKeys = LayoutPropsSettingKeys<ImageElementLayoutProps>
export type ImageElementLayoutOptions<K extends ImageElementLayoutKeys> = LayoutPropsSettingValues<ImageElementLayoutProps,K>
export type ImageElementComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, ImageElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type ImageElementComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<ImageElementComponentProps<DT>>

export function isDefaultProps(props?: ImageElementLayoutProps | null) : props is DefaultImageElementProps
{
    return props?.template == "DefaultImageElement"
}

export function isDefaultImageElementProps(props?: ImageElementLayoutProps | null) : props is DefaultImageElementProps
{
    return props?.template == "DefaultImageElement"
}

export function isIconImageElementProps(props?: ImageElementLayoutProps | null) : props is IconImageElementProps
{
    return props?.template == "IconImageElement"
}