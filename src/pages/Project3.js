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
                    Project 3
                </Typography>
                <Typography
                    m="1rem 0"
                    variant="h4"
                    align="center"
                    component="h4"
                >
                    Ecom Dash
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="p"
                    align="center"
                    m={2}
                >
                    Create your online store/catalog in minutes with eCom Dash
                </Typography>
                <Container align="center" sx={{ m: "1rem" }}>
                    <Link
                        href="https://sensational-blancmange-3f973b.netlify.app/"
                        underline="none"
                        m={2}
                        target="_blank"
                    >
                        <Button variant="contained" size="small">
                            Launch App
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/luisv7/ecom-dash-frontend"
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
                src="https://i.ibb.co/z2dDDc6/Screen-Shot-2022-10-17-at-11-32-21-PM.png"
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
                                    label="React.js"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Node.js"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="MongoDB"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Mongoose"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Material UI"
                                    color="primary"
                                    icon={<DoneIcon />}
                                />
                                <Chip
                                    label="Google Firebase"
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
                                With Ecom Dash you can build an e-commerce
                                website in minutes. Simply add your product
                                information, image URL, and you have a clean yet
                                simple catalog/store. New updates coming soon to
                                this project.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Project3;
