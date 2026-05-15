import {
  CmsContent,
  CmsEditable,
  type CmsComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import {
  BKCardListDataFragmentDoc,
  type BKCardListDataFragment,
} from "@/gql/graphql";

/** CardList resolves to many Graph types; runtime payload always includes _metadata / _type. */
type CardListItem = {
  _metadata?: {
    key?: string | null;
    locale?: string | null;
    types?: (string | null)[] | null;
  } | null;
  _type?: string | null;
  __typename?: string | null;
  Heading?: string | null;
};

function isBKCardNode(item: CardListItem): boolean {
  return item.__typename === "BKCard" || item._type === "BKCard";
}

/**
 * BK Card List
 * ---
 */
export const BKCardListComponent: CmsComponent<BKCardListDataFragment> = ({
  data,
  editProps,
  ctx,
}) => {
  const items = (data.CardList?.filter(Boolean) ?? []) as CardListItem[];

  return (
    <CmsEditable
      className="mb-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 p-6 md:p-8"
      {...editProps}
    >
      <CmsEditable
        as="h2"
        className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        cmsFieldName="Heading"
        {...editProps}
      >
        {data.Heading ?? ""}
      </CmsEditable>

      {items.length > 0 && (
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const key = item._metadata?.key ?? `card-${idx}`;
            if (ctx && item._metadata?.key) {
              return (
                <li key={key} className="min-w-0">
                  <CmsContent
                    contentLink={item._metadata}
                    fragmentData={item as Record<string, unknown>}
                    ctx={ctx}
                    editorComponentId={item._metadata.key}
                  />
                </li>
              );
            }
            if (isBKCardNode(item)) {
              return (
                <li key={key} className="min-w-0">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.Heading ?? ""}
                    </h3>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </CmsEditable>
  );
};
BKCardListComponent.displayName = "BK Card List (_component/BKCardList)";
BKCardListComponent.getDataFragment = () => [
  "BKCardListData",
  BKCardListDataFragmentDoc,
];

export default BKCardListComponent;
