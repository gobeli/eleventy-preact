export interface Page {
  date: Date;
  inputPath: string;
  fileSlug: string;
  filePathStem: string;
  url: string;
  outputPath: string;
}

export interface EleventyProps {
  pkg?: Object;
  permalink?: string;
  layout?: string;
  page?: Page;
  collections?: Object;
  content?: string | Object;
  [key: string]: any;
}