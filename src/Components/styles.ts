import styled from 'styled-components';
import { ScaleSize } from '../Types';

export const Container = styled.div`
  height: 400px;
  width: 50%;
  border:2px solid #000;
  overflow: auto;
 
`;
export const SVG = styled.svg`
position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;

margin: auto;
  `;

interface BlockProps {
    scalesize?: ScaleSize;
}

export const MainScreen =
    styled.div <
    BlockProps >
    `
  transform: scale(${({ scalesize = 1 }) => scalesize});
`;

export const Block = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 300;
    line-height: 1.5;
    position: relative;
    //max-width: 30em;
    background-color: #fff;
    margin: 1em;
    padding: 1.125em 1.5em;
    font-size: 1.2em;
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
        0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
`;

export const Toolbox = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 100;
    height: 40px;
    margin-right: auto;
    margin-left: auto;
`;
