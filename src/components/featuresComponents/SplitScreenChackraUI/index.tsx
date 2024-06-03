import { ReactNode }from 'react'

import { Container, Box, Flex } from '@chakra-ui/react'
interface SplitScreen{
    //It's waiting for two elements
    children: [ReactNode, ReactNode];
    //the size of each split
    leftWidth?: number;
    rightWidth?: number;
}

const SplitScreenChackraUI: React.FC<SplitScreen> = ({ children, leftWidth, rightWidth}) => {
    const [left, right] = children;
    return(
        <Container>
            <Flex>
                <Box lex={`${leftWidth}`}>
                    {left}
                </Box>
                <Box flex={`${rightWidth}`}>
                    {right}
                </Box>
            </Flex>
        </Container>
    )
}

export default SplitScreenChackraUI;