import { Typography, Container, Link, Stack, Chip, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const Resume = () => {
    return (
        <Container
            maxWidth="md"
            className="center-container"
            sx={{ p: "1rem" }}
        >
            <Typography component="h1" variant="h4">
                Luis Villarreal
            </Typography>
            <Typography component="h2" variant="body1">
                Software Engineer
            </Typography>
            <Typography component="p" variant="p" sx={{ display: "flex" }}>
                <Link href="in/luis-villarreal7">in/luis-villarreal7</Link>
                <Typography>&nbsp; | &nbsp;</Typography>
                <Link href="github.com/luisv7">github.com/luisv7</Link>
            </Typography>
            <Typography
                component="p"
                variant="p"
                align="center"
                sx={{ mt: "1rem" }}
            >
                As a tech enthusiast, I am always seeking out new and exciting ways to use my skills and knowledge to solve problems. I have extensive experience in building eCommerce websites delivering exceptional customer experiences. In my free time, I enjoy staying up-to-date on the latest technologies, particularly in computer science, iOS development, and graphic design. I am also passionate about helping others and sharing my knowledge and skills with those around me.
            </Typography>
            <Stack spacing={1} alignItems="center" sx={{ m: "1rem 0" }}>
                <Typography component="h3" variant="p">
                    Languages / Engine
                </Typography>
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
                    <Chip label="HTML" color="primary" icon={<DoneIcon />} />
                    <Chip label="CSS" color="primary" icon={<DoneIcon />} />
                    <Chip
                        label="Javascript"
                        color="primary"
                        icon={<DoneIcon />}
                    />
                    <Chip label="EJS" color="primary" icon={<DoneIcon />} />
                    <Chip label="Python" color="primary" icon={<DoneIcon />} />
                    <Chip label="SQL" color="primary" icon={<DoneIcon />} />
                    <Chip label="Swift" color="primary" icon={<DoneIcon />} />
                </Stack>
            </Stack>
            <Stack spacing={1} alignItems="center" sx={{ m: "1rem 0" }}>
                <Typography component="h3" variant="p">
                    Libraries / Frameworks / Env.
                </Typography>
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
                    <Chip label="React" color="primary" icon={<DoneIcon />} />
                    <Chip label="Node.js" color="primary" icon={<DoneIcon />} />
                    <Chip
                        label="Express.js"
                        color="primary"
                        icon={<DoneIcon />}
                    />
                    <Chip label="Django" color="primary" icon={<DoneIcon />} />
                    <Chip label="Mongoose" color="primary" icon={<DoneIcon />} />
                    <Chip label="Ajax" color="primary" icon={<DoneIcon />} />
                    <Chip label="Bootstrap" color="primary" icon={<DoneIcon />} />
                    <Chip label="Bulma" color="primary" icon={<DoneIcon />} />
                    <Chip label="Material UI" color="primary" icon={<DoneIcon />} />
                </Stack>
            </Stack>
            <Container sx={{mt: "1rem"}}>
                <Typography component="h3" variant="h5" sx={{mb: "1rem", fontWeight: "600"}}>
                    Work Experience
                </Typography>
                <Typography component="h4" variant="h6">
                    Software Engineer / Founder
                </Typography>
                <Typography component="p" variant="body1">
                    LA Express Distribution LLC
                </Typography>
                <Typography component="p" variant="subtitle2">
                    Aug 2020 - Present
                </Typography>
                <Typography component="p" variant="p" sx={{mt: "1rem"}}>
                    <ul>
                        <li>Manage all aspects of business operations, including financial management, marketing, and customer service.</li>
                        <li>Improved efficiency and profitability through the implementation of new systems and processes.</li>
                        <li>Created and implemented strategies for business growth and expansion.</li>
                        <li>Demonstrated the ability to adapt and respond to changes in the market and industry.</li>
                        <li>Successfully developed, designed, and launched www.laexpressdistribution.com</li>
                    </ul>
                </Typography>
                <Typography component="p" variant="p" sx={{ mt: "1rem" }}>
                    Website:&nbsp;
                    <Link href="https://www.laexpressdistribution.com">
                    www.laexpressdistribution.com
                    </Link>
                </Typography>
                <Link href={require("../docs/main-resume-nn.pdf")} target="blank" underline="none">
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ mt: "1rem" }}
                    >
                        View Entire Resume
                    </Button>
                </Link>
            </Container>
        </Container>
    );
};

export default Resume;
