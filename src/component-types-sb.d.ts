import {StoryblokStory} from 'storyblok-generate-ts'

export interface ArticleOverviewPageStoryblok {
  headline?: string;
  _uid: string;
  component: "article-overview-page";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ArticlePageStoryblok {
  image?: AssetStoryblok;
  headline?: string;
  subheadline?: string;
  teaser?: string;
  text?: RichtextStoryblok;
  author?: StoryblokStory<AuthorStoryblok> | string;
  categories?: (StoryblokStory<CategoryStoryblok> | string)[];
  _uid: string;
  component: "article-page";
  [k: string]: any;
}

export interface AuthorStoryblok {
  profile_picture?: AssetStoryblok;
  description?: string;
  _uid: string;
  component: "author";
  [k: string]: any;
}

export interface BadgeStoryblok {
  badge?: AssetStoryblok;
  _uid: string;
  component: "badge";
  [k: string]: any;
}

export interface BannerStoryblok {
  background_image?: AssetStoryblok;
  background_video?: AssetStoryblok;
  overlay?: number | string;
  text_color?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  buttons?: ButtonStoryblok[];
  full_width?: boolean;
  _uid: string;
  component: "banner";
  [k: string]: any;
}

export interface BannerReferenceStoryblok {
  banners?: (StoryblokStory<BannerStoryblok> | string)[];
  _uid: string;
  component: "banner-reference";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  style?: "default" | "ghost" | "semi";
  background_color?: number | string;
  text_color?: "light" | "dark";
  size?: "small" | "medium" | "large";
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  label?: string;
  border_radius?: "default" | "small";
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CategoryStoryblok {
  headline?: string;
  description?: string;
  _uid: string;
  component: "category";
  [k: string]: any;
}

export interface ComplexHeroSectionStoryblok {
  background_color?: number | string;
  reverse_layout?: boolean;
  headline?: string;
  lead?: string;
  buttons?: ButtonStoryblok[];
  labels?: LabelStoryblok[];
  badges?: BadgeStoryblok[];
  enable_composed_image?: boolean;
  images?: any;
  image_1?: AssetStoryblok;
  image_2?: AssetStoryblok;
  image_3?: AssetStoryblok;
  image_4?: AssetStoryblok;
  _uid: string;
  component: "complex-hero-section";
  [k: string]: any;
}

export interface DefaultPageStoryblok {
  body?: (
    | BannerStoryblok
    | BannerReferenceStoryblok
    | ComplexHeroSectionStoryblok
    | FeaturedArticlesSectionStoryblok
    | FormSectionStoryblok
    | GridSectionStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | ListStoryblok
    | PersonalizedSectionStoryblok
    | SingleProductSectionStoryblok
    | TabbedContentSectionStoryblok
    | TextSectionStoryblok
    | TwoColImageTextSectionStoryblok
  )[];
  _uid: string;
  component: "default-page";
  [k: string]: any;
}

export interface FeaturedArticlesSectionStoryblok {
  cols?: "2" | "3" | "4";
  background_color?: number | string;
  headline?: string;
  lead?: string;
  articles?: (StoryblokStory<ArticlePageStoryblok> | string)[];
  _uid: string;
  component: "featured-articles-section";
  [k: string]: any;
}

export interface FormSectionStoryblok {
  headline?: string;
  lead?: string;
  form?: "contact" | "newsletter";
  text_color?: "light" | "dark";
  background_color?: number | string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "form-section";
  [k: string]: any;
}

export interface GridCardStoryblok {
  label?: string;
  text?: string;
  button?: ButtonStoryblok[];
  icon?: AssetStoryblok;
  icon_width?: "80" | "160" | "240";
  text_color?: "light" | "dark";
  _uid: string;
  component: "grid-card";
  [k: string]: any;
}

export interface GridSectionStoryblok {
  cards?: (GridCardStoryblok | PriceCardStoryblok)[];
  cols?: "2" | "3" | "4";
  headline?: string;
  lead?: string;
  background_color?: number | string;
  _uid: string;
  component: "grid-section";
  [k: string]: any;
}

export interface HeroSectionStoryblok {
  headline?: string;
  text_color?: "light" | "dark";
  subheadline?: string;
  buttons?: ButtonStoryblok[];
  horizontal_alignment?: "left" | "center";
  vertical_alignment?: "start" | "center" | "end";
  full_height?: boolean;
  background_image?: AssetStoryblok;
  background_video?: AssetStoryblok;
  overlay?: number | string;
  _uid: string;
  component: "hero-section";
  [k: string]: any;
}

export interface ImageTextSectionStoryblok {
  headline?: string;
  text?: RichtextStoryblok;
  button?: ButtonStoryblok[];
  image?: AssetStoryblok;
  reverse_layout?: boolean;
  background_color?: number | string;
  image_layout?: "proportional" | "fixed-height";
  _uid: string;
  component: "image-text-section";
  [k: string]: any;
}

export interface LabelStoryblok {
  label?: string;
  description?: string;
  _uid: string;
  component: "label";
  [k: string]: any;
}

export interface ListStoryblok {
  name?: string;
  items?: TextSectionStoryblok[];
  _uid: string;
  component: "List";
  [k: string]: any;
}

export interface NavItemStoryblok {
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  label?: string;
  _uid: string;
  component: "nav-item";
  [k: string]: any;
}

export interface PersonalizedSectionStoryblok {
  preview?: "new_visitor" | "returning_visitor";
  returning_visitor?: any;
  returning_visitor_blocks?: (
    | BannerStoryblok
    | BannerReferenceStoryblok
    | ComplexHeroSectionStoryblok
    | FeaturedArticlesSectionStoryblok
    | FormSectionStoryblok
    | GridSectionStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | ListStoryblok
    | PersonalizedSectionStoryblok
    | SingleProductSectionStoryblok
    | TabbedContentSectionStoryblok
    | TextSectionStoryblok
    | TwoColImageTextSectionStoryblok
  )[];
  new_visitor?: any;
  new_visitor_blocks?: (
    | BannerStoryblok
    | BannerReferenceStoryblok
    | ComplexHeroSectionStoryblok
    | FeaturedArticlesSectionStoryblok
    | FormSectionStoryblok
    | GridSectionStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | ListStoryblok
    | PersonalizedSectionStoryblok
    | SingleProductSectionStoryblok
    | TabbedContentSectionStoryblok
    | TextSectionStoryblok
    | TwoColImageTextSectionStoryblok
  )[];
  _uid: string;
  component: "personalized-section";
  [k: string]: any;
}

export interface PriceCardStoryblok {
  headline?: string;
  subheadline?: string;
  price?: string;
  text_below_price?: RichtextStoryblok;
  button?: ButtonStoryblok[];
  text_below_button?: RichtextStoryblok;
  most_popular?: boolean;
  _uid: string;
  component: "price-card";
  [k: string]: any;
}

export interface RichtextYoutubeStoryblok {
  video_id?: string;
  _uid: string;
  component: "richtext-youtube";
  [k: string]: any;
}

export interface RocketCustomizationPageStoryblok {
  headline?: string;
  description?: string;
  _uid: string;
  component: "rocket-customization-page";
  [k: string]: any;
}

export interface RocketJourneyPageStoryblok {
  sections?: (ScrollSectionStoryblok | RocketJourneyScrollSectionStoryblok)[];
  _uid: string;
  component: "rocket-journey-page";
  [k: string]: any;
}

export interface RocketJourneyScrollSectionStoryblok {
  headline?: string;
  text?: RichtextStoryblok;
  _uid: string;
  component: "rocket-journey-scroll-section";
  [k: string]: any;
}

export interface SingleProductSectionStoryblok {
  headline?: string;
  text?: RichtextStoryblok;
  button?: ButtonStoryblok[];
  reverse_layout?: boolean;
  background_color?: number | string;
  _uid: string;
  component: "single-product-section";
  [k: string]: any;
}

export interface SiteConfigStoryblok {
  enable_breadcrumbs?: boolean;
  footer_logo?: AssetStoryblok;
  footer_about?: RichtextStoryblok;
  footer_nav_1_headline?: string;
  footer_nav_1?: NavItemStoryblok[];
  footer_nav_2_headline?: string;
  footer_nav_2?: NavItemStoryblok[];
  footer_nav_3_headline?: string;
  footer_nav_3?: NavItemStoryblok[];
  header_logo?: AssetStoryblok;
  header_auto_nav?: boolean;
  header_nav?: NavItemStoryblok[];
  header_buttons?: ButtonStoryblok[];
  header_disable_transparency?: boolean;
  header_light?: boolean;
  disable_rounded_corners?: boolean;
  footer_text_color?: "light" | "dark";
  footer_background_color?: number | string;
  use_custom_colors?: boolean;
  twitter?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  instagram?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  youtube?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  facebook?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  use_custom_fonts?: boolean;
  custom_font_display?: number | string;
  custom_font_body?: number | string;
  breadcrumbs_excluded_stories?: any[];
  _uid: string;
  component: "site-config";
  [k: string]: any;
}

export interface TabbedContentEntryStoryblok {
  image?: AssetStoryblok;
  headline?: string;
  description?: string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "tabbed-content-entry";
  [k: string]: any;
}

export interface TabbedContentSectionStoryblok {
  headline?: string;
  lead?: string;
  entries?: TabbedContentEntryStoryblok[];
  always_accordion?: boolean;
  _uid: string;
  component: "tabbed-content-section";
  [k: string]: any;
}

export interface TextSectionStoryblok {
  alignment?: "left" | "center";
  single_color_background?: boolean;
  background_color?: number | string;
  overlap_preceding_hero?: boolean;
  headline?: string;
  lead?: string;
  text?: RichtextStoryblok;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "text-section";
  [k: string]: any;
}

export interface TwoColImageTextSectionStoryblok {
  image_1?: AssetStoryblok;
  headline?: string;
  background_color?: number | string;
  subheadline?: string;
  image_2?: AssetStoryblok;
  _uid: string;
  component: "two-col-image-text-section";
  [k: string]: any;
}
