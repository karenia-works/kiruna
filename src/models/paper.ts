export interface Paper {
  paperId: number;
  title: string;
  authors: string[];
  type: number;
  summary: string;
  paperFromType: number;
  paperFrom: string;
  site: string;
  date: Date;
  keywords: string[];
  quote: number;
  localAuthorIds: number[];
}
