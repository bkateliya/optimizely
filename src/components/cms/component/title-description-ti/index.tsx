import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { TitleDescriptionTiDataFragmentDoc, type TitleDescriptionTiDataFragment } from "@/gql/graphql";

/**
 * TitleDescriptionTi
 * ---
 * 
 */
export const TitleDescriptionTiComponent : CmsComponent<TitleDescriptionTiDataFragment> = ({ data, editProps }) => {
    const componentName = 'TitleDescriptionTi'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
TitleDescriptionTiComponent.displayName = "TitleDescriptionTi (_component/TitleDescriptionTi)"
TitleDescriptionTiComponent.getDataFragment = () => ['TitleDescriptionTiData', TitleDescriptionTiDataFragmentDoc]

export default TitleDescriptionTiComponent