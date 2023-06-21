import styled from 'styled-components';
import { BlockFontSize } from '../types/fontSize';

export const Container = styled.div`
    color: #192229;
    background: linear-gradient(135deg, #f4f2f3, #bfc6d0);
    height: 100%;
    display: flex;
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
    max-width: 30em;
    background-color: #fff;
    margin: 1em;
    padding: 1.125em 1.5em;
    font-size: ${({ fontSize = 1.2 }) => fontSize}em;
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
        0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
`;
