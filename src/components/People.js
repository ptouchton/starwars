import { useQuery } from "react-query";
import Person from "./Person";

const People = () => {

    const fetchPeople = async () => {

        const res = await fetch('https://swapi.dev/api/people/');
        return res.json();
    };

    const { data, status } = useQuery('people', fetchPeople);
    return (
        <div>
            <h2>People</h2>
            { status === 'error' && <div>Error fetching data</div>}
            { status === 'loading' && <div>Loading...</div>}
            {status === 'success' && (
                <div>
                    { data.results.map(person => <Person key={person.name} person={person} />)}
                </div>
            )}
        </div>
    );
}

export default People;