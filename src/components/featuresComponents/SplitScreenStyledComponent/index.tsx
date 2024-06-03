
import { ReactNode }from 'react'

import styled from 'styled-components';

interface SplitScreen{
    //It's waiting for two elements
    children: [ReactNode, ReactNode];
    //the size of each split
    leftWidth?: number;
    rightWidth?: number;
}

const Container = styled.div`
    display:flex;
`;

const Content = styled.div`

flex : ${(p)=> p.flex}

`



const SplitScreenStyledComponent: React.FC<SplitScreen> = ({children, leftWidth = 1, rightWidth = 1}) => {

    const [left, right] = children;

    return(
        <Container>
            <Content flex={leftWidth} >
                {left}
            </Content>
            <Content flex={rightWidth}>
                {right}
            </Content>
        </Container>
    )
}

export default SplitScreenStyledComponent;