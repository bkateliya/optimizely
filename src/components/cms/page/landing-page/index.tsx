import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
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
export const LandingPagePage : CmsComponent<getLandingPageDataQuery> = ({ data }) => {
    const componentName = 'Landing Page'
    const componentInfo = 'A page entirely built out of blocks.'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
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