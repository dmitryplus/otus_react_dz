import styled from 'styled-components';
import { BlockFontSize } from '../Types';

export const Container = styled.div`
    color: #192229;
    background: linear-gradient(135deg, #f4f2f3, #bfc6d0);
    height: 100%;
    //display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
`;

interface BlockProps {
    fontSize?: BlockFontSize;
}

export const Block =
    styled.div <
    BlockProps >
    `    
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 300;
    line-height: 1.5;
    position: relative;
    //max-width: 30em;
    background-color: #fff;
    margin: 1em;
    padding: 1.125em 1.5em;
    font-size: ${({ fontSize = 1.2 }) => fontSize}em;
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
