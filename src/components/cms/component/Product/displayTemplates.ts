//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type ProductDefaultStyles from "./product-default.opti-style.json"

export type ProductDefaultProps = LayoutProps<typeof ProductDefaultStyles>
export type ProductDefaultKeys = LayoutPropsSettingKeys<ProductDefaultProps>
export type ProductDefaultOptions<K extends ProductDefaultKeys> = LayoutPropsSettingValues<ProductDefaultProps, K>
export type ProductDefaultComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, ProductDefaultProps>,'children'> & JSX.IntrinsicElements['div']
export type ProductDefaultComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<ProductDefaultComponentProps<DT>>

export type ProductLayoutProps = ProductDefaultProps
export type ProductLayoutKeys = LayoutPropsSettingKeys<ProductLayoutProps>
export type ProductLayoutOptions<K extends ProductLayoutKeys> = LayoutPropsSettingValues<ProductLayoutProps,K>
export type ProductComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, ProductLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type ProductComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<ProductComponentProps<DT>>

export function isDefaultProps(props?: ProductLayoutProps | null) : props is ProductDefaultProps
{
    return props?.template == "ProductDefault"
}

export function isProductDefaultProps(props?: ProductLayoutProps | null) : props is ProductDefaultProps
{
    return props?.template == "ProductDefault"
}