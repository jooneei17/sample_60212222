import './App.css';
import Button from '@mui/material/Button';
import { Input, TextField, Typography, Container } from '@mui/material';
import { Grid } from '@material-ui/core';
import { Stack } from '@mui/material';
import { Box } from '@material-ui/core';

function Home() {
    return (
        <Grid
            container
            direction="column"
            alignItems="stretch">

            <Box sx={{m:3, mt:20, mb:35}}>
                <Stack>
                    <Typography align='center' variant='h5' marginRight={2}>OO로 공부 중인 학생 수</Typography>
                    <Typography align='center' variant='h4'>123,456,678</Typography>
                </Stack>
            </Box>
            <Box sx={{m:3}}>
                <Stack>
                    <Input placeholder='아이디'></Input>
                    <Input placeholder='패스워드' type='password'></Input>
                </Stack>
            </Box>
            <Box sx={{m:3}}>
                <Stack>
                    <Button variant="contained" sx={{ my:1 }}>로그인</Button>
                    <Button variant="contained">회원가입</Button>
                </Stack>
            </Box>
        </Grid>
    )
       
}
export default Home;
