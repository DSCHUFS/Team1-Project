import React, { useState, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { green } from "@material-ui/core/colors";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DetailPage from './detailPage';

function MainPage() {
  // eslint-disable-next-line
  const [search, setSearch] = useState("")

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    }, []);

  const handleClick = useCallback((e) => {
    e.preventDefault();
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
      maxWidth: 300,
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
      <Button variant="contained" className={classes.button}>헷갈리기 쉬운 분리배출 품목</Button>
      
      <h3>종류별로 찾아보세요!</h3>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="전등"
                height="100"
                image=""
                title="전등"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  전등
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
              <Link to = '/detail'>
                Learn More
              </Link>
              </Button>
            </CardActions>
          </Card>
        
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="섬유류"
                height="100"
                image=""
                title="섬유류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  섬유류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="전자제품"
                height="100"
                image=""
                title="전자제품"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  전자제품
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Grid>

          <Grid container justify="center" spacing={2}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="유리병류"
                height="100"
                image=""
                title="유리병류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  유리병류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="플라스틱류"
                height="100"
                image=""
                title="플라스틱류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  플라스틱류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="비닐류"
                height="100"
                image=""
                title="비닐류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  비닐류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Grid>

          <Grid container justify="center" spacing={2}>
          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="종이류"
                height="100"
                image=""
                title="종이류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  종이류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="종이컵/팩"
                height="100"
                image=""
                title="종이컵/팩"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  종이컵/팩
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="캔/고철류"
                height="100"
                image=""
                title="캔/고철류"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  캔/고철류
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={ handleClick }>
                Learn More
              </Button>
            </CardActions>
          </Card>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;