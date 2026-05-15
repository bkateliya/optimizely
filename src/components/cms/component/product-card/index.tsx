import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ProductCardDataFragmentDoc, type ProductCardDataFragment } from "@/gql/graphql";

/**
 * Product Card
 * ---
 * Individual product card used inside the New Products Block
 */
export const ProductCardComponent : CmsComponent<ProductCardDataFragment> = ({ data, editProps }) => {
    const componentName = 'Product Card'
    const componentInfo = 'Individual product card used inside the New Products Block'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ProductCardComponent.displayName = "Product Card (_component/ProductCard)"
ProductCardComponent.getDataFragment = () => ['ProductCardData', ProductCardDataFragmentDoc]

export default ProductCardComponent