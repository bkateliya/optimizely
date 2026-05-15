import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { LanguagePromoBlockDataFragmentDoc, type LanguagePromoBlockDataFragment } from "@/gql/graphql";

/**
 * Language Promo Block
 * ---
 * A bilingual promotional card with localized title, description, and call-to-action. Supports English and Spanish.
 */
export const LanguagePromoBlockComponent : CmsComponent<LanguagePromoBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Language Promo Block'
    const componentInfo = 'A bilingual promotional card with localized title, description, and call-to-action. Supports English and Spanish.'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
LanguagePromoBlockComponent.displayName = "Language Promo Block (_component/LanguagePromoBlock)"
LanguagePromoBlockComponent.getDataFragment = () => ['LanguagePromoBlockData', LanguagePromoBlockDataFragmentDoc]

export default LanguagePromoBlockComponent