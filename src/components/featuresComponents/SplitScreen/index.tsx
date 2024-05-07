import { Container, Box } from "@mui/material";

const styleContainer = {
  display: 'flex',

}

const styleBox = {
  flex: `${(p) => p.flex}`,
}

const SplitScreen = ({ children, leftWidth = 1, rightWidth = 3 }) => {
  const [left, right] = children;
  return (
    <Container style={styleContainer}>
      <Box flex={leftWidth} style={styleBox}>
        {left}
      </Box>
      <Box flex={rightWidth} style={styleBox} >
        {right}
      </Box>


    </Container>
  )
}

export SplitScreen;
