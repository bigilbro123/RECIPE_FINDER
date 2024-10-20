import Recipice from "../components/Recipice";
import { useState, useEffect } from "react";

const Favorites = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Retrieve favorites from localStorage and parse them
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setRecipes(storedFavorites);
        console.log(recipes);

    }, []);

    return (
        <div className="bg-[#faf9b] flex-1 p-10 min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

                {/* Show a message if there are no favorite recipes */}
                {recipes.length === 0 ? (
                    <div className="h-[80vh] flex flex-col items-center gap-4">
                        <img src="/404.svg" alt="No favorites found" className="h-3/4" />
                        <p className="text-xl">No favorite recipes yet!</p>
                    </div>
                ) : (
                    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 sm:w-full w-80">
                        <Recipice recipes={recipes} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favorites;
