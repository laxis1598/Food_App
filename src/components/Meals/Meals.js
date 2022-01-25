import Availablemeals from "./Availablemeals";

import MealsSummary from "./Mealsummary";

import { Fragment } from "react/cjs/react.production.min";

const Meals =() =>
{
    return <Fragment>
        <MealsSummary></MealsSummary>
        <Availablemeals></Availablemeals>
        
    </Fragment>

};

export default Meals;