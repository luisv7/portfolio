import { Button, Typography, Link, Stack, Chip, Grid } from "@mui/material";
import { Container } from "@mui/system";

// ICONS
import DoneIcon from "@mui/icons-material/Done";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project3 = () => {
    return (
        <>
            <Container
                maxWidth={false}
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    bgcolor: "#93a6a7",
                    color: "#fff",
                    p: "1rem",
                }}
            >
                <Typography
                    m="0.5rem 0"
                    variant="h3"
                    align="center"
                    component="h3"
                >
                    Project 4
                </Typography>
                <Typography
                    m="1rem 0"
                    variant="h4"
                    align="center"
                    component="h4"
                >
                    Schoolpy
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="p"
                    align="center"
                    m={2}
                >
                    SchoolPy is a learning management platform that allows students and teachers to be organized.
                </Typography>
                <Container align="center" sx={{ m: "1rem" }}>
                    <Link
                        href="https://github.com/luisv7/schoolpy"
                        underline="none"
                        target="_blank"
                    >
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: "#000",
                                ":hover": { bgcolor: "white", color: "black" },
                            }}
                            endIcon={<GitHubIcon />}
                        >
                            View on
                        </Button>
                    </Link>
                </Container>
            </Container>
            <img
                className="img-banner"
                src="https://i.ibb.co/yfSWHLh/schoolpy.png"
                alt="Lyrics Finder"
            />
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: "2rem",
                }}
            >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Typography
                            component="h4"
                            variant="h5"
                            align="center"
                            sx={{ m: "1rem 0" }}
                        >
                            Technologies Used
                        </Typography>
                        <Stack
                            spacing={1}
                            alignItems="center"
                            sx={{ m: "1rem 0" }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    gap: "0.7rem",
                                }}
                            >
                                <Chip
                                    label="HTML"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="CSS"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Javascript"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Python"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Django"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="PostgreSQL"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Docker"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Bulma"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Container
                            maxWidth={false}
                            component="div"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                mb: "2rem",
                                p: "1rem",
                            }}
                        >
                            <Typography component="h4" variant="h5">
                                Description of the App
                            </Typography>
                            <Typography
                                component="p"
                                variant="subtitle1"
                                align="center"
                                mt={2}
                            >
                                SchoolPy is a learning management platform that allows students and teachers to be organized. Features such as creating assignments, adding courses you're currently enrolled in, and general class announcements.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Project3;
