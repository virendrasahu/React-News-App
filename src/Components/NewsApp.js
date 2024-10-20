import React, { useEffect, useState } from 'react';
import Card from './Card';

const NewsApp = () => {
    const API_KEY = "d8645d5500c245ecb1612698d4e437ea";
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleCategoryClick = (category) => {
        setSearch(category);
        getData(); // Fetch news based on the selected category
    };

    return (
        <div>
            {/* Navbar */}
            <nav>
                <div>
                    <h1>News Sphere</h1>
                </div>
                <ul className='main-ul'>
                    <a>All News</a>
                    <a>Trending</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInputChange} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div className='main-text'>
                <p className='head'>Stay Updated With NewsSphere</p>
            </div>
            {/* Categories for filtering news */}
            <div className='categoryBtn'>
                <button onClick={() => handleCategoryClick("Sports")}>Sports</button>
                <button onClick={() => handleCategoryClick("Politics")}>Politics</button>
                <button onClick={() => handleCategoryClick("Entertainment")}>Entertainment</button>
                <button onClick={() => handleCategoryClick("Health")}>Health</button>
                <button onClick={() => handleCategoryClick("Fitness")}>Fitness</button>
            </div>

            {/* Creating Cards */}
            <div>
                {newsData ? <Card data={newsData} /> : null}
            </div>
        </div>
    );
};

export default NewsApp;





