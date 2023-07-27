const pathPrefix = 'file/';

export const GetLinkToGraphTemplate = (): string => `${pathPrefix}:filename`;
export const GetLinkToGraph = (fileName: string): string => `${pathPrefix}${fileName}`;
