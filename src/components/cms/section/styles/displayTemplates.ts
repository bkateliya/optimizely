//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type DefaultGridStyles from "./default-grid/default-grid.opti-style.json"

export type DefaultGridProps = LayoutProps<typeof DefaultGridStyles>
export type DefaultGridKeys = LayoutPropsSettingKeys<DefaultGridProps>
export type DefaultGridOptions<K extends DefaultGridKeys> = LayoutPropsSettingValues<DefaultGridProps, K>
export type DefaultGridComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, DefaultGridProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultGridComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<DefaultGridComponentProps<DT>>

export type _sectionLayoutProps = DefaultGridProps
export type _sectionLayoutKeys = LayoutPropsSettingKeys<_sectionLayoutProps>
export type _sectionLayoutOptions<K extends _sectionLayoutKeys> = LayoutPropsSettingValues<_sectionLayoutProps,K>
export type _sectionComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, _sectionLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type _sectionComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<_sectionComponentProps<DT>>

export function isDefaultProps(props?: _sectionLayoutProps | null) : props is DefaultGridProps
{
    return props?.template == "DefaultGrid"
}

export function isDefaultGridProps(props?: _sectionLayoutProps | null) : props is DefaultGridProps
{
    return props?.template == "DefaultGrid"
}