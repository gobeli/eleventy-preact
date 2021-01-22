export interface Page {
  date: Date;
  inputPath: string;
  fileSlug: string;
  filePathStem: string;
  url: string;
  outputPath: string;
}

export interface EleventyProps {
  pkg?: any;
  permalink?: string;
  layout?: string;
  page?: Page;
  collections?: any;
  content?: string | Object;
  [key: string]: any;
}
