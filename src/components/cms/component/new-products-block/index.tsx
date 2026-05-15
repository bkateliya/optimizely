import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { NewProductsBlockDataFragmentDoc, type NewProductsBlockDataFragment } from "@/gql/graphql";

/**
 * New Products Block
 * ---
 * A carousel block displaying a list of new products with a heading and a View All link
 */
export const NewProductsBlockComponent : CmsComponent<NewProductsBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'New Products Block'
    const componentInfo = 'A carousel block displaying a list of new products with a heading and a View All link'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
NewProductsBlockComponent.displayName = "New Products Block (_component/NewProductsBlock)"
NewProductsBlockComponent.getDataFragment = () => ['NewProductsBlockData', NewProductsBlockDataFragmentDoc]

export default NewProductsBlockComponent