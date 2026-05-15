import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { MobileDetailCardDataFragmentDoc, type MobileDetailCardDataFragment } from "@/gql/graphql";

/**
 * Mobile Detail Card
 * ---
 * Dummy Mobile Detail Card
 */
export const MobileDetailCardComponent : CmsComponent<MobileDetailCardDataFragment> = ({ data, editProps }) => {
    const componentName = 'Mobile Detail Card'
    const componentInfo = 'Dummy Mobile Detail Card'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
MobileDetailCardComponent.displayName = "Mobile Detail Card (_component/MobileDetailCard)"
MobileDetailCardComponent.getDataFragment = () => ['MobileDetailCardData', MobileDetailCardDataFragmentDoc]

export default MobileDetailCardComponent