import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
    const [favouriteMealIDs, setFavouriteMealIDs] = useState([]);

    let addFavourite = (id) => {
        setFavouriteMealIDs((currentFavIDs) => [...currentFavIDs, id]);
    };

    let removeFavourite = (id) => {
        setFavouriteMealIDs((currentFavIDs) =>
            currentFavIDs.filter((mealID) => mealID !== id)
        );
    };

    let value = {
        ids: favouriteMealIDs,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    };

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesContextProvider;
