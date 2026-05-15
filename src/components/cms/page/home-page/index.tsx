import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  getHomePageDataDocument,
  type getHomePageDataQuery,
} from "@/gql/graphql";
import { getSdk } from "@/gql";

/**
 * Home Page
 * ---
 *
 *
 * This component uses the content query that is auto-generated with the Optimizely CMS Preset for GraphQL Codegen, if you need
 * to override this query create a GraphQL file (for example: `getHomePageData.query.graphql`) in the same folder as
 * this file. This file must include a GraphQL query with the name `getHomePageData`.
 *
 * [Documentation: Customizing queries](https://github.com/remkoj/optimizely-dxp-clients/blob/main/packages/optimizely-graph-functions/docs/customizing_queries.md)
 */
export const HomePagePage: CmsComponent<getHomePageDataQuery> = ({
  data,
  ctx,
  editProps,
}) => {
  if (!ctx) {
    return null;
  }
  const headerItems = data.Header?.filter(Boolean) ?? [];
  const bodyItems = data.Body?.filter(Boolean) ?? [];
  const footerItems = data.Footer?.filter(Boolean) ?? [];
  return (
    <div className="mx-auto px-2 container">
      {headerItems.length > 0 && (
        <CmsContentArea fieldName="Header" items={headerItems} ctx={ctx} />
      )}
      {data.Subheader != null && data.Subheader !== "" && (
        <CmsEditable
          as="p"
          className="text-lg text-slate-700 mb-4"
          cmsFieldName="Subheader"
          {...editProps}
        >
          {data.Subheader}
        </CmsEditable>
      )}
      {bodyItems.length > 0 && (
        <CmsContentArea fieldName="Body" items={bodyItems} ctx={ctx} />
      )}
      {footerItems.length > 0 && (
        <CmsContentArea fieldName="Footer" items={footerItems} ctx={ctx} />
      )}
    </div>
  );
};
HomePagePage.displayName = "Home Page (_page/HomePage)";
HomePagePage.getDataQuery = () => getHomePageDataDocument;
HomePagePage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client);
  // Add your metadata logic here
  return {};
};

export default HomePagePage;
