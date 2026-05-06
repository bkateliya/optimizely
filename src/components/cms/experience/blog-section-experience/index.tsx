import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ExperienceDataFragmentDoc, getBlogSectionExperienceDataDocument, type getBlogSectionExperienceDataQuery } from '@/gql/graphql'
import { getFragmentData } from '@/gql/fragment-masking'
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql/client"

/**
 * Blog/News Section
 * ---
 * Add a blog/news section to your site
 * 
 * This component uses the content query that is auto-generated with the Optimizely CMS Preset for GraphQL Codegen, if you need 
 * to override this query create the file `BlogSectionExperience.query.graphql` in the same folder as this file. This file then
 * must include a GraphQL query with the name `getBlogSectionExperience Data`. 
 * 
 * [Documentation: Customizing queries](https://github.com/remkoj/optimizely-dxp-clients/blob/main/packages/optimizely-graph-functions/docs/customizing_queries.md)
 */
export const BlogSectionExperienceExperience : CmsComponent<getBlogSectionExperienceDataQuery> = ({ data, ctx }) => {
  if (ctx) ctx.editableContentIsExperience = true
  const composition = getFragmentData(ExperienceDataFragmentDoc, data).composition
  const componentName = 'Blog/News Section'
  const componentInfo = 'Add a blog/news section to your site'
  return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
      <div className="font-bold italic">{ componentName }</div>
      <div>{ componentInfo }</div>
      { composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} /> }
  </CmsEditable>
}
BlogSectionExperienceExperience.displayName = "Blog/News Section (_experience/BlogSectionExperience)"
BlogSectionExperienceExperience.getDataQuery = () => getBlogSectionExperienceDataDocument
BlogSectionExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default BlogSectionExperienceExperience