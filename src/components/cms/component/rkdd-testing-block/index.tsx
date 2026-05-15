import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { RKDDTestingBlockDataFragmentDoc, type RKDDTestingBlockDataFragment } from "@/gql/graphql";

/**
 * Display name is RKDDTestingBlock
 * ---
 * 
 */
export const RKDDTestingBlockComponent : CmsComponent<RKDDTestingBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Display name is RKDDTestingBlock'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
RKDDTestingBlockComponent.displayName = "Display name is RKDDTestingBlock (_component/RKDDTestingBlock)"
RKDDTestingBlockComponent.getDataFragment = () => ['RKDDTestingBlockData', RKDDTestingBlockDataFragmentDoc]

export default RKDDTestingBlockComponent