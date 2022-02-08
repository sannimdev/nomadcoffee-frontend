import { memo } from 'react';
import styled from 'styled-components';

const assets = [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
];
const background = {
    pick() {
        const length = assets.length;
        return Math.round(Math.random() * (length - 1));
    },
    getBackground: (index) => assets[index],
};

const SBackground = styled.div`
    background: ${(props) => `url(${props.src})`};
    background-size: cover;
    min-width: 480px;
`;

const pick = 3 || background.pick();
const Background = memo(({ children }) => {
    return <SBackground src={background.getBackground(pick)}>{children}</SBackground>;
});

export default Background;
