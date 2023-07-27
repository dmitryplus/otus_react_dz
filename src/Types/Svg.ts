export interface SvgElement {
  type: string;
  tagName: string;
  properties: {
    class?: string;
    id?: string;
    value?: string;
    fill?: string;
    stroke?: string;
    points?: string;
    'text-anchor'?: string;
    'font-family'?: string;
    'font-size'?: string;
    'stroke-width'?: string;
    d?: string;
    x?: string;
    y?: string;
  };
  value?: string;
  children: [SvgElement];
}

export interface SvgParams {
  class: string;
  height: string;
  id: string;
  transform: string;
  viewBox: string;
  width: string;
  xmlns: string;
  'xmlns:xlink': string;
}

export interface SvgState {
  params: SvgParams | null;
  elements: [SvgElement] | null;
  viewBox: string | null;
  height: number | null;
  width: number | null;
  originalWidth: number | null;
  originalHeight: number | null;
  id: string | null;
  translate: string | null;
  scale: number;
}
