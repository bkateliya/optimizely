import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { QuoteBlockDataFragmentDoc, type QuoteBlockDataFragment } from "@/gql/graphql";

/**
 * Quote
 * ---
 * A block used to display a quote.
 */
export const QuoteBlockComponent : CmsComponent<QuoteBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Quote'
    const componentInfo = 'A block used to display a quote.'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
QuoteBlockComponent.displayName = "Quote (_component/QuoteBlock)"
QuoteBlockComponent.getDataFragment = () => ['QuoteBlockData', QuoteBlockDataFragmentDoc]

export default QuoteBlockComponent