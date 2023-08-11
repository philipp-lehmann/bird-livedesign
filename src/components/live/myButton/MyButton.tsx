
import React from 'react'
import { combine } from '../lib';
import { RenderMyButton, RenderMyButtonProps } from './RenderMyButton';

export type MyButtonProps = {
} & RenderMyButtonProps;

export const MyButton = function (props: MyButtonProps) {
    return (<RenderMyButton
        {...props}
        frames={combine(props.frames, {
            // edit frames here
        })}
    />);
}