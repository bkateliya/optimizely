//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type ProductsDefaultStyles from "./products-default.opti-style.json"

export type ProductsDefaultProps = LayoutProps<typeof ProductsDefaultStyles>
export type ProductsDefaultKeys = LayoutPropsSettingKeys<ProductsDefaultProps>
export type ProductsDefaultOptions<K extends ProductsDefaultKeys> = LayoutPropsSettingValues<ProductsDefaultProps, K>
export type ProductsDefaultComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, ProductsDefaultProps>,'children'> & JSX.IntrinsicElements['div']
export type ProductsDefaultComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<ProductsDefaultComponentProps<DT>>

export type ProductsLayoutProps = ProductsDefaultProps
export type ProductsLayoutKeys = LayoutPropsSettingKeys<ProductsLayoutProps>
export type ProductsLayoutOptions<K extends ProductsLayoutKeys> = LayoutPropsSettingValues<ProductsLayoutProps,K>
export type ProductsComponentProps<DT extends Record<string, unknown> = Record<string, unknown>> = Omit<CmsComponentProps<DT, ProductsLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type ProductsComponent<DT extends Record<string, unknown> = Record<string, unknown>> = ComponentType<ProductsComponentProps<DT>>

export function isDefaultProps(props?: ProductsLayoutProps | null) : props is ProductsDefaultProps
{
    return props?.template == "ProductsDefault"
}

export function isProductsDefaultProps(props?: ProductsLayoutProps | null) : props is ProductsDefaultProps
{
    return props?.template == "ProductsDefault"
}