import Item from "./Item";

export default function Country({children: country = null}) {
    if(!country) {
        return <div>Impossível renderizar o país</div>
    }

    const demographicDensity = country.population / country.area;
    

    return (
        <div className="border p-2 m-2 flex flex-row items-center space-x-2">
            <img className="w-48" src={country.flag} alt={country.name}/>
            <ul>
                <li><Item label="Nome:">{country.name}</Item></li>
                <li>{country.capital}</li>
                <li>{country.region}</li>
                <li>{country.population}</li>
                <li>{country.area}</li>
                <li>{demographicDensity}</li>
           
            </ul>
        </div>
    );
}
