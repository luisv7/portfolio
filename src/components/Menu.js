import { useState } from "react";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Link,
    Container,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MenuBar = () => {
    const [navToggle, setNavToggle] = useState(false);

    const handleNavClick = () => () => {
        setNavToggle((prevState) => !prevState);
    };

    return (
        <AppBar primary="main" sx={{ height: "57px", backgroundColor: "#fff" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Container
                    maxWidth={false}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleNavClick()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href="/" underline="none" sx={{ color: "black" }}>
                        <Typography
                            variant="subtitle1"
                            component="h1"
                            sx={{ fontWeight: "600" }}
                        >
                            Luis Villarreal
                        </Typography>
                    </Link>
                </Container>
                <Container
                    maxWidth={false}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Link
                        href="https://github.com/luisv7"
                        sx={{ color: "black" }}
                    >
                        <GitHubIcon
                            sx={{ margin: "0 0.5rem", fontSize: "32px" }}
                        ></GitHubIcon>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/luis-villarreal7/"
                        sx={{ color: "black" }}
                    >
                        <LinkedInIcon
                            sx={{ margin: "0 0.5rem", fontSize: "32px" }}
                        ></LinkedInIcon>
                    </Link>
                </Container>
            </Toolbar>
            <Drawer anchor="left" open={navToggle} onClose={handleNavClick()}>
                <Box sx={{ width: 200 }}>
                    <List>
                        {["Project 1", "Project 2", "Project 3", "Project 4", "Resume"].map(
                            (text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        href={
                                            "/" +
                                            text.replace(" ", "").toLowerCase()
                                        }
                                    >
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default MenuBar;
