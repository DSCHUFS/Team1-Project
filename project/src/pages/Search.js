import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { green } from "@material-ui/core/colors";
import Navbar from '../component/Navbar'

function Search() {
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
        grid: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    
    const classes = useStyles();    

    return(
    <div style={{ textAlign: `center` }}>
      <Navbar/>
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

      <h3>헷갈리기 쉬운 분리배출 품목</h3>
      <h4>ㄱㄴㄷ순</h4>
      <Link to='/' style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary" size="large">게 껍데기</Button></Link>
      <Link to='/' style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary" size="large">나무젓가락</Button></Link>
      <Link to='/' style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary" size="large">도자기류</Button></Link>
      <Link to='/' style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary" size="large">옥수수 껍질</Button></Link>
      <Link to='/' style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary" size="large">전기 담요</Button></Link>




    </div>

    )
}

export default Search;