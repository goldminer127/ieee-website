import { Box } from '@mui/material';
import SampleComponent from '../Components/SampleComponent'

const TestComponent = () =>
{
    //Replace SampleComponent with your component to test inside the div
    //You can also change the style of this div if needed
    //Test sdsfsdf
    return(
        <Box component = 'div' sx={{width: '100vw', height: '100vh'}}>
            <SampleComponent text = "Let's get started"/>
        </Box>
    );
}

export default TestComponent;