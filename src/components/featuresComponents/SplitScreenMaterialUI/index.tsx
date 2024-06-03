
import { Box, Container } from '@mui/material';
import { ReactNode }from 'react'
import { makeStyles } from '@material-ui/styles';

interface SplitScreen{
    //It's waiting for two elements
    children: [ReactNode, ReactNode];
    //the size of each split
    leftWidth?: number;
    rightWidth?: number;
}

const useStyle = makeStyles({
    container: {
        display:'flex',
    },
    contentLeft:( props: SplitScreen )=>({
        flex: props.leftWidth,
    }),
    contentRight:( props: SplitScreen )=>({
        flex: props.rightWidth,
    })  
})



const SplitScreenMaterialUI: React.FC<SplitScreen> = ({children, leftWidth = 1, rightWidth = 1}) => {
    const css = useStyle();
    const [left, right] = children;

    return(
        <Container>
            <Box >
                {left}
            </Box>
            <Box>
                {right}
            </Box>
        </Container>
    )
}

export default SplitScreenMaterialUI;