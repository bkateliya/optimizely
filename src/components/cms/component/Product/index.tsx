import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ProductDataFragmentDoc, type ProductDataFragment } from "@/gql/graphql";
import { ProductLayoutProps } from "./displayTemplates";

/**
 * Product
 * ---
 * 
 */
export const ProductComponent : CmsComponent<ProductDataFragment, ProductLayoutProps> = ({ data, layoutProps, editProps }) => {
    const componentName = 'Product'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ProductComponent.displayName = "Product (_component/Product)"
ProductComponent.getDataFragment = () => ['ProductData', ProductDataFragmentDoc]

export default ProductComponent