import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { HeadingElementDataFragmentDoc, type HeadingElementDataFragment } from "@/gql/graphql";
import { HeadingElementLayoutProps } from "./displayTemplates";

/**
 * Heading
 * ---
 * 
 */
export const HeadingElementComponent : CmsComponent<HeadingElementDataFragment, HeadingElementLayoutProps> = ({ data, layoutProps, editProps }) => {
    const componentName = 'Heading'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
HeadingElementComponent.displayName = "Heading (_component/HeadingElement)"
HeadingElementComponent.getDataFragment = () => ['HeadingElementData', HeadingElementDataFragmentDoc]

export default HeadingElementComponent