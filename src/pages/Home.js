import {
    Avatar,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
    Link,
    Grid,
    Container,
} from "@mui/material";

const Home = () => {
    return (
        <>
            <Container maxWidth={false} className="profile-background">
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} md={7} className="center-container">
                        <Typography component="h1" variant="h2">
                            Hello,
                        </Typography>
                        <Typography component="h1" variant="h2" m="1rem 0">
                            I'm Luis
                        </Typography>
                        <Typography
                            component="p"
                            variant="subtitle1"
                            align="center"
                        >
                            I’m a tech enthusiast who loves learning new
                            technologies and helping others. Experience building
                            eCommerce websites. Business and analytical mindset
                            with a focus on excellence in customer experience.
                            During my free time, I like to enhance my skills
                            involving computer science, IOS Development, and
                            graphic design.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} className="center-container">
                        <Avatar
                            alt="Luis Villarreal Profile Picture"
                            src="https://i.ibb.co/fYZRtYH/profile-picture.jpg"
                            className="avatar-img"
                            sx={{ width: 270, height: 270 }}
                        />
                        <Link href="/resume" underline="none">
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ mt: "1rem" }}
                            >
                                View Resume
                            </Button>
                        </Link>
                        <Link href={require("../docs/Resume-nd.pdf")} target="blank" underline="none">
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ mt: "1rem" }}
                            >
                                Download Resume
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                variant="h4"
                component="h3"
                align="center"
                sx={{ mt: "1.5rem" }}
            >
                Projects
            </Typography>
            <Grid container className="row-container" sx={{ p: "1rem" }}>
                <Grid item xs={12} md={4} className="row-container">
                    <Card sx={{ maxWidth: 600, m: "0.5rem" }}>
                        <Link href="/project1">
                            <CardMedia
                                component="img"
                                height="190"
                                image="https://i.ibb.co/wpxxmSm/Screen-Shot-2022-10-18-at-8-29-06-PM.png"
                                alt="Project 1 - Lyrics Finder Screenshot"
                                className="image-position"
                            />
                        </Link>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h3"
                                sx={{ fontWeight: "600" }}
                            >
                                Lyrics Finder - Project 1
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ height: "110px" }}
                            >
                                A browser application where you can search for
                                an artist and it will display popular song
                                results, YouTube video of the song, and the
                                lyrics.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link
                                href="https://iridescent-longma-c0b7c8.netlify.app"
                                underline="none"
                            >
                                <Button variant="contained" size="small">
                                    Launch App
                                </Button>
                            </Link>
                            <Link href="/project1" underline="none">
                                <Button variant="outlined" size="small">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} className="row-container">
                    <Card sx={{ maxWidth: 600, m: "0.5rem" }}>
                        <Link href="/project2">
                            <CardMedia
                                component="img"
                                height="190"
                                image="https://i.ibb.co/RYqPrH5/Screen-Shot-2022-10-18-at-2-17-16-PM.png"
                                alt="Project 2 - TableRes Manager Screenshot"
                                className="image-position"
                            />
                        </Link>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h3"
                                sx={{ fontWeight: "600" }}
                            >
                                TableRes Manager - Project 2
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ height: "110px" }}
                            >
                                Intuitive application to help restaurants
                                internally for booking guests. Managing your
                                guest was never this easy.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link
                                href="https://tableres-manager.herokuapp.com/guests"
                                underline="none"
                            >
                                <Button variant="contained" size="small">
                                    Launch App
                                </Button>
                            </Link>
                            <Link href="/project2" underline="none">
                                <Button variant="outlined" size="small">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} className="row-container">
                    <Card sx={{ maxWidth: 600, m: "0.5rem" }}>
                        <Link href="/project3">
                            <CardMedia
                                component="img"
                                height="190"
                                image="https://i.ibb.co/z2dDDc6/Screen-Shot-2022-10-17-at-11-32-21-PM.png"
                                alt="Project 3 - Ecom Dash Screenshot"
                                className="image-position"
                            />
                        </Link>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="h3"
                                sx={{ fontWeight: "600" }}
                            >
                                Ecom Dash Project 3
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ height: "110px" }}
                            >
                                A simple easy to use e-commerce dashboard to
                                build your own e-commerce website.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link
                                href="https://sensational-blancmange-3f973b.netlify.app"
                                underline="none"
                            >
                                <Button variant="contained" size="small">
                                    Launch App
                                </Button>
                            </Link>
                            <Link href="/project3" underline="none">
                                <Button variant="outlined" size="small">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Container maxWidth="xl" className="center-container">
                <Typography
                    variant="h4"
                    component="h3"
                    align="center"
                    sx={{ m: "1rem 0" }}
                >
                    Technologies Learned
                </Typography>
                <img
                    className="img-banner"
                    src="https://i.ibb.co/7Kh6XQd/tech-logos.png"
                    alt="Technologies logos"
                />
            </Container>
        </>
    );
};

export default Home;
