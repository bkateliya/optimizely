import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ContentRecsElementDataFragmentDoc, type ContentRecsElementDataFragment } from "@/gql/graphql";

/**
 * Content Recommendations
 * ---
 * Add a set of content recommendations
 */
export const ContentRecsElementComponent : CmsComponent<ContentRecsElementDataFragment> = ({ data, editProps }) => {
    const componentName = 'Content Recommendations'
    const componentInfo = 'Add a set of content recommendations'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ContentRecsElementComponent.displayName = "Content Recommendations (_component/ContentRecsElement)"
ContentRecsElementComponent.getDataFragment = () => ['ContentRecsElementData', ContentRecsElementDataFragmentDoc]

export default ContentRecsElementComponent