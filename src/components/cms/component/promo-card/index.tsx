import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { PromoCardDataFragmentDoc, type PromoCardDataFragment } from "@/gql/graphql";

/**
 * PromoCard
 * ---
 * A promotional card with title, text and a link
 */
export const PromoCardComponent : CmsComponent<PromoCardDataFragment> = ({ data, editProps }) => {
    const componentName = 'PromoCard'
    const componentInfo = 'A promotional card with title, text and a link'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
PromoCardComponent.displayName = "PromoCard (_component/PromoCard)"
PromoCardComponent.getDataFragment = () => ['PromoCardData', PromoCardDataFragmentDoc]

export default PromoCardComponent