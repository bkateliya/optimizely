import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { RichTextElementDataFragmentDoc, type RichTextElementDataFragment } from "@/gql/graphql";
import { RichTextElementLayoutProps } from "./displayTemplates";

/**
 * Rich Text
 * ---
 * Add a text to your experience
 */
export const RichTextElementComponent : CmsComponent<RichTextElementDataFragment, RichTextElementLayoutProps> = ({ data, layoutProps, editProps }) => {
    const componentName = 'Rich Text'
    const componentInfo = 'Add a text to your experience'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
RichTextElementComponent.displayName = "Rich Text (_component/RichTextElement)"
RichTextElementComponent.getDataFragment = () => ['RichTextElementData', RichTextElementDataFragmentDoc]

export default RichTextElementComponent