import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getHomePageDataDocument, type getHomePageDataQuery } from '@/gql/graphql'
import { getSdk } from "@/gql"

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
export const HomePagePage : CmsComponent<getHomePageDataQuery> = ({ data }) => {
    const componentName = 'Home Page'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
HomePagePage.displayName = "Home Page (_page/HomePage)"
HomePagePage.getDataQuery = () => getHomePageDataDocument
HomePagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default HomePagePage