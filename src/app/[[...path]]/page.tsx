import { draftMode } from "next/headers";
import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { createClient, AuthMode } from "@remkoj/optimizely-graph-client";
import { isNonEmptyString } from "@remkoj/optimizely-cms-react/rsc";
import type { ChannelDefinition } from "@remkoj/optimizely-graph-client/channels";

import factory from "@/components/factory";

const defaultLocaleSlug =
  process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en";

/**
 * Map Next optional catch-all params to a CMS URL path.
 * Bare "/" must become "/{locale}/" because SaaS routes are locale-prefixed.
 */
async function propsToCmsPath(
  props: {
    params: Promise<Record<string, string | string[] | undefined>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  },
  channel?: ChannelDefinition
): Promise<string | null> {
  const params = await props.params;
  const slugs = [params.lang, ...(params.path ?? [])]
    .filter(isNonEmptyString)
    .filter((x) => !x.startsWith(encodeURIComponent("var:")))
    .map((x) => decodeURIComponent(x));
  if (slugs.length === 0) {
    if (channel) {
      const slug =
        channel.localeToSlug(channel.defaultLocale) ?? defaultLocaleSlug;
      return `/${slug}/`;
    }
    return `/${defaultLocaleSlug}/`;
  }
  const fullPath = !slugs[slugs.length - 1].includes(".")
    ? "/" + slugs.join("/") + "/"
    : "/" + slugs.join("/");
  return fullPath;
}

// Read the URLs from the environment
const netlifyUrl = process.env.URL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;
const customUrl = process.env.SITE_DOMAIN ? (process.env.SITE_DOMAIN.startsWith('http') ? process.env.SITE_DOMAIN : `https://${process.env.SITE_DOMAIN}`) : undefined;

// Determine the ChannelURL
const channelId = customUrl || vercelUrl || netlifyUrl;

// Deconstruct the created page in the constants Next.js needs
const { CmsPage, generateMetadata, generateStaticParams } = createPage(
  factory,
  {
    /**
     * The base URL, without trailing slash. This allows the frontend to filter
     * content in Graph based upon the domain for which this deployment is 
     * intended.
     */
    channel: channelId,

    propsToCmsPath,

    /**
     * The client factory to be used when a new GraphQL client is required
     * by the application.
     *
     * @param   token     The authorization token
     * @param   scope     The scope for the client, when `request`, Next.JS methods like 'draftMode' can be used
     * @returns The GraphQL Client instance
     */
    client: async (token, scope) => {
      // Create the client
      const client = createClient(undefined, token, {
        nextJsFetchDirectives: true,
      });
      // Check if we're in request mode and draftMode is enabled
      if (scope == "request" && (await draftMode()).isEnabled) {
        console.log('🔱 Next.JS DraftMode enabled')
        // If we're not authenticated, switch to HMAC authentication
        if (client.currentAuthMode === AuthMode.Public)
          client.updateAuthentication(AuthMode.HMAC);
        // Set the preview flag on the client
        client.enablePreview();
      }
      return client;
    },
  }
);

// Configure the Next.JS route handling for the pages
export const dynamic = "error"; // Make sure we cache pages, if one component is not static none of the routes will be static
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

// Export CMS Page
export { generateMetadata, generateStaticParams };
export default CmsPage;
