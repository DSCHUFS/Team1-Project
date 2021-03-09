import React, { useState, useCallback, useEffect } from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { green } from "@material-ui/core/colors";
import Navbar from '../components/Navbar'
import axios from 'axios';

function Data({items}){
  return (
  <>
  {
    items.map((item,index) => (
      <Link to='/etc' style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary" size="large">{items[index].item}</Button></Link>
    ))
  }
  </>
  );
}

const Search = ({match}) => {
    // eslint-disable-next-line
    const [search, setSearch] = useState("")
    var [items, setItems] = useState(null)

    const handleChange = useCallback((e) => {
    setSearch(e.target.value);
    }, []);

    useEffect(() => {
      axios.get('http://localhost:3001/all').then((Response)=>{
          setItems(items = Response.data);
          }).catch((Error)=>{
          console.log(Error);
        })
    },[]);

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
    var result;
    if(match.params.state == 1)
    {
      result = (
        <div style={{ textAlign: `center` }}>
          <Navbar/>
          <h3>분리배출 할 물품을 검색해보세요.</h3>
          <Paper component="form" className={classes.root} action = 'http://localhost:3001/query' method = "get">
        <InputBase
          name = 'name'
          className={classes.input}
          placeholder="#볼펜 #햇반용기 #맥주병"
          inputProps={{ 'aria-label': '#볼펜 #햇반용기 #맥주병' }}
          onChange={ handleChange }
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
          <h2>검색 결과가 존재하지 않습니다.</h2>
          <h3>헷갈리기 쉬운 분리배출 품목</h3>
          <h4>ㄱㄴㄷ순</h4>
          {items && <Data items={items}/>}
        </div>
        );
    } else {
      result = (
        <div style={{ textAlign: `center` }}>
          <Navbar/>
          <h3>분리배출 할 물품을 검색해보세요.</h3>
          <Paper component="form" className={classes.root} action = 'http://localhost:3001/query' method = "get">
        <InputBase
          name = 'name'
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
          {items && <Data items={items}/>}        
        </div>
        );
    }
    
    return result;
}

export default Search;