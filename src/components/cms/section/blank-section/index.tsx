import { OptimizelyComposition, isNode, CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { getBlankSectionDataDocument, type getBlankSectionDataQuery, SectionCompositionDataFragmentDoc } from "@/gql/graphql";
import { getFragmentData } from "@/gql/fragment-masking";
import { _sectionLayoutProps } from "../styles/displayTemplates";

/**
 * Blank Section
 * ---
 * A section without a predefined layout.
 */
export const BlankSectionSection : CmsComponent<getBlankSectionDataQuery, _sectionLayoutProps> = ({ data, layoutProps, editProps, children, ctx }) => {
  // If we're rendering stand-alone we'll get a composition back, with ourself included If we're 
  // rendering as part of an experience, we'll get the data directly. So handle both cases.
  if (!data?._metadata && children) return children;

  const componentName = 'Blank Section'
  const componentInfo = 'A section without a predefined layout.'
  const composition = getFragmentData(SectionCompositionDataFragmentDoc, data)?.composition;
  return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
    <div className="font-bold italic">{ componentName }</div>
    <div>{ componentInfo }</div>
    { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(layoutProps, undefined, 4) }</pre>
    {children && <div>{ children }</div>}
    {composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} />}
  </CmsEditable>
}
BlankSectionSection.displayName = "Blank Section (_section/BlankSection)"
BlankSectionSection.getDataQuery = () => getBlankSectionDataDocument

export default BlankSectionSection