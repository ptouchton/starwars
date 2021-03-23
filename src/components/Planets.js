import { useQuery } from "react-query";
import Planet from "./Planet";

const Planets = () => {

    const fetchPlanets = async () => {

        const res = await fetch('https://swapi.dev/api/planets/');
        return res.json();
    };

    const { data, status } = useQuery('planets', fetchPlanets);
    return (
        <div>
            <h2>Planets</h2>
            { status === 'error' && <div>Error fetching data</div>}
            { status === 'loading' && <div>Loading...</div>}
            {status === 'success' && (
                <div>
                    { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    );
}

export default Planets;