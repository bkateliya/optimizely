import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { getLandingPageDataDocument, type getLandingPageDataQuery } from '@/gql/graphql'
import { getSdk } from "@/gql"

/**
 * Landing Page
 * ---
 * A page entirely built out of blocks.
 * 
 * This component uses the content query that is auto-generated with the Optimizely CMS Preset for GraphQL Codegen, if you need 
 * to override this query create a GraphQL file (for example: `getLandingPageData.query.graphql`) in the same folder as
 * this file. This file must include a GraphQL query with the name `getLandingPageData`. 
 * 
 * [Documentation: Customizing queries](https://github.com/remkoj/optimizely-dxp-clients/blob/main/packages/optimizely-graph-functions/docs/customizing_queries.md)
 */
export const LandingPagePage : CmsComponent<getLandingPageDataQuery> = ({ data, ctx }) => {
    if (!ctx) return null
    const topItems = data.TopContentArea?.filter(Boolean) ?? []
    const mainItems = data.MainContentArea?.filter(Boolean) ?? []
    return <div className="mx-auto px-2 container">
        { topItems.length > 0 && <CmsContentArea fieldName="TopContentArea" items={topItems} ctx={ctx} /> }
        { mainItems.length > 0 && <CmsContentArea fieldName="MainContentArea" items={mainItems} ctx={ctx} /> }
    </div>
}
LandingPagePage.displayName = "Landing Page (_page/LandingPage)"
LandingPagePage.getDataQuery = () => getLandingPageDataDocument
LandingPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default LandingPagePage