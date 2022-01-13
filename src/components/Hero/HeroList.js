import { getHeroesByPublisher } from "../../selector/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";


export const HeroList = ({ publisher }) => {

    const validPublisher = ['DC Comics','Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error( `${publisher} is not valid`);
    }


    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
 
        <div className="row rows-cols-1 row rows-cols-md-3 g-3 animate__animated animate__fadeIn">

            {
                heroes.map( hero => (

                    <HeroCard
                        key={hero.id}
                        {...hero}
                    /> 

                ))
            }

        </div>


        </>
    )
}
