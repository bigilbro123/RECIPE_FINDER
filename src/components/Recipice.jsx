import { TbSoup } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Recipice = ({ recipes }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    useEffect(() => {
        // Check if local storage has favorites when the component mounts
        setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    }, []);

    const isFavorited = (label) => favorites.some((fav) => fav.recipe.label === label);

    const addRecipe = (item) => {
        let updatedFavorites = [...favorites];
        if (isFavorited(item.recipe.label)) {
            // If the recipe is already favorited, remove it
            updatedFavorites = updatedFavorites.filter((fav) => fav.recipe.label !== item.recipe.label);
        } else {
            // If the recipe is not favorited, add it
            updatedFavorites.push(item);
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (

        <>
            {
                // eslint-disable-next-line react/prop-types
                recipes.map((item, index) => (
                    <div key={index} className="card bg-base-100 w-96 shadow-xl mx-2 my-4">
                        <figure>
                            <a href={`https://www.youtube.com/results?search_query=${item.recipe.label} recipe`} target="_blank" rel="noopener noreferrer" className="relative">
                                <img
                                    src={item.recipe.image}
                                    style={{ borderRadius: '10px' }}
                                    alt={item.recipe.label} />
                                <div className="absolute top-2 right-2 rounded-full z-10 bg-white p-1" onClick={(e) => {
                                    e.preventDefault();
                                    addRecipe(item);
                                }}>
                                    <FaRegHeart size={20} className={`hover:fill-red-500 hover:text-red-500 ${isFavorited(item.recipe.label) ? 'fill-red-500 text-red-500' : ''}`} />
                                </div>
                                <div className="absolute bottom-2 left-2 flex rounded-full z-10 bg-white p-1">
                                    <TbSoup size={20} /><p>{item.recipe.yield} servings</p>
                                </div>
                            </a>
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {item.recipe.label}
                                <div className="badge badge-secondary">{item.recipe.cuisineType[0]}</div>
                            </h2>
                            <p>{item.recipe.calories} calories</p>
                            <div className="card-actions justify-end">

                                <div className="badge badge-outline flex">
                                    <FaHeartPulse /> {item.recipe.healthLabels[0]}
                                </div>
                                <div className="badge badge-outline flex">
                                    <FaHeartPulse /> {item.recipe.healthLabels[1]}
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    );
};

export default Recipice;
