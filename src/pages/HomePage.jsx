import { IoSearch } from "react-icons/io5";
import Recipice from "../components/Recipice";
import { useEffect, useState } from "react";
const appId = import.env.VITE_APP_ID
const appApi = import.env.VITE_APP_KEY
const HomePage = () => {
    const [recipes, setRecipes] = useState([])
    const [loasding, setLoading] = useState(true)

    const array = new Array(4).fill(null);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('rice')
    const fetchRecipes = async (value) => {
        setLoading(true);
        setRecipes([]);

        try {
            const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=${appId}&app_key=${appApi}`);

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setRecipes(data.hits); // Update the state with the fetched recipes

            // It's better to log `data` directly to see the structure
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    console.log("recipes", recipes);
    const handleChange = (event) => {
        setInputValue(event.target.value); // Update the state with the new input value
    };
    useEffect(() => {
        fetchRecipes(value); // Call the function to fetch recipes on component mount
    }, []);

    const handlerecipe = (e) => {
        e.preventDefault()
        if (!inputValue) {
            return
        }
        fetchRecipes(inputValue)
    }

    return (
        <div className="bg-[#faf9fb] p-10 flex-1 ">

            <div className="max-w-screen-lg mx-auto">

                <form onSubmit={handlerecipe}>
                    <label htmlFor="" className="input shadow-md flex items-center gap-2">
                        <IoSearch />
                        <input type="text" className="text-sm md:text-md grow"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="what do you want cook today" />
                    </label>
                </form>
                <p className="font-bold text-3xl md:text-5xl mt-4 ">
                    Recommended
                </p>
                <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight ">
                    Popular choices
                </p>

                <div className="grid gap-3 grid-cols-1 lg:grid-cols-2  sm:w-full w-80 ">


                    {
                        loasding ? (
                            array.map((_, item) => {
                                return (
                                    <>
                                        <div className="flex w-80 flex-col gap-4 pt-7">
                                            <div className="skeleton h-32 w-full"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                        </div>
                                    </>
                                )
                            })

                        ) : (

                            <Recipice recipes={recipes} />

                        )


                    }








                </div>

            </div>


        </div>
    )
}

export default HomePage
