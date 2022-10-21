import { Avatar, Card, CardMedia, CardContent, CardActions, Button, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";


const Home = () => {
    return (
        <>
            <div className="profile-background">
                <h1 className="hello-text">Hello,</h1>
                <h1 className="hello-text">I'm Luis</h1>
                <p className="align-center">I’m a tech enthusiast who loves learning new technologies and helping others. Experience building eCommerce websites. Business and analytical mindset with a focus on excellence in customer experience. During my free time, I like to enhance my skills involving computer science, IOS Development, and graphic design.</p>
                <Avatar
                    alt="Luis Villarreal Profile Picture"
                    src="https://i.ibb.co/fYZRtYH/profile-picture.jpg"
                    className="avatar-img"
                    sx={{ width: 270, height: 270 }}
                />
                <Link href="/resume">
                    <Button variant="contained" size="medium" sx={{mt: "1rem"}}>View Resume</Button>
                </Link>
            </div>
            <Typography variant="h4" align="center" sx={{ mt: "1.5rem"}}>
                Projects
            </Typography>
            <div className="projects-container">
                <div className="cards-container">
                    <Card sx={{ maxWidth: 600 }} className="card">
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
                            <Typography gutterBottom variant="h5" component="div">
                            Project 1 - Lyrics Finder
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ maxHeight: "90px" }}>
                                A browser application where you can search for an artist and it will display popular song results, YouTube video of the song, and the lyrics.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://iridescent-longma-c0b7c8.netlify.app" underline="none">
                                <Button variant="contained" size="small">Launch App</Button>
                            </Link>
                            <Link href="/project1" underline="none">
                                <Button variant="outlined" size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: 600 }} className="card">
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
                            <Typography gutterBottom variant="h5" component="div">
                                Project 2 - TableRes Manager
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ maxHeight: "90px" }}>
                                Intuitive application to help restaurants internally for booking guests.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://tableres-manager.herokuapp.com/guests" underline="none">
                                <Button variant="contained" size="small">Launch App</Button>
                            </Link>
                            <Link href="/project2" underline="none">
                                <Button variant="outlined" size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 600 }} className="card">
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
                            <Typography gutterBottom variant="h5" component="div">
                                Project 3 - Ecom Dash
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ maxHeight: "90px" }}>
                                A simple easy to use e-commerce dashboard to build your own e-commerce website.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://sensational-blancmange-3f973b.netlify.app" underline="none">
                                <Button variant="contained" size="small">Launch App</Button>
                            </Link>
                            <Link href="/project3" underline="none">
                                <Button variant="outlined" size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Container maxWidth={false} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h4" sx={{ m: "1rem 0"}}>
                        Technologies Learned
                </Typography>
                <img className="img-banner" src="https://i.ibb.co/7Kh6XQd/tech-logos.png" alt="Technologies logos"/>
            </Container>
        </>
    )
}

export default Home;