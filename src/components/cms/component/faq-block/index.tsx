import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { FaqBlockDataFragmentDoc, type FaqBlockDataFragment } from "@/gql/graphql";

/**
 * FAQ Block
 * ---
 * Frequently asked questions accordion section. Add FAQ items to build the Q&A list.
 */
export const FaqBlockComponent : CmsComponent<FaqBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'FAQ Block'
    const componentInfo = 'Frequently asked questions accordion section. Add FAQ items to build the Q&A list.'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
FaqBlockComponent.displayName = "FAQ Block (_component/FaqBlock)"
FaqBlockComponent.getDataFragment = () => ['FaqBlockData', FaqBlockDataFragmentDoc]

export default FaqBlockComponent