import React, { ChangeEvent, FormEvent, useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

type loginType = {
    username: string;
    password: string;
};

export const LoginPage: React.FC<{}> = () => {

    const [loginData, setLoginData] = useState<loginType>({
        username: '',
        password: ''
    })

    const loginDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(loginData)
    }

    return (
        <Container maxWidth="xl">
            <Grid
                container
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ minHeight: "100vh" }}
            >
                <Grid item>
                    <Paper sx={{ padding: "1.8em", borderRadius: "6px" }}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={5}>
                                <Typography variant="h5">
                                    Iniciar sesion
                                </Typography>
                                <Stack spacing={1}>
                                    <TextField
                                        name="username"
                                        label="Correo"
                                        type="text"
                                        required
                                        fullWidth
                                        onChange={loginDataChange}
                                    />
                                    <TextField
                                        name="password"
                                        label="Contraseña"
                                        type="password"
                                        required
                                        fullWidth
                                        onChange={loginDataChange}
                                    />
                                </Stack>
                                <Button fullWidth variant="contained" type="submit">
                                    Iniciar sesion
                                </Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
