import {
  CmsEditable,
  type CmsComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import {
  bk_heroDataFragmentDoc,
  type bk_heroDataFragment,
} from "@/gql/graphql";
import Image from "next/image";
import NextLink from "next/link";

function hrefFromContentUrl(
  url:
    | {
        type?: string | null;
        base?: string | null;
        default?: string | null;
      }
    | null
    | undefined,
): string | null {
  if (!url) return null;
  const raw = url.default?.trim();
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) return raw;
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  if (url.type === "HIERARCHICAL") return path;
  const base = url.base?.trim();
  if (base) {
    try {
      return new URL(path, base.endsWith("/") ? base : `${base}/`).href;
    } catch {
      return path;
    }
  }
  return path;
}

function richTextJsonToPlain(json: unknown): string {
  if (json == null || typeof json !== "object") return "";
  const node = json as { text?: unknown; children?: unknown[] };
  if (typeof node.text === "string") return node.text;
  if (Array.isArray(node.children)) {
    return node.children.map(richTextJsonToPlain).filter(Boolean).join("\n");
  }
  return "";
}

export const BKHeroComponent: CmsComponent<bk_heroDataFragment> = ({
  data,
  editProps,
}) => {
  const { Heading, DescriptionRichText, Image: imageRef, Link: cmsLink } = data;
  const description = richTextJsonToPlain(DescriptionRichText?.json);
  const linkHref = hrefFromContentUrl(cmsLink);
  const imageUrl =
    imageRef?.item?.__typename === "cmp_PublicImageAsset"
      ? (imageRef.item as any).Url
      : (imageRef?.url?.default ?? null);
  const altText =
    imageRef?.item?.__typename === "cmp_PublicImageAsset"
      ? ((imageRef.item as any).AltText ?? Heading ?? "")
      : (Heading ?? "");
  return (
    <CmsEditable {...editProps}>
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#0f172a",
        }}
      >
        {/* Background image */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={altText}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.45) saturate(1.2)",
            }}
            priority
          />
        )}
        {/* Dark left-to-right gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 64px",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            {/* Eyebrow accent */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  background: "#3b82f6",
                  borderRadius: "9999px",
                }}
              />
              <div
                style={{
                  height: "3px",
                  width: "16px",
                  background: "rgba(59,130,246,0.4)",
                  borderRadius: "9999px",
                }}
              />
            </div>
            Hero..
            {/* Title */}
            {Heading && (
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  margin: "0 0 20px 0",
                  textShadow: "0 2px 32px rgba(0,0,0,0.6)",
                }}
              >
                {Heading}
              </h1>
            )}
            {/* Divider */}
            {Heading && description && (
              <div
                style={{
                  height: "2px",
                  width: "48px",
                  background: "rgba(255,255,255,0.25)",
                  borderRadius: "9999px",
                  margin: "0 0 20px 0",
                }}
              />
            )}
            {/* Description */}
            {description && (
              <p
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  margin: 0,
                  textShadow: "0 1px 12px rgba(0,0,0,0.5)",
                }}
              >
                {description}
              </p>
            )}
            {linkHref && (
              <NextLink
                href={linkHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginTop: "28px",
                  padding: "14px 28px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: "#0f172a",
                  background: "#3b82f6",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
                }}
              >
                Learn more
              </NextLink>
            )}
          </div>
        </div>
      </section>
    </CmsEditable>
  );
};
BKHeroComponent.displayName = "BK Hero (_component/BKHero)";
BKHeroComponent.getDataFragment = () => ["bk_heroData", bk_heroDataFragmentDoc];
export default BKHeroComponent;
