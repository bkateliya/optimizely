import {
  OptimizelyComposition,
  isNode,
  CmsEditable,
  type CmsComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import {
  getBlankSectionDataDocument,
  type getBlankSectionDataQuery,
  SectionCompositionDataFragmentDoc,
} from "@/gql/graphql";
import { getFragmentData } from "@/gql/fragment-masking";
import { _sectionLayoutProps } from "../styles/displayTemplates";

/**
 * Blank Section
 * ---
 * A section without a predefined layout. Renders nested composition only.
 */
export const BlankSectionSection: CmsComponent<
  getBlankSectionDataQuery,
  _sectionLayoutProps
> = ({ data, editProps, children, ctx }) => {
  if (!data?._metadata && children) return children;

  const composition = getFragmentData(
    SectionCompositionDataFragmentDoc,
    data,
  )?.composition;
  return (
    <CmsEditable className="w-full" {...editProps}>
      {children && <div className="w-full">{children}</div>}
      {composition && isNode(composition) && (
        <OptimizelyComposition node={composition} ctx={ctx} />
      )}
    </CmsEditable>
  );
};
BlankSectionSection.displayName = "Blank Section (_section/BlankSection)";
BlankSectionSection.getDataQuery = () => getBlankSectionDataDocument;

export default BlankSectionSection;
