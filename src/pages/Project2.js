import { Button, Typography, Link, Stack, Chip } from "@mui/material";
import { Container } from "@mui/system";

// ICONS
import DoneIcon from '@mui/icons-material/Done';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project2 = () => {
    return (
        <>  
            <Container
                maxWidth={false}
                component="div"
                className="row-text-content"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", bgcolor: "#93a6a7", color: "#fff"}}
            >
                <Typography m="0.5rem 0" variant="h3" align="center" component="h3">
                    Project 2
                </Typography>
                <Typography m="1rem 0" variant="h4" align="center" component="h4">
                    TableRes Manager
                </Typography>
                <Typography variant="subtitle1" component="p" align="center" m={2}>
                    Table/Guest booking application to manage your guest.
                </Typography>
                <Container align="center" sx={{ m: "1rem" }}>
                    <Link href="https://tableres-manager.herokuapp.com/guests" underline="none" m={2} target="_blank">
                        <Button variant="contained" size="small">Launch App</Button>
                    </Link>
                    <Link href="https://github.com/luisv7/TableRes-Manager" underline="none" target="_blank">
                        <Button variant="contained" size="small" sx={{ bgcolor: "#000", ':hover': {bgcolor: "white", color: "black"}}} endIcon={<GitHubIcon />}>View on</Button>
                    </Link>
                </Container>
            </Container>
            <img className="img-banner" src="https://i.ibb.co/RYqPrH5/Screen-Shot-2022-10-18-at-2-17-16-PM.png" alt="Lyrics Finder" />
            <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                <Typography variant="h4" align="center" sx={{ m: "1rem 0"}}>
                    Technologies Used
                </Typography>
                <Stack spacing={1} alignItems="center" sx={{ m: "1rem 0"}}>
                    <Stack direction="row" spacing={1} sx={{ display: "flex", flexWrap: "wrap", gap: "0.7rem"}}>
                        <Chip label="CSS" color="primary" icon={<DoneIcon/>}  />
                        <Chip label="Javascript" color="primary" icon={<DoneIcon/>} />
                        <Chip label="EJS" color="primary" icon={<DoneIcon/>} />
                        <Chip label="Express.js" color="primary" icon={<DoneIcon/>} />
                        <Chip label="Node.js" color="primary" icon={<DoneIcon/>} />
                        <Chip label="MongoDB" color="primary" icon={<DoneIcon/>} />
                        <Chip label="Mongoose" color="primary" icon={<DoneIcon/>} />
                        <Chip label="Bulma" color="primary" icon={<DoneIcon/>} />
                    </Stack>
                </Stack>
            </Container>
            <Container
                    maxWidth={false}
                    component="div"
                    className="row-text-content"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mb: "2rem"}}
                >
                    <Typography component="h4" variant="h5">
                        Description of the App
                    </Typography>
                    <Typography component="p" variant="subtitle1" align="center" mt={2}>
                        Do you run a restaurant? Are you having trouble managing your guest?TableRes Manager can help. Managing your guest was never this easy. TableRes has great features such as search by Name, filter by date, and filter by time.
                    </Typography>
            </Container>
        </>
    )   
        
}

export default Project2;