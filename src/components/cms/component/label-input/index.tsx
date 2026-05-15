import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { LabelInputDataFragmentDoc, type LabelInputDataFragment } from "@/gql/graphql";

/**
 * LabelInput
 * ---
 * label & Input field as for form i hve made
 */
export const LabelInputComponent : CmsComponent<LabelInputDataFragment> = ({ data, editProps }) => {
    const componentName = 'LabelInput'
    const componentInfo = 'label & Input field as for form i hve made'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
LabelInputComponent.displayName = "LabelInput (_component/LabelInput)"
LabelInputComponent.getDataFragment = () => ['LabelInputData', LabelInputDataFragmentDoc]

export default LabelInputComponent