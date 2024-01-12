import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import type { RichtextStoryblok } from '../component-types-sb'


export interface RichTextProps {
    richtext: RichtextStoryblok;
}

export const RichTextRenderer = ({
    richtext,
  }: RichTextProps) => {
    if (!richtext) return null;
    return render(richtext, 
        {}
        ) as JSX.Element;
};