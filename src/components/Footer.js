import { Typography, Container, Link } from "@mui/material";

const Footer = () => {
    return (
        <Container maxWidth={false} component="footer">
                <Typography variant="subtitle1" component="h5" align="center">
                    &copy;2022&nbsp;
                    <Link href="https://www.linkedin.com/in/luis-villarreal7/" underline="hover" target="_blank" sx={{color: "#000"}}>
                        Luis Villarreal
                    </Link>
                </Typography>
        </Container>
    )
}
export default Footer;