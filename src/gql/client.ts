// This is an auto-generated file, do not modify
import type * as Schema from "./graphql";
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
export const LanguagePromoBlockDataFragmentDoc : DocumentNode<Schema.LanguagePromoBlockDataFragment, unknown> = gql`
    fragment LanguagePromoBlockData on LanguagePromoBlock {
  Title
  DescriptionRichText: Description {
    json
  }
  CallToAction
  CallToActionUrl
  Theme
}
    `;
export const ProductCardDataFragmentDoc : DocumentNode<Schema.ProductCardDataFragment, unknown> = gql`
    fragment ProductCardData on ProductCard {
  BadgeLabel
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
  Category
  ProductName
  Status
  Description
  PriceString: Price
  ProductUrl
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const NewProductsBlockDataFragmentDoc : DocumentNode<Schema.NewProductsBlockDataFragment, unknown> = gql`
    fragment NewProductsBlockData on NewProductsBlock {
  Heading
  ViewAllLabel
  ViewAllUrl
  Products {
    ...IContentData
    ...ProductCardData
  }
}
    ${IContentDataFragmentDoc}
${ProductCardDataFragmentDoc}`;
export const TitleDescriptionTiDataFragmentDoc : DocumentNode<Schema.TitleDescriptionTiDataFragment, unknown> = gql`
    fragment TitleDescriptionTiData on TitleDescriptionTi {
  Heading
  Description
}
    `;
export const bk_heroDataFragmentDoc : DocumentNode<Schema.bk_heroDataFragment, unknown> = gql`
    fragment bk_heroData on bk_hero {
  Heading
  DescriptionRichText: Description {
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
  Link {
    type
    base
    default
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
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
export const BKCardDataFragmentDoc : DocumentNode<Schema.BKCardDataFragment, unknown> = gql`
    fragment BKCardData on BKCard {
  Heading
}
    `;
export const BKCardListDataFragmentDoc : DocumentNode<Schema.BKCardListDataFragment, unknown> = gql`
    fragment BKCardListData on BKCardList {
  Heading
  CardList {
    ...IContentData
    ...BKCardData
  }
}
    ${IContentDataFragmentDoc}
${BKCardDataFragmentDoc}`;
export const LabelInputDataFragmentDoc : DocumentNode<Schema.LabelInputDataFragment, unknown> = gql`
    fragment LabelInputData on LabelInput {
  label
  input
}
    `;
export const MobileCTABlockDataFragmentDoc : DocumentNode<Schema.MobileCTABlockDataFragment, unknown> = gql`
    fragment MobileCTABlockData on MobileCTABlock {
  MobileCTALink {
    type
    base
    default
  }
}
    `;
export const MobileDetailCardDataFragmentDoc : DocumentNode<Schema.MobileDetailCardDataFragment, unknown> = gql`
    fragment MobileDetailCardData on MobileDetailCard {
  Mobile
}
    `;
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
export const PPSectionDataFragmentDoc : DocumentNode<Schema.PPSectionDataFragment, unknown> = gql`
    fragment PPSectionData on PPSection {
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
          ...LanguagePromoBlockData
          ...MobileCTABlockData
          ...MobileDetailCardData
          ...NewProductsBlockData
          ...SampleHeroBannerData
          ...TitleDescriptionTiData
          ...bk_heroData
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
                      ...BKCardListData
                      ...BKCardData
                      ...MegaMenuGroupBlockData
                      ...ArticleListElementData
                      ...CTAElementData
                      ...ContentRecsElementData
                      ...HeadingElementData
                      ...HztlCardComponentData
                      ...ImageElementData
                      ...LabelInputData
                      ...MobileCTABlockData
                      ...MobileDetailCardData
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
          ...PPSectionData
        }
      }
    }
  }
}
    ${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${bk_heroDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LabelInputDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
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
${BlankSectionDataFragmentDoc}
${PPSectionDataFragmentDoc}`;
export const BK_ExperienceDataFragmentDoc : DocumentNode<Schema.BK_ExperienceDataFragment, unknown> = gql`
    fragment BK_ExperienceData on BK_Experience {
  ...ExperienceData
}
    ${ExperienceDataFragmentDoc}`;
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
export const PPExperienceDataFragmentDoc : DocumentNode<Schema.PPExperienceDataFragment, unknown> = gql`
    fragment PPExperienceData on PPExperience {
  ...ExperienceData
}
    ${ExperienceDataFragmentDoc}`;
export const CTATiDataFragmentDoc : DocumentNode<Schema.CTATiDataFragment, unknown> = gql`
    fragment CTATiData on CTATi {
  CTAUrl: CTA {
    type
    base
    default
  }
}
    `;
export const FaqItemBlockDataFragmentDoc : DocumentNode<Schema.FaqItemBlockDataFragment, unknown> = gql`
    fragment FaqItemBlockData on FaqItemBlock {
  Question
  Answer {
    json
  }
}
    `;
export const FaqBlockDataFragmentDoc : DocumentNode<Schema.FaqBlockDataFragment, unknown> = gql`
    fragment FaqBlockData on FaqBlock {
  Heading
  SubHeading
  FaqItems {
    ...IContentData
    ...FaqItemBlockData
  }
}
    ${IContentDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}`;
export const ImageTiDataFragmentDoc : DocumentNode<Schema.ImageTiDataFragment, unknown> = gql`
    fragment ImageTiData on ImageTi {
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
export const MobileDemoBlockDataFragmentDoc : DocumentNode<Schema.MobileDemoBlockDataFragment, unknown> = gql`
    fragment MobileDemoBlockData on MobileDemoBlock {
  __typename
}
    `;
export const MyBannerBlockDataFragmentDoc : DocumentNode<Schema.MyBannerBlockDataFragment, unknown> = gql`
    fragment MyBannerBlockData on MyBannerBlock {
  Title
  Description
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
export const RKDDTestingBlockDataFragmentDoc : DocumentNode<Schema.RKDDTestingBlockDataFragment, unknown> = gql`
    fragment RKDDTestingBlockData on RKDDTestingBlock {
  __typename
}
    `;
export const testbannerDataFragmentDoc : DocumentNode<Schema.testbannerDataFragment, unknown> = gql`
    fragment testbannerData on testbanner {
  Heading
}
    `;
export const AUHeaderDataFragmentDoc : DocumentNode<Schema.AUHeaderDataFragment, unknown> = gql`
    fragment AUHeaderData on AUHeader {
  heading
  subTitle
  content {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
export const AboutUsDataFragmentDoc : DocumentNode<Schema.AboutUsDataFragment, unknown> = gql`
    fragment AboutUsData on AboutUs {
  heading
  content {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
  categoryChoice
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
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
    ...AUHeaderData
    ...BKCardData
    ...BKCardListData
    ...bk_heroData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...CTAElementData
    ...CTATiData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...RichTextElementData
    ...RKDDTestingBlockData
    ...SampleHeroBannerData
    ...testData
    ...testbannerData
    ...TestimonialElementData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...ButtonBlockData
    ...CarouselBlockData
    ...HeroBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...QuoteBlockData
    ...TextBlockData
    ...LanguagePromoBlockData
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${BKCardDataFragmentDoc}
${BKCardListDataFragmentDoc}
${bk_heroDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${TextBlockDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
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
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
  Subheader
  Body {
    ...IContentData
    ...ArticleListElementData
    ...AUHeaderData
    ...BKCardData
    ...BKCardListData
    ...bk_heroData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...CTAElementData
    ...CTATiData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...ProductsData
    ...PromoCardData
    ...RichTextElementData
    ...RKDDTestingBlockData
    ...SampleHeroBannerData
    ...testData
    ...testbannerData
    ...TestimonialElementData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...ButtonBlockData
    ...CarouselBlockData
    ...HeroBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...QuoteBlockData
    ...TextBlockData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...ImageMediaData
    ...GenericMediaData
  }
  Footer {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
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
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}
${SampleHeroBannerPropertyDataFragmentDoc}`;
export const LandingPageDataFragmentDoc : DocumentNode<Schema.LandingPageDataFragment, unknown> = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
  MainContentArea {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const NPHomePageDataFragmentDoc : DocumentNode<Schema.NPHomePageDataFragment, unknown> = gql`
    fragment NPHomePageData on NPHomePage {
  NPTitle
  NPMain {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
export const SecondTiPageDataFragmentDoc : DocumentNode<Schema.SecondTiPageDataFragment, unknown> = gql`
    fragment SecondTiPageData on SecondTiPage {
  SecondPageTiContentArea {
    ...IContentData
    ...ProductsData
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...AUHeaderData
    ...ArticleListElementData
    ...ButtonBlockData
    ...CTAElementData
    ...CTATiData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...FaqBlockData
    ...FaqItemBlockData
    ...GlobalHeaderData
    ...HeadingElementData
    ...HeroBlockData
    ...HztlCardComponentData
    ...HztlPageSEOSettingsData
    ...HztlPromoData
    ...ImageElementData
    ...ImageTiData
    ...LabelInputData
    ...LandingHeaderData
    ...LanguagePromoBlockData
    ...LayoutSettingsBlockData
    ...MenuNavigationBlockData
    ...MobileCTABlockData
    ...MobileDemoBlockData
    ...MobileDetailCardData
    ...MyBannerBlockData
    ...NewProductsBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductData
    ...ProductCardData
    ...PromoCardData
    ...QuoteBlockData
    ...RKDDTestingBlockData
    ...RichTextElementData
    ...SampleHeroBannerData
    ...TestimonialElementData
    ...TextBlockData
    ...TitleDescriptionTiData
    ...VideoElementData
    ...bk_heroData
    ...testData
    ...testbannerData
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
export const TitleDescriptionTiPropertyDataFragmentDoc : DocumentNode<Schema.TitleDescriptionTiPropertyDataFragment, unknown> = gql`
    fragment TitleDescriptionTiPropertyData on TitleDescriptionTiProperty {
  Heading
  Description
}
    `;
export const CTATiPropertyDataFragmentDoc : DocumentNode<Schema.CTATiPropertyDataFragment, unknown> = gql`
    fragment CTATiPropertyData on CTATiProperty {
  CTAUrl: CTA {
    type
    base
    default
  }
}
    `;
export const ImageTiPropertyDataFragmentDoc : DocumentNode<Schema.ImageTiPropertyDataFragment, unknown> = gql`
    fragment ImageTiPropertyData on ImageTiProperty {
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
export const TiPageTemplateDataFragmentDoc : DocumentNode<Schema.TiPageTemplateDataFragment, unknown> = gql`
    fragment TiPageTemplateData on TiPageTemplate {
  TitleDescription {
    ...TitleDescriptionTiPropertyData
  }
  CTA {
    ...CTATiPropertyData
  }
  ImageComponent: Image {
    ...ImageTiPropertyData
  }
}
    ${TitleDescriptionTiPropertyDataFragmentDoc}
${CTATiPropertyDataFragmentDoc}
${ImageTiPropertyDataFragmentDoc}`;
export const mobileDetailDataFragmentDoc : DocumentNode<Schema.mobileDetailDataFragment, unknown> = gql`
    fragment mobileDetailData on mobileDetail {
  MobileDeatailBlock
}
    `;
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
                  ...BKCardListData
                  ...BKCardData
                  ...MegaMenuGroupBlockData
                  ...ArticleListElementData
                  ...CTAElementData
                  ...ContentRecsElementData
                  ...HeadingElementData
                  ...HztlCardComponentData
                  ...ImageElementData
                  ...LabelInputData
                  ...MobileCTABlockData
                  ...MobileDetailCardData
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
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LabelInputDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
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
    ...BKCardListData
    ...BKCardData
    ...MegaMenuGroupBlockData
    ...ArticleListElementData
    ...CTAElementData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HztlCardComponentData
    ...ImageElementData
    ...LabelInputData
    ...MobileCTABlockData
    ...MobileDetailCardData
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
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LabelInputDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
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
export const getBK_ExperienceDataDocument = gql`
    query getBK_ExperienceData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BK_Experience(
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
    }
  }
}
    ${ExperienceDataFragmentDoc}`;
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
export const getPPExperienceDataDocument = gql`
    query getPPExperienceData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: PPExperience(
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
    }
  }
}
    ${ExperienceDataFragmentDoc}`;
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
        ...ProductsData
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
      }
      categoryChoice
    }
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
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
        ...AUHeaderData
        ...BKCardData
        ...BKCardListData
        ...bk_heroData
        ...ContentRecsElementData
        ...ContinueReadingComponentData
        ...CTAElementData
        ...CTATiData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...RichTextElementData
        ...RKDDTestingBlockData
        ...SampleHeroBannerData
        ...testData
        ...testbannerData
        ...TestimonialElementData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...ButtonBlockData
        ...CarouselBlockData
        ...HeroBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...QuoteBlockData
        ...TextBlockData
        ...LanguagePromoBlockData
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
${AUHeaderDataFragmentDoc}
${BKCardDataFragmentDoc}
${BKCardListDataFragmentDoc}
${bk_heroDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${TextBlockDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
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
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
      }
      Subheader
      Body {
        ...IContentData
        ...ArticleListElementData
        ...AUHeaderData
        ...BKCardData
        ...BKCardListData
        ...bk_heroData
        ...ContentRecsElementData
        ...ContinueReadingComponentData
        ...CTAElementData
        ...CTATiData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...ProductsData
        ...PromoCardData
        ...RichTextElementData
        ...RKDDTestingBlockData
        ...SampleHeroBannerData
        ...testData
        ...testbannerData
        ...TestimonialElementData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...ButtonBlockData
        ...CarouselBlockData
        ...HeroBlockData
        ...MenuNavigationBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...QuoteBlockData
        ...TextBlockData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MegaMenuGroupBlockData
        ...ImageMediaData
        ...GenericMediaData
      }
      Footer {
        ...IContentData
        ...ProductsData
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
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
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}
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
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
      }
      MainContentArea {
        ...IContentData
        ...ProductsData
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
      }
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getNPHomePageDataDocument = gql`
    query getNPHomePageData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: NPHomePage(
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
      NPTitle
      NPMain {
        ...IContentData
        ...ProductsData
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
export const getSecondTiPageDataDocument = gql`
    query getSecondTiPageData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: SecondTiPage(
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
      SecondPageTiContentArea {
        ...IContentData
        ...ProductsData
        ...BKCardListData
        ...BKCardData
        ...MegaMenuGroupBlockData
        ...AUHeaderData
        ...ArticleListElementData
        ...ButtonBlockData
        ...CTAElementData
        ...CTATiData
        ...CarouselBlockData
        ...ContentRecsElementData
        ...FaqBlockData
        ...FaqItemBlockData
        ...GlobalHeaderData
        ...HeadingElementData
        ...HeroBlockData
        ...HztlCardComponentData
        ...HztlPageSEOSettingsData
        ...HztlPromoData
        ...ImageElementData
        ...ImageTiData
        ...LabelInputData
        ...LandingHeaderData
        ...LanguagePromoBlockData
        ...LayoutSettingsBlockData
        ...MenuNavigationBlockData
        ...MobileCTABlockData
        ...MobileDemoBlockData
        ...MobileDetailCardData
        ...MyBannerBlockData
        ...NewProductsBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...ProductData
        ...ProductCardData
        ...PromoCardData
        ...QuoteBlockData
        ...RKDDTestingBlockData
        ...RichTextElementData
        ...SampleHeroBannerData
        ...TestimonialElementData
        ...TextBlockData
        ...TitleDescriptionTiData
        ...VideoElementData
        ...bk_heroData
        ...testData
        ...testbannerData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${ProductsDataFragmentDoc}
${BKCardListDataFragmentDoc}
${BKCardDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${AUHeaderDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CTATiDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${FaqBlockDataFragmentDoc}
${FaqItemBlockDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${HztlCardComponentDataFragmentDoc}
${HztlPageSEOSettingsDataFragmentDoc}
${HztlPromoDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ImageTiDataFragmentDoc}
${LabelInputDataFragmentDoc}
${LandingHeaderDataFragmentDoc}
${LanguagePromoBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MobileCTABlockDataFragmentDoc}
${MobileDemoBlockDataFragmentDoc}
${MobileDetailCardDataFragmentDoc}
${MyBannerBlockDataFragmentDoc}
${NewProductsBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductDataFragmentDoc}
${ProductCardDataFragmentDoc}
${PromoCardDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RKDDTestingBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SampleHeroBannerDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TitleDescriptionTiDataFragmentDoc}
${VideoElementDataFragmentDoc}
${bk_heroDataFragmentDoc}
${testDataFragmentDoc}
${testbannerDataFragmentDoc}`;
export const getTiPageTemplateDataDocument = gql`
    query getTiPageTemplateData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: TiPageTemplate(
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
      TitleDescription {
        ...TitleDescriptionTiPropertyData
      }
      CTA {
        ...CTATiPropertyData
      }
      ImageComponent: Image {
        ...ImageTiPropertyData
      }
    }
  }
}
    ${TitleDescriptionTiPropertyDataFragmentDoc}
${CTATiPropertyDataFragmentDoc}
${ImageTiPropertyDataFragmentDoc}`;
export const getmobileDetailDataDocument = gql`
    query getmobileDetailData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: mobileDetail(
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
      MobileDeatailBlock
    }
  }
}
    `;
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
export const getPPSectionDataDocument = gql`
    query getPPSectionData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: PPSection(
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
    getBK_ExperienceData(variables: Schema.getBK_ExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBK_ExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBK_ExperienceDataQuery>({ document: getBK_ExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBK_ExperienceData', 'query', variables);
    },
    getBlankExperienceData(variables: Schema.getBlankExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceDataQuery>({ document: getBlankExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankExperienceData', 'query', variables);
    },
    getBlogSectionExperienceData(variables: Schema.getBlogSectionExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogSectionExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceDataQuery>({ document: getBlogSectionExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogSectionExperienceData', 'query', variables);
    },
    getGHeaderData(variables: Schema.getGHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getGHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getGHeaderDataQuery>({ document: getGHeaderDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getGHeaderData', 'query', variables);
    },
    getPPExperienceData(variables: Schema.getPPExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getPPExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getPPExperienceDataQuery>({ document: getPPExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getPPExperienceData', 'query', variables);
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
    getNPHomePageData(variables: Schema.getNPHomePageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getNPHomePageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getNPHomePageDataQuery>({ document: getNPHomePageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getNPHomePageData', 'query', variables);
    },
    getSecondTiPageData(variables: Schema.getSecondTiPageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getSecondTiPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSecondTiPageDataQuery>({ document: getSecondTiPageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getSecondTiPageData', 'query', variables);
    },
    getTiPageTemplateData(variables: Schema.getTiPageTemplateDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getTiPageTemplateDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getTiPageTemplateDataQuery>({ document: getTiPageTemplateDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getTiPageTemplateData', 'query', variables);
    },
    getmobileDetailData(variables: Schema.getmobileDetailDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getmobileDetailDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getmobileDetailDataQuery>({ document: getmobileDetailDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getmobileDetailData', 'query', variables);
    },
    getBlankSectionData(variables: Schema.getBlankSectionDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankSectionDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankSectionDataQuery>({ document: getBlankSectionDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankSectionData', 'query', variables);
    },
    getPPSectionData(variables: Schema.getPPSectionDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getPPSectionDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getPPSectionDataQuery>({ document: getPPSectionDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getPPSectionData', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;