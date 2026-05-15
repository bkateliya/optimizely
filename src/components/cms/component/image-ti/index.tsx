import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ImageTiDataFragmentDoc, type ImageTiDataFragment } from "@/gql/graphql";

/**
 * Image-Ti
 * ---
 * This is Image component
 */
export const ImageTiComponent : CmsComponent<ImageTiDataFragment> = ({ data, editProps }) => {
    const componentName = 'Image-Ti'
    const componentInfo = 'This is Image component'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ImageTiComponent.displayName = "Image-Ti (_component/ImageTi)"
ImageTiComponent.getDataFragment = () => ['ImageTiData', ImageTiDataFragmentDoc]

export default ImageTiComponent