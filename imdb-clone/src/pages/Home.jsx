import React from 'react'
import { useEffect, useState} from 'react';
import Header from "../components/common/header/Header";
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slides from '../components/Slides';

import { getCategoryMovies } from '../services/api';

import { NOWPLAYING_API_URL } from '../constants/constant';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const getData = async () => {
            let response = await getCategoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    },[])

  return (
    // <> fragments are preferred over html dom tags ie div as they are faster,
    // doesn't make extra dome node and take less memory in comparision
    <>
      <Header/>
      <Container>
        <Wrapper>
            <Banner movies={movies} />
            <UpNext movies={movies} />
        </Wrapper>
            <Slides movies={movies} />
            <Slides movies={movies} />
            <Slides movies={movies} />
            <Slides movies={movies} />
            <Slides movies={movies} />
      </Container>
    </>
  )
}

export default Home;

