
// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderButtonProps = {
    frames?: {
    ["button"]?: DivProps
    ["title"]?: SpanProps

  }
;
}

export function RenderButton(props: RenderButtonProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <button {...frames["button"]} className={cls(frames,"button", `gap-0 flex-col relative border rounded bg-[#2758ce] opacity-100 px-3 py-1.5 border-[#2758ce] flex`)}>
  <Span {...frames["title"]} className={cls(frames,"title", `font-['Inter'] text-lg font-semibold text-white text-left relative`)}>click me</Span>
</button>
    );
}