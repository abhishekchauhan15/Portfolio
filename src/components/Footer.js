import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Hidden,
  Snackbar,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bg from "../assets/backgrounds/layered-waves-haikei1.svg";
import "../styles/footer.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    wave: {
      width: "100%",
      height: theme.spacing(50),
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(25),
      },
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    leftContainer: {
      flexGrow: 1,
    },
    iconsGrid: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    socialItem: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.secondary.light,
      },
    },
    illustrationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    illustration: {
      width: "80%",
    },
    sendButton: {
      marginTop: theme.spacing(2),
    },
  })
);

function Footer() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Message Sent");
  const classes = useStyles();

  return (
    <div className="footer_">
    <footer className={classes.root}>
      <Container id="contact">
        <Grid container>
          <Grid item md={6} sm={12}>
            <Typography variant="h3" align="left">
              Connect with me
            </Typography>
            <article
              itemScope
              itemType="http://schema.org/Author"
              className={classes.left}
            >
              <Grid container className={classes.leftContainer}>
                <Grid item md={6} sm={6} className={classes.iconsGrid}>
                  <Link
                    className={classes.socialItem}
                    href="https://github.com/abhishekchauhan15"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <GitHubIcon className={classes.icon} fontSize="large" />

                    <Typography>Github</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="https://www.linkedin.com/in/abhishekchauhan15/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <LinkedInIcon className={classes.icon} fontSize="large" />

                    <Typography>LinkedIn</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="https://twitter.com/1509_abhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <TwitterIcon className={classes.icon} fontSize="large" />

                    <Typography>Twitter</Typography>
                  </Link>

                  <Link
                    className={classes.socialItem}
                    href="mailto:abhishekchauhan1509@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <MailIcon fontSize="large" className={classes.icon} />
                    <Typography>abhishekchauhan1509@gmail.com</Typography>
                  </Link>
                </Grid>

                <Grid
                  item
                  md={6}
                  sm={6}
                  className={classes.illustrationContainer}
                >
                  <Hidden xsDown>
                    <img
                      src="../assets/message.svg"
                      className={classes.illustration}
                      alt="message illustration"
                    />
                  </Hidden>
                </Grid>
              </Grid>
            </article>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h3" align="left">
              Say Hi
            </Typography>
            <form className="form">
              <TextField
                label="Name"
                fullWidth
                margin="dense"
                variant="outlined"
                color="secondary"
                required
                  id="form-name"
                  
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="dense"
                variant="outlined"
                color="secondary"
                required
                placeholder="So I can get back to you"
                id="form-email"
              />
              <TextField
                label="Message"
                fullWidth
                margin="dense"
                multiline
                rows={5}
                variant="outlined"
                color="secondary"
                required
                id="form-message"
              />
              <Button
                variant="outlined"
                className={classes.sendButton}
                color="secondary"
                endIcon={<SendIcon />}
                type="submit"
              >
                send
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={6000}
              message={message}
            />
          </Grid>
        </Grid>
      </Container>
      </footer>
    </div>
  );
}

export default Footer;
