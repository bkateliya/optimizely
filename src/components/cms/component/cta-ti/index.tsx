import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { CTATiDataFragmentDoc, type CTATiDataFragment } from "@/gql/graphql";

/**
 * CTA-Ti
 * ---
 * This is Texas CTA
 */
export const CTATiComponent : CmsComponent<CTATiDataFragment> = ({ data, editProps }) => {
    const componentName = 'CTA-Ti'
    const componentInfo = 'This is Texas CTA'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
CTATiComponent.displayName = "CTA-Ti (_component/CTATi)"
CTATiComponent.getDataFragment = () => ['CTATiData', CTATiDataFragmentDoc]

export default CTATiComponent