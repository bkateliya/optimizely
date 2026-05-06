// This is an auto-generated file, do not modify
import type * as Schema from "./graphql";
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const CmpImageAssetInfoFragmentDoc : DocumentNode<Schema.CmpImageAssetInfoFragment, unknown> = gql`
    fragment CmpImageAssetInfo on cmp_PublicImageAsset {
  __typename
  Title
  AltText
  Width
  Height
  Url
  Renditions {
    Name
    Width
    Height
    Url
  }
}
    `;
export const CmpVideoAssetInfoFragmentDoc : DocumentNode<Schema.CmpVideoAssetInfoFragment, unknown> = gql`
    fragment CmpVideoAssetInfo on cmp_PublicVideoAsset {
  Title
  AltText
  Url
  Renditions {
    Name
    Width
    Height
    Url
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc : DocumentNode<Schema.PageSeoSettingsPropertyDataFragment, unknown> = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  GraphType
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const IContentDataFragmentDoc : DocumentNode<Schema.IContentDataFragment, unknown> = gql`
    fragment IContentData on _IContent {
  _metadata {
    key
    locale
    types
    displayName
    version
    changeset
    variation
    url {
      type
      base
      default
    }
  }
  _type: __typename
}
    `;
export const ImageMediaDataFragmentDoc : DocumentNode<Schema.ImageMediaDataFragment, unknown> = gql`
    fragment ImageMediaData on ImageMedia {
  AltText
}
    `;
export const VideoMediaDataFragmentDoc : DocumentNode<Schema.VideoMediaDataFragment, unknown> = gql`
    fragment VideoMediaData on VideoMedia {
  __typename
}
    `;
export const ButtonBlockPropertyDataFragmentDoc : DocumentNode<Schema.ButtonBlockPropertyDataFragment, unknown> = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  ButtonText
  ButtonUrl {
    type
    base
    default
  }
  ButtonClass
  ButtonType
  ButtonVariant
}
    `;
export const HeroBlockDataFragmentDoc : DocumentNode<Schema.HeroBlockDataFragment, unknown> = gql`
    fragment HeroBlockData on HeroBlock {
  HeroImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  Icon
  Eyebrow
  Heading
  SubHeading
  DescriptionRichText: Description {
    json
  }
  HeroColor
  HeroButton {
    ...ButtonBlockPropertyData
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}`;
export const QuoteBlockDataFragmentDoc : DocumentNode<Schema.QuoteBlockDataFragment, unknown> = gql`
    fragment QuoteBlockData on QuoteBlock {
  QuoteText
  QuoteColor
  QuoteProfilePicture {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  QuoteProfileName
  QuoteProfileLocation
  QuoteActive
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const CarouselBlockDataFragmentDoc : DocumentNode<Schema.CarouselBlockDataFragment, unknown> = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentData
    ...ImageMediaData
    ...VideoMediaData
    ...HeroBlockData
    ...QuoteBlockData
  }
}
    ${IContentDataFragmentDoc}
${ImageMediaDataFragmentDoc}
${VideoMediaDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${QuoteBlockDataFragmentDoc}`;
export const ArticleListElementDataFragmentDoc : DocumentNode<Schema.ArticleListElementDataFragment, unknown> = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
  topics
}
    `;
export const ButtonBlockDataFragmentDoc : DocumentNode<Schema.ButtonBlockDataFragment, unknown> = gql`
    fragment ButtonBlockData on ButtonBlock {
  ButtonText
  ButtonUrl {
    type
    base
    default
  }
  ButtonClass
  ButtonType
  ButtonVariant
}
    `;
export const CTAElementDataFragmentDoc : DocumentNode<Schema.CTAElementDataFragment, unknown> = gql`
    fragment CTAElementData on CTAElement {
  Text
  Link {
    type
    base
    default
  }
}
    `;
export const ContentRecsElementDataFragmentDoc : DocumentNode<Schema.ContentRecsElementDataFragment, unknown> = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const ImageElementPropertyDataFragmentDoc : DocumentNode<Schema.ImageElementPropertyDataFragment, unknown> = gql`
    fragment ImageElementPropertyData on ImageElementProperty {
  altText
  imageLink {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const GlobalHeaderDataFragmentDoc : DocumentNode<Schema.GlobalHeaderDataFragment, unknown> = gql`
    fragment GlobalHeaderData on GlobalHeader {
  LogoUrl {
    type
    base
    default
  }
  LogoImage {
    ...ImageElementPropertyData
  }
  NavText
}
    ${ImageElementPropertyDataFragmentDoc}`;
export const HeadingElementDataFragmentDoc : DocumentNode<Schema.HeadingElementDataFragment, unknown> = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const HztlCardComponentDataFragmentDoc : DocumentNode<Schema.HztlCardComponentDataFragment, unknown> = gql`
    fragment HztlCardComponentData on HztlCardComponent {
  Title
}
    `;
export const HztlPageSEOSettingsDataFragmentDoc : DocumentNode<Schema.HztlPageSEOSettingsDataFragment, unknown> = gql`
    fragment HztlPageSEOSettingsData on HztlPageSEOSettings {
  MetaTitle
  MetaDescription
}
    `;
export const HztlPromoDataFragmentDoc : DocumentNode<Schema.HztlPromoDataFragment, unknown> = gql`
    fragment HztlPromoData on HztlPromo {
  Title
  TextRichText: Text {
    json
  }
  Image {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const ImageElementDataFragmentDoc : DocumentNode<Schema.ImageElementDataFragment, unknown> = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const LandingHeaderDataFragmentDoc : DocumentNode<Schema.LandingHeaderDataFragment, unknown> = gql`
    fragment LandingHeaderData on LandingHeader {
  LogoUrlLink: LogoUrl {
    title
    text
    target
    url {
      type
      base
      default
    }
  }
  LogoImage {
    ...ImageElementPropertyData
  }
}
    ${ImageElementPropertyDataFragmentDoc}`;
export const MenuNavigationBlockDataFragmentDoc : DocumentNode<Schema.MenuNavigationBlockDataFragment, unknown> = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  MenuNavigationHeading
  NavigationLinks {
    title
    text
    target
    url {
      type
      base
      default
    }
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc : DocumentNode<Schema.MegaMenuGroupBlockDataFragment, unknown> = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  MenuMenuHeading
  MegaMenuUrl {
    type
    base
    default
  }
  MegaMenuContentArea {
    ...IContentData
    ...MenuNavigationBlockData
  }
}
    ${IContentDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}`;
export const LayoutSettingsBlockDataFragmentDoc : DocumentNode<Schema.LayoutSettingsBlockDataFragment, unknown> = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...IContentData
    ...MegaMenuGroupBlockData
  }
  contactInfoHeading
  serviceButtons {
    ...IContentData
    ...ButtonBlockData
  }
  contactInfo {
    json
  }
  footerMenus {
    ...IContentData
    ...MenuNavigationBlockData
  }
  copyright
  legalLinks {
    title
    text
    target
    url {
      type
      base
      default
    }
  }
  appIdentifiers
}
    ${MegaMenuGroupBlockDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${IContentDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}`;
export const OdpEmbedBlockDataFragmentDoc : DocumentNode<Schema.OdpEmbedBlockDataFragment, unknown> = gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const PageSeoSettingsDataFragmentDoc : DocumentNode<Schema.PageSeoSettingsDataFragment, unknown> = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  GraphType
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const ParagraphElementDataFragmentDoc : DocumentNode<Schema.ParagraphElementDataFragment, unknown> = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
  }
}
    `;
export const ProductDataFragmentDoc : DocumentNode<Schema.ProductDataFragment, unknown> = gql`
    fragment ProductData on Product {
  ProductName
  Description
  Price
  ProductImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const PromoCardDataFragmentDoc : DocumentNode<Schema.PromoCardDataFragment, unknown> = gql`
    fragment PromoCardData on PromoCard {
  Title
  Description
  LinkUrl
  LinkText
}
    `;
export const RichTextElementDataFragmentDoc : DocumentNode<Schema.RichTextElementDataFragment, unknown> = gql`
    fragment RichTextElementData on RichTextElement {
  text {
    json
  }
}
    `;
export const SampleHeroBannerDataFragmentDoc : DocumentNode<Schema.SampleHeroBannerDataFragment, unknown> = gql`
    fragment SampleHeroBannerData on SampleHeroBanner {
  headingText
  Descripition {
    json
  }
}
    `;
export const TestimonialElementDataFragmentDoc : DocumentNode<Schema.TestimonialElementDataFragment, unknown> = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  referenceTitle
  referenceText {
    json
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const TextBlockDataFragmentDoc : DocumentNode<Schema.TextBlockDataFragment, unknown> = gql`
    fragment TextBlockData on TextBlock {
  TextBlockOverline
  TextBlockHeading
  TextBlockHeadingSize
  TextBlockDescription {
    json
  }
  TextBlockWidth
  TextCenter
  TextClassName
}
    `;
export const VideoElementDataFragmentDoc : DocumentNode<Schema.VideoElementDataFragment, unknown> = gql`
    fragment VideoElementData on VideoElement {
  video {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  title
  placeholder {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const testDataFragmentDoc : DocumentNode<Schema.testDataFragment, unknown> = gql`
    fragment testData on test {
  __typename
}
    `;
export const ProductsDataFragmentDoc : DocumentNode<Schema.ProductsDataFragment, unknown> = gql`
    fragment ProductsData on Products {
  Heading
  Items {
    ...IContentData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...PromoCardData
    ...QuoteBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
  }
}
    ${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}`;
export const CompositionNodeDataFragmentDoc : DocumentNode<Schema.CompositionNodeDataFragment, unknown> = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const FormElementDataFragmentDoc : DocumentNode<Schema.FormElementDataFragment, unknown> = gql`
    fragment FormElementData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const BlankSectionDataFragmentDoc : DocumentNode<Schema.BlankSectionDataFragment, unknown> = gql`
    fragment BlankSectionData on BlankSection {
  __typename
}
    `;
export const ExperienceDataFragmentDoc : DocumentNode<Schema.ExperienceDataFragment, unknown> = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on CompositionComponentNode {
        component {
          ...IContentData
          ...CarouselBlockData
          ...HeroBlockData
          ...SampleHeroBannerData
        }
      }
      ... on CompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on CompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on CompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ... on CompositionComponentNode {
                    component {
                      ...IContentData
                      ...ProductsData
                      ...MegaMenuGroupBlockData
                      ...ArticleListElementData
                      ...CTAElementData
                      ...ContentRecsElementData
                      ...HeadingElementData
                      ...HztlCardComponentData
                      ...ImageElementData
                      ...OdpEmbedBlockData
                      ...ParagraphElementData
                      ...ProductData
                      ...RichTextElementData
                      ...SampleHeroBannerData
                      ...TestimonialElementData
                      ...VideoElementData
                    }
                  }
                  ... on CompositionStructureNode {
                    nodes {
                      ...CompositionNodeData
                      ... on CompositionComponentNode {
                        component {
                          ...IContentData
                          ...FormElementData
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        component {
          ...IContentData
          ...BlankSectionData
        }
      }
    }
  }
}
    ${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${ImageElementDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${VideoElementDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${FormElementDataFragmentDoc}
${IContentDataFragmentDoc}
${BlankSectionDataFragmentDoc}`;
export const BlankExperienceDataFragmentDoc : DocumentNode<Schema.BlankExperienceDataFragment, unknown> = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}`;
export const BlogSectionExperienceDataFragmentDoc : DocumentNode<Schema.BlogSectionExperienceDataFragment, unknown> = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  seo_data {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}`;
export const GHeaderDataFragmentDoc : DocumentNode<Schema.GHeaderDataFragment, unknown> = gql`
    fragment GHeaderData on GHeader {
  DesireHeader {
    ...IContentData
    ...GlobalHeaderData
    ...LandingHeaderData
  }
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    ${IContentDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}`;
export const AboutUsDataFragmentDoc : DocumentNode<Schema.AboutUsDataFragment, unknown> = gql`
    fragment AboutUsData on AboutUs {
  heading
  content {
    ...IContentData
    ...CTAElementData
  }
}
    ${IContentDataFragmentDoc}
${CTAElementDataFragmentDoc}`;
export const ContinueReadingComponentDataFragmentDoc : DocumentNode<Schema.ContinueReadingComponentDataFragment, unknown> = gql`
    fragment ContinueReadingComponentData on ContinueReadingComponent {
  topline
  shared
  heading
  content {
    ...IContentData
  }
}
    ${IContentDataFragmentDoc}`;
export const BlogPostPageDataFragmentDoc : DocumentNode<Schema.BlogPostPageDataFragment, unknown> = gql`
    fragment BlogPostPageData on BlogPostPage {
  Heading
  ArticleSubHeading
  Topic
  BlogPostBody {
    json
  }
  ArticleAuthor
  BlogPostPromoImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  continueReading {
    ...IContentData
    ...ArticleListElementData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...CTAElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...ParagraphElementData
    ...ProductData
    ...ProductsData
    ...PromoCardData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...testData
    ...TestimonialElementData
    ...VideoElementData
    ...ButtonBlockData
    ...CarouselBlockData
    ...HeroBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...QuoteBlockData
    ...TextBlockData
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CTAElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductsDataFragmentDoc}
${PromoCardDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${testDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${TextBlockDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const GenericMediaDataFragmentDoc : DocumentNode<Schema.GenericMediaDataFragment, unknown> = gql`
    fragment GenericMediaData on GenericMedia {
  __typename
}
    `;
export const SampleHeroBannerPropertyDataFragmentDoc : DocumentNode<Schema.SampleHeroBannerPropertyDataFragment, unknown> = gql`
    fragment SampleHeroBannerPropertyData on SampleHeroBannerProperty {
  headingText
  Descripition {
    json
  }
}
    `;
export const HomePageDataFragmentDoc : DocumentNode<Schema.HomePageDataFragment, unknown> = gql`
    fragment HomePageData on HomePage {
  Header {
    ...IContentData
    ...ProductsData
    ...MegaMenuGroupBlockData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...PromoCardData
    ...QuoteBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
  }
  Subheader
  Body {
    ...IContentData
    ...ArticleListElementData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...CTAElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...ParagraphElementData
    ...ProductData
    ...ProductsData
    ...PromoCardData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...testData
    ...TestimonialElementData
    ...VideoElementData
    ...ButtonBlockData
    ...CarouselBlockData
    ...HeroBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...QuoteBlockData
    ...TextBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...ImageMediaData
    ...GenericMediaData
  }
  Footer {
    ...IContentData
    ...ProductsData
    ...MegaMenuGroupBlockData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...PromoCardData
    ...QuoteBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
  }
  sampleHeroBannerBlock {
    ...SampleHeroBannerPropertyData
  }
}
    ${ContinueReadingComponentDataFragmentDoc}
${ImageMediaDataFragmentDoc}
${GenericMediaDataFragmentDoc}
${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${SampleHeroBannerPropertyDataFragmentDoc}`;
export const LandingPageDataFragmentDoc : DocumentNode<Schema.LandingPageDataFragment, unknown> = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...IContentData
    ...ProductsData
    ...MegaMenuGroupBlockData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...PromoCardData
    ...QuoteBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
  }
  MainContentArea {
    ...IContentData
    ...ProductsData
    ...MegaMenuGroupBlockData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...LandingHeaderData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...PromoCardData
    ...QuoteBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const IElementDataFragmentDoc : DocumentNode<Schema.IElementDataFragment, unknown> = gql`
    fragment IElementData on _IComponent {
  _metadata {
    key
    locale
    types
    displayName
    version
    url {
      type
      base
      default
    }
  }
  _type: __typename
}
    `;
export const LinkDataFragmentDoc : DocumentNode<Schema.LinkDataFragment, unknown> = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
}
    `;
export const ReferenceDataFragmentDoc : DocumentNode<Schema.ReferenceDataFragment, unknown> = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    type
    base
    default
  }
}
    `;
export const IContentInfoFragmentDoc : DocumentNode<Schema.IContentInfoFragment, unknown> = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    type
    base
    default
  }
}
    `;
export const IContentListItemFragmentDoc : DocumentNode<Schema.IContentListItemFragment, unknown> = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const SectionCompositionDataFragmentDoc : DocumentNode<Schema.SectionCompositionDataFragment, unknown> = gql`
    fragment SectionCompositionData on _ISection {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on CompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on CompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on CompositionComponentNode {
                component {
                  ...IContentData
                  ...ProductsData
                  ...MegaMenuGroupBlockData
                  ...ArticleListElementData
                  ...CTAElementData
                  ...ContentRecsElementData
                  ...HeadingElementData
                  ...HztlCardComponentData
                  ...ImageElementData
                  ...OdpEmbedBlockData
                  ...ParagraphElementData
                  ...ProductData
                  ...RichTextElementData
                  ...SampleHeroBannerData
                  ...TestimonialElementData
                  ...VideoElementData
                }
              }
              ... on CompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ... on CompositionComponentNode {
                    component {
                      ...IContentData
                      ...FormElementData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${ImageElementDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${VideoElementDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${IContentDataFragmentDoc}
${FormElementDataFragmentDoc}`;
export const CompositionComponentNodeFragmentDoc : DocumentNode<Schema.CompositionComponentNodeFragment, unknown> = gql`
    fragment CompositionComponentNode on CompositionComponentNode {
  component {
    ...IContentData
    ...FormElementData
    ...ProductsData
    ...MegaMenuGroupBlockData
    ...ArticleListElementData
    ...CTAElementData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HztlCardComponentData
    ...ImageElementData
    ...OdpEmbedBlockData
    ...ParagraphElementData
    ...ProductData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...VideoElementData
  }
}
    ${IContentDataFragmentDoc}
${FormElementDataFragmentDoc}
${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${ImageElementDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${VideoElementDataFragmentDoc}`;
export const CompositionStructureNodeFragmentDoc : DocumentNode<Schema.CompositionStructureNodeFragment, unknown> = gql`
    fragment CompositionStructureNode on ICompositionStructureNode {
  nodes {
    ...CompositionNodeData
    ...CompositionStructureNode
    ...CompositionComponentNode
  }
}
    ${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeFragmentDoc}`;
export const LinkItemDataFragmentDoc : DocumentNode<Schema.LinkItemDataFragment, unknown> = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    type
    base
    default
  }
}
    `;
export const BlockDataFragmentDoc : DocumentNode<Schema.BlockDataFragment, unknown> = gql`
    fragment BlockData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const ComponentDataFragmentDoc : DocumentNode<Schema.ComponentDataFragment, unknown> = gql`
    fragment ComponentData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const ElementDataFragmentDoc : DocumentNode<Schema.ElementDataFragment, unknown> = gql`
    fragment ElementData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const MediaDataFragmentDoc : DocumentNode<Schema.MediaDataFragment, unknown> = gql`
    fragment MediaData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const PageDataFragmentDoc : DocumentNode<Schema.PageDataFragment, unknown> = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const SectionDataFragmentDoc : DocumentNode<Schema.SectionDataFragment, unknown> = gql`
    fragment SectionData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const SectionElementDataFragmentDoc : DocumentNode<Schema.SectionElementDataFragment, unknown> = gql`
    fragment SectionElementData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const getBlankExperienceDataDocument = gql`
    query getBlankExperienceData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlankExperience(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      ...ExperienceData
      BlankExperienceSeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${ExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getBlogSectionExperienceDataDocument = gql`
    query getBlogSectionExperienceData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlogSectionExperience(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      ...ExperienceData
      seo_data {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${ExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getGHeaderDataDocument = gql`
    query getGHeaderData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: GHeader(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      ...ExperienceData
      DesireHeader {
        ...IContentData
        ...GlobalHeaderData
        ...LandingHeaderData
      }
      BlankExperienceSeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${ExperienceDataFragmentDoc}
${IContentDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getAboutUsDataDocument = gql`
    query getAboutUsData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: AboutUs(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      heading
      content {
        ...IContentData
        ...CTAElementData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${CTAElementDataFragmentDoc}`;
export const getBlogPostPageDataDocument = gql`
    query getBlogPostPageData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlogPostPage(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      Heading
      ArticleSubHeading
      Topic
      BlogPostBody {
        json
      }
      ArticleAuthor
      BlogPostPromoImage {
        key
        url {
          type
          base
          default
        }
        item {
          __typename
          ...CmpImageAssetInfo
          ...CmpVideoAssetInfo
        }
      }
      continueReading {
        ...IContentData
        ...ArticleListElementData
        ...ContentRecsElementData
        ...ContinueReadingComponentData
        ...CTAElementData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...LandingHeaderData
        ...ParagraphElementData
        ...ProductData
        ...ProductsData
        ...PromoCardData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...testData
        ...TestimonialElementData
        ...VideoElementData
        ...ButtonBlockData
        ...CarouselBlockData
        ...HeroBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...QuoteBlockData
        ...TextBlockData
      }
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CTAElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductsDataFragmentDoc}
${PromoCardDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${testDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${TextBlockDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getHomePageDataDocument = gql`
    query getHomePageData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: HomePage(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      Header {
        ...IContentData
        ...ProductsData
        ...MegaMenuGroupBlockData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...LandingHeaderData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...PromoCardData
        ...QuoteBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...VideoElementData
        ...testData
      }
      Subheader
      Body {
        ...IContentData
        ...ArticleListElementData
        ...ContentRecsElementData
        ...ContinueReadingComponentData
        ...CTAElementData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...LandingHeaderData
        ...ParagraphElementData
        ...ProductData
        ...ProductsData
        ...PromoCardData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...testData
        ...TestimonialElementData
        ...VideoElementData
        ...ButtonBlockData
        ...CarouselBlockData
        ...HeroBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...QuoteBlockData
        ...TextBlockData
        ...LayoutSettingsBlockData
        ...MegaMenuGroupBlockData
        ...ImageMediaData
        ...GenericMediaData
      }
      Footer {
        ...IContentData
        ...ProductsData
        ...MegaMenuGroupBlockData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...LandingHeaderData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...PromoCardData
        ...QuoteBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...VideoElementData
        ...testData
      }
      sampleHeroBannerBlock {
        ...SampleHeroBannerPropertyData
      }
    }
  }
}
    ${ContinueReadingComponentDataFragmentDoc}
${ImageMediaDataFragmentDoc}
${GenericMediaDataFragmentDoc}
${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${SampleHeroBannerPropertyDataFragmentDoc}`;
export const getLandingPageDataDocument = gql`
    query getLandingPageData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: LandingPage(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      TopContentArea {
        ...IContentData
        ...ProductsData
        ...MegaMenuGroupBlockData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...LandingHeaderData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...PromoCardData
        ...QuoteBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...VideoElementData
        ...testData
      }
      MainContentArea {
        ...IContentData
        ...ProductsData
        ...MegaMenuGroupBlockData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...LandingHeaderData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...PromoCardData
        ...QuoteBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...VideoElementData
        ...testData
      }
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getBlankSectionDataDocument = gql`
    query getBlankSectionData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlankSection(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      ...SectionCompositionData
    }
  }
}
    ${SectionCompositionDataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBlankExperienceData(variables: Schema.getBlankExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceDataQuery>({ document: getBlankExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankExperienceData', 'query', variables);
    },
    getBlogSectionExperienceData(variables: Schema.getBlogSectionExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogSectionExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceDataQuery>({ document: getBlogSectionExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogSectionExperienceData', 'query', variables);
    },
    getGHeaderData(variables: Schema.getGHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getGHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getGHeaderDataQuery>({ document: getGHeaderDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getGHeaderData', 'query', variables);
    },
    getAboutUsData(variables: Schema.getAboutUsDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getAboutUsDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getAboutUsDataQuery>({ document: getAboutUsDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getAboutUsData', 'query', variables);
    },
    getBlogPostPageData(variables: Schema.getBlogPostPageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogPostPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageDataQuery>({ document: getBlogPostPageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogPostPageData', 'query', variables);
    },
    getHomePageData(variables: Schema.getHomePageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getHomePageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHomePageDataQuery>({ document: getHomePageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getHomePageData', 'query', variables);
    },
    getLandingPageData(variables: Schema.getLandingPageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLandingPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageDataQuery>({ document: getLandingPageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLandingPageData', 'query', variables);
    },
    getBlankSectionData(variables: Schema.getBlankSectionDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankSectionDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankSectionDataQuery>({ document: getBlankSectionDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankSectionData', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;