import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { FaqItemBlockDataFragmentDoc, type FaqItemBlockDataFragment } from "@/gql/graphql";

/**
 * FAQ Item
 * ---
 * A single FAQ question and answer pair
 */
export const FaqItemBlockComponent : CmsComponent<FaqItemBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'FAQ Item'
    const componentInfo = 'A single FAQ question and answer pair'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
FaqItemBlockComponent.displayName = "FAQ Item (_component/FaqItemBlock)"
FaqItemBlockComponent.getDataFragment = () => ['FaqItemBlockData', FaqItemBlockDataFragmentDoc]

export default FaqItemBlockComponent