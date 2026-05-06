import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { GlobalHeaderDataFragmentDoc, type GlobalHeaderDataFragment } from "@/gql/graphql";

/**
 * Global Header
 * ---
 * This is a global header
 */
export const GlobalHeaderComponent : CmsComponent<GlobalHeaderDataFragment> = ({ data, editProps }) => {
    const componentName = 'Global Header'
    const componentInfo = 'This is a global header'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
GlobalHeaderComponent.displayName = "Global Header (_component/GlobalHeader)"
GlobalHeaderComponent.getDataFragment = () => ['GlobalHeaderData', GlobalHeaderDataFragmentDoc]

export default GlobalHeaderComponent