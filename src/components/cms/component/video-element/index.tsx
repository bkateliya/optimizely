import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { VideoElementDataFragmentDoc, type VideoElementDataFragment } from "@/gql/graphql";
import { VideoElementLayoutProps } from "./displayTemplates";

/**
 * Video
 * ---
 * Add a video to an experience
 */
export const VideoElementComponent : CmsComponent<VideoElementDataFragment, VideoElementLayoutProps> = ({ data, layoutProps, editProps }) => {
    const componentName = 'Video'
    const componentInfo = 'Add a video to an experience'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
VideoElementComponent.displayName = "Video (_component/VideoElement)"
VideoElementComponent.getDataFragment = () => ['VideoElementData', VideoElementDataFragmentDoc]

export default VideoElementComponent