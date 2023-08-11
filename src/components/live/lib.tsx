import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cls(framesTree: Record<string, any> | undefined, name: string, className: string): string {
  if (framesTree?.[name]?.className) {
    return (
      twMerge(className, framesTree[name]?.className)
    );
  }
  return className;
}

function mergeDeep(target: any, ...sources: any[]) {
  function isObject(item: any) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  function isReactObject(source: any): boolean {
    return source.$$typeof != null;
  }

  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source) && !isReactObject(source)) {
    for (const key in source) {
      if (isObject(source[key]) && !isReactObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

export function combine<OverrideType>(...arr: OverrideType[]): OverrideType {
  return arr.reduce((res, cur) => mergeDeep(res, cur), {} as OverrideType);
}

type AllowedTags = "div" | "span" | "svg" | "img" | "button" | "a" | "input" | "textarea" | "select" | "option" | "form" | "label" | "p" | "h1" | "h2" | "h3" | "h4";

type ElementProps<T extends keyof JSX.IntrinsicElements> = Omit<JSX.IntrinsicElements[T], "content"> & {
  replace?: JSX.Element | string | null;
  content?: JSX.Element | string | null;
  as?: AllowedTags
}

export type DivProps = ElementProps<"div">;
export function Element(props: ElementProps<AllowedTags>) {

  // create a comp of type div
  const Comp = React.createElement(props.as || "div", props);
  return <Comp {...props} />;

}
export function Div(props: ElementProps<"div">) {
  const { replace, content, as, ...rest } = props;
  if (as) {
    return Element(props);
  }
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <div {...rest}>{content}</div>
  }
  return <div {...rest} />;
}

export type SpanProps = ElementProps<"span">;
export function Span(props: ElementProps<"span">) {
  const { replace, content, as, ...rest } = props;
  if (as) {
    return Element(props);
  }
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <span {...rest}>{content}</span>
  }
  return <span {...rest} />;
}

type B = JSX.IntrinsicElements["button"];

export type SvgProps = ElementProps<"svg">;
export function Svg(props: ElementProps<"svg">) {
  const { replace, content, as, ...rest } = props;
  if (as) {
    return Element(props);
  }
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <svg {...rest}>{content}</svg>
  }
  return <svg {...rest} />;
}

export type ImgProps = ElementProps<"img">;
export function Img(props: ElementProps<"img">) {
  const { replace, content, as, ...rest } = props;
  if (replace !== undefined) {
    return replace;
  }
  if (content !== undefined) {
    return <img {...rest}>{content}</img>
  }
  return <img {...rest} />;
}
