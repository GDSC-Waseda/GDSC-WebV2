/* Cards */
export interface MemberType {
  firstName: string;
  lastName?: string;
  photo_link?: string;
}

export interface CarouselCardProps {
  image: string;
  subtitle: string;
  title: string;
  old: boolean;
  link: string;
}

export type YearBarProps = {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
};

export interface MembersCardProps {
  teamName: string;
  leader: MemberType;
  member: Array<MemberType>;
}

export interface HeaderCardProps {
  headTitle?: string;
  title: string;
  content?: string;
  button?: boolean;
}
export interface TeamHeaderCardProps {
  headTitle?: string;
  title?: string;
  content?: string;
  featureList?: string[];
}

export interface ImageCardProps {
  title: string;
  content?: string;
  image: string;
  imagePosition: "left" | "right";
}

export interface TeamCardProps {
  image: string;
  title: string;
  major?: string;
  school?: string;
  year?: string;
}

export interface MediaCardProps {
  size: "s" | "m" | "l";
  title: string;
  image?: string;
  tags: string[];
  date: string;
  description: string;
  link: string;
  open: boolean;
  canOpen: boolean;
}

export interface ImageIconProps {
  size: "s" | "m" | "l";
  title?: string;
  color: "yellow" | "green" | "blue" | "red";
  image?: string;
  image2: string | null;
  multiple: boolean;
  link: string;
}

export interface TextCardProps {
  title: string;
  content: string;
}

/* Pages */

export interface ErrorPageProps {
  detail: string | "error" | "dev";
}

/* SEO */

export interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageKeywords?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

/* article type */

// types.ts
export interface ContentBlock {
  type: string;
  children: { text: string }[];
}

export interface ArticleAttributes {
  Title: string;
  publicationDate: string;
  content: ContentBlock[];
  media: any;
  author1: any;
  author2: any;
  coverimg: any;
}

export interface Article {
  id: number;
  attributes: ArticleAttributes;
}

export interface ArticlesResponse {
  data: Article[];
}
