import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {

    const navigate = useNavigate();
    const [searchReuslts, setSearchReuslts] = useState([]);

    console.log('useLocation()', useLocation())
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    console.log('searchTerm', searchTerm)

    useEffect(() => {
        if(debouncedSearchTerm){
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?query=${searchTerm}`
            )
            console.log(request)
            console.log(request.data.results)
            setSearchReuslts(request.data.results);
        } catch (error) {
            console.log("error", error)
        }
    }


    const renderSearchResults = () => {
        return searchReuslts.length > 0 ? (
            <section className='search-container'>
                {searchReuslts.map((movie) => {
                    if(movie.backdrop_path !== null && movie.media_type !== 'person'){
                        const movieImageUrl = 
                            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                            return(
                                <div className='movie' key={movie.id}>
                                    <div onClick={() => navigate(`/${movie.id}`)} className='movie__column-poster'>
                                        <img
                                            src={movieImageUrl}
                                            alt="movie image"
                                            className='movie__poster'
                                        />
                                    </div>
                                </div>
                            )
                    }
                })}
            </section>
        ) : (
            <section className='no-results'>
                <div className='no-results_text'>
                    <p>
                        찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가 없습니다.
                    </p>
                </div>
            </section>
        )
    }

  return renderSearchResults();
}
