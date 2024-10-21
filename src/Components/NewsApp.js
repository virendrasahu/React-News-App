import React, { useEffect, useState } from 'react';
import Card from './Card';
import newsDataJson from './generated_news_data.json'; // here external json file is added

const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]); // Initialized as an empty array

    //Here Function to filtering data based on the search input
    const getData = () => {
        const filteredData = newsDataJson.articles.filter(article => {
            const title = article.title || ''; 
            const description = article.description || ''; 
            return title.toLowerCase().includes(search.toLowerCase()) ||
                   description.toLowerCase().includes(search.toLowerCase());
        });
        setNewsData(filteredData);
    };

    useEffect(() => {
        getData(); // Loaded initial data
    }, []);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
        getData(); // Updated news data on input change
    };

    const handleCategoryClick = (category) => {
        setSearch(category);
        getData(); // Fetched news based on the selected category
    };

    return (
        <div>
            {/* Navbar */}
            <nav>
                <div>
                    <h1>News Sphere</h1>
                </div>
                <ul className='main-ul'>
                    <li><a href="#">All News</a></li>
                    <li><a href="#">Trending</a></li>
                </ul>
                <div className='searchBar'>
                    <input 
                        type='text' 
                        placeholder='Search News' 
                        value={search} 
                        onChange={handleInputChange} 
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div className='main-text'>
                <p className='head'>Stay Updated With NewsSphere</p>
            </div>
            {/*It Used Categories for filtering news */}
            <div className='categoryBtn'>
                <button onClick={() => handleCategoryClick("Sports")}>Sports</button>
                <button onClick={() => handleCategoryClick("Politics")}>Politics</button>
                <button onClick={() => handleCategoryClick("Entertainment")}>Entertainment</button>
                <button onClick={() => handleCategoryClick("Health")}>Health</button>
                <button onClick={() => handleCategoryClick("Fitness")}>Fitness</button>
            </div>

            {/* Creating Cards */}
            <div>
                {newsData.length > 0 ? <Card data={newsData} /> : <p>No articles found.</p>}
            </div>
        </div>
    );
};

export default NewsApp;
