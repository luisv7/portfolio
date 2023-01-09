import {
    Container,
    Button,
    Typography,
    Link,
    Alert,
    AlertTitle,
    Stack,
    Chip,
    Grid,
} from "@mui/material";

// ICONS
import DoneIcon from "@mui/icons-material/Done";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project1 = () => {
    return (
        <>
            <Alert severity="error">
                <AlertTitle>Lyrics API no longer working.</AlertTitle>
                Lyrics text will not display. Update coming soon.
            </Alert>
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
                    Project 1
                </Typography>
                <Typography
                    mt={2}
                    mb={2}
                    variant="h4"
                    align="center"
                    component="h4"
                >
                    Lyrics Finder
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="p"
                    align="center"
                    m={2}
                >
                    Search for an artist, view popular songs, watch the video
                    and sing along!
                </Typography>
                <Container align="center" sx={{ m: "1rem" }}>
                    <Link
                        href="https://iridescent-longma-c0b7c8.netlify.app"
                        underline="none"
                        m={2}
                        target="_blank"
                    >
                        <Button variant="contained" size="small">
                            Launch App
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/luisv7/project1"
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
                src="https://i.ibb.co/wpxxmSm/Screen-Shot-2022-10-18-at-8-29-06-PM.png"
                alt="Lyrics Finder"
            />
            <Container
                maxWidth="md"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
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
                                    label="API's"
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
                                Lyrics Finder is a browser application that uses
                                Genius API to fetch the result of the artist
                                being searched. Based on the results the app
                                does a second fetch of the artist and first song
                                in the array and returns a YouTube video. There
                                is an second API that searches for the lyrics
                                based on the artist name and song title.
                                Unfortunately, this API is no longer working. I
                                will be working on a new update to find an
                                alternative lyrics API.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Project1;
