import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ContinueReadingComponentDataFragmentDoc, type ContinueReadingComponentDataFragment } from "@/gql/graphql";

/**
 * Continue Reading
 * ---
 * A Continue Reading section, that can be loaded/shared across pages.
 */
export const ContinueReadingComponentComponent : CmsComponent<ContinueReadingComponentDataFragment> = ({ data, editProps }) => {
    const componentName = 'Continue Reading'
    const componentInfo = 'A Continue Reading section, that can be loaded/shared across pages.'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ContinueReadingComponentComponent.displayName = "Continue Reading (_component/ContinueReadingComponent)"
ContinueReadingComponentComponent.getDataFragment = () => ['ContinueReadingComponentData', ContinueReadingComponentDataFragmentDoc]

export default ContinueReadingComponentComponent