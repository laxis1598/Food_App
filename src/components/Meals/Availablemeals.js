import classes from './Availablemeals.module.css'
import Mealsitem from './Mealsitem';

import Card from '../UI/Card';

const meals=[
  {
    id:"m1",
    name:"Fish Finger",
    description:"cruncy and delicious",
    price:22.5
  },
  {
    id:"m2",
    name:"Chicken Briyani",
    description:"Tasty and Spicy",
    price:25.3
  },
  {
    id:"m3",
    name:"Parotta",
    description:"Crispy layered",
    price:12.99
  },
  {
    id:"m4",
    name:"Curry Dosa",
    description:"Crispy",
    price:17.99
  },
]

  const Availablemeals = () =>
  {
   
    
      const mealslist=meals.map(meals=>
      <Mealsitem
        name={meals.name}
        id={meals.id}
        key={meals.id}
        description={meals.description}
        price={meals.price} >
      </Mealsitem>
      );

      return <section className={classes.meals}>
        <Card>
          <ul>
              {mealslist}
          </ul>
          </Card>
      </section>
  };

  export default Availablemeals;