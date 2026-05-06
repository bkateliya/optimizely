//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type CardRowStyles from "./card-row/card-row.opti-style.json"
import type CarouselRowStyles from "./carousel-row/carousel-row.opti-style.json"
import type DefaultRowStyles from "./default-row/default-row.opti-style.json"
import type BackgroundRowStyles from "./background-row/background-row.opti-style.json"

export type CardRowProps = LayoutProps<typeof CardRowStyles>
export type CardRowKeys = LayoutPropsSettingKeys<CardRowProps>
export type CardRowOptions<K extends CardRowKeys> = LayoutPropsSettingValues<CardRowProps, K>
export type CardRowComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, CardRowProps>,'children'> & JSX.IntrinsicElements['div']
export type CardRowComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<CardRowComponentProps<DT>>

export type CarouselRowProps = LayoutProps<typeof CarouselRowStyles>
export type CarouselRowKeys = LayoutPropsSettingKeys<CarouselRowProps>
export type CarouselRowOptions<K extends CarouselRowKeys> = LayoutPropsSettingValues<CarouselRowProps, K>
export type CarouselRowComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, CarouselRowProps>,'children'> & JSX.IntrinsicElements['div']
export type CarouselRowComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<CarouselRowComponentProps<DT>>

export type DefaultRowProps = LayoutProps<typeof DefaultRowStyles>
export type DefaultRowKeys = LayoutPropsSettingKeys<DefaultRowProps>
export type DefaultRowOptions<K extends DefaultRowKeys> = LayoutPropsSettingValues<DefaultRowProps, K>
export type DefaultRowComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, DefaultRowProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultRowComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<DefaultRowComponentProps<DT>>

export type BackgroundRowProps = LayoutProps<typeof BackgroundRowStyles>
export type BackgroundRowKeys = LayoutPropsSettingKeys<BackgroundRowProps>
export type BackgroundRowOptions<K extends BackgroundRowKeys> = LayoutPropsSettingValues<BackgroundRowProps, K>
export type BackgroundRowComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, BackgroundRowProps>,'children'> & JSX.IntrinsicElements['div']
export type BackgroundRowComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<BackgroundRowComponentProps<DT>>

export type RowLayoutProps = CardRowProps | CarouselRowProps | DefaultRowProps | BackgroundRowProps
export type RowLayoutKeys = LayoutPropsSettingKeys<RowLayoutProps>
export type RowLayoutOptions<K extends RowLayoutKeys> = LayoutPropsSettingValues<RowLayoutProps,K>
export type RowComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, RowLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type RowComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<RowComponentProps<DT>>

export function isDefaultProps(props?: RowLayoutProps | null) : props is DefaultRowProps
{
    return props?.template == "DefaultRow"
}

export function isCardRowProps(props?: RowLayoutProps | null) : props is CardRowProps
{
    return props?.template == "CardRow"
}

export function isCarouselRowProps(props?: RowLayoutProps | null) : props is CarouselRowProps
{
    return props?.template == "CarouselRow"
}

export function isDefaultRowProps(props?: RowLayoutProps | null) : props is DefaultRowProps
{
    return props?.template == "DefaultRow"
}

export function isBackgroundRowProps(props?: RowLayoutProps | null) : props is BackgroundRowProps
{
    return props?.template == "BackgroundRow"
}