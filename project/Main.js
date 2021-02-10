import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import PaperImg from '../images/paper.png';
import PaperCupImg from '../images/paper-cup.png'; 
import BatteryImg from '../images/battery.png';
import CanImg from '../images/can.png';
import FiberImg from '../images/fiber.png';
import ElectronicsImg from '../images/electronics.png';
import LampImg from '../images/lamp.png';
import GlassImg from '../images/glass.png';
import PlasticBagImg from '../images/plastic-bag.png';
import PlasticImg from '../images/plastic.png';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { green } from "@material-ui/core/colors";

function Main() {
  // eslint-disable-next-line
  const [search, setSearch] = useState("")

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 800,
      margin: 'auto',
      marginBottom: '50px',
      border: '2px solid',
      borderColor: green[500],
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    card: {
      maxWidth: 160,
      margin: 30,
      backgroundColor: green[50],
    },
    button: {
      marginBottom: '50px',
      backgroundColor: green[500],
    },
    grid: {
      root: {
        flexGrow: 1,
      },
      control: {
        padding: theme.spacing(2),
      },
    }
  }));

  const classes = useStyles();

  return (
    <div style={{ textAlign: `center` }}>
      <h1>Recycling Allimi</h1>
      <h3>분리배출 할 물품을 검색해보세요.</h3>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="#볼펜 #햇반용기 #맥주병"
          inputProps={{ 'aria-label': '#볼펜 #햇반용기 #맥주병' }}
          onChange={ handleChange }
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <h3>분리배출 꿀팁을 알아보고 싶다면?</h3>
      <Link to="/search" style={{ textDecoration: 'none' }}><Button variant="contained" className={classes.button}>헷갈리기 쉬운 분리배출 품목</Button></Link>
      
      <h3>종류별로 찾아보세요!</h3>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <h3>일반</h3>
          <Grid container justify="center" spacing={2}>
          <Link to="/paper" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="종이류"
                height="160"
                image={PaperImg}
                title="종이류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  종이류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/paper-cup" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="종이컵/팩"
                height="160"
                image={PaperCupImg}
                title="종이컵/팩"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  종이컵/팩
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/can" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="캔/고철류"
                height="160"
                image={CanImg}
                title="캔/고철류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  캔/고철류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          </Grid>

          <Grid container justify="center" spacing={2}>
          <Link to="/glass" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="유리병류"
                height="160"
                image={GlassImg}
                title="유리병류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  유리병류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/plastic" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="플라스틱류"
                height="160"
                image={PlasticImg}
                title="플라스틱류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  플라스틱류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/plastic-bag" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="비닐류"
                height="160"
                image={PlasticBagImg}
                title="비닐류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  비닐류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          </Grid>

          <h3>기타</h3>
          <Grid container justify="center" spacing={2}>
          <Link to="/lamp" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="형광등"
                height="160"
                image={LampImg}
                title="형광등"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  형광등
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/battery" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="전지류"
                height="160"
                image={BatteryImg}
                title="전지류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  전지류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/fiber" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="섬유류"
                height="160"
                image={FiberImg}
                title="섬유류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  섬유류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>

          <Link to="/electronics" style={{ textDecoration: 'none' }}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="전자제품"
                height="160"
                image={ElectronicsImg}
                title="전자제품"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  전자제품
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Link>
          </Grid>

        </Grid>
      </Grid>
      
      
    </div>
  );
}

export default Main;
