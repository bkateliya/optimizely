import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { BKCardDataFragmentDoc, type BKCardDataFragment } from "@/gql/graphql";

export const BKCardComponent: CmsComponent<BKCardDataFragment> = ({
  data,
  editProps,
}) => {
  const { Heading } = data;

  return (
    <CmsEditable
      className="w-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      {...editProps}
    >
      {Heading && (
        <CmsEditable
          as="h3"
          className="text-lg font-semibold text-slate-900"
          cmsFieldName="Heading"
          {...editProps}
        >
          {Heading}
        </CmsEditable>
      )}
    </CmsEditable>
  );
};

BKCardComponent.displayName = "BK Card (_component/BKCard)";
BKCardComponent.getDataFragment = () => ["BKCardData", BKCardDataFragmentDoc];

export default BKCardComponent;
