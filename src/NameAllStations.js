const obj = {
    'central': ['Barkingside', 'Buckhurst Hill', 'Bethnal Green', 'Bond Street', 'Chancery Lane', 'Chigwell', 'Debden', 'East Acton', 'Epping', 'Fairlop', 'Grange Hill', 'Gants Hill', 'Holborn', 'Hanger Lane', 'Hainault', 'Holland Park', 'Loughton', 'Lancaster Gate', 'Leyton', 'Leytonstone', 'Marble Arch', 'Mile End', 'North Acton', 'Newbury Park', 'Notting Hill Gate', 'Northolt', 'Oxford Circus', 'Perivale', 'Queensway', 'Redbridge', 'Ruislip Gardens', 'Roding Valley', 'Snaresbrook', 'St. Paul\'s', 'South Woodford', 'Tottenham Court Road', 'Theydon Bois', 'White City', 'Woodford', 'Wanstead', 'West Acton', 'Bank', 'Ealing Broadway', 'Greenford', 'Liverpool Street', 'Shepherd\'s Bush', 'Stratford', 'South Ruislip', 'West Ruislip'],
    'metropolitan': ['Aldgate', 'Barbican', 'Baker Street', 'Chesham', 'Croxley', 'Eastcote', 'Euston Square', 'Finchley Road', 'Great Portland Street', 'Hillingdon', 'Ickenham', 'Moor Park', 'North Harrow', 'Northwick Park', 'Northwood', 'Northwood Hills', 'Pinner', 'Preston Road', 'Ruislip Manor', 'Ruislip', 'Rayners Lane', 'Uxbridge', 'Watford', 'West Harrow', 'Wembley Park', 'Amersham', 'Chalfont & Latimer', 'Chorleywood', 'Harrow-on-the-Hill', 'King\'s Cross & St Pancras International', 'Liverpool Street', 'Rickmansworth', 'Farringdon', 'Moorgate'],
    'circle': ['Aldgate', 'Barbican', 'Baker Street', 'Bayswater', 'Embankment', 'Edgware Road', 'Euston Square', 'Goldhawk Road', 'Great Portland Street', 'Gloucester Road', 'High Street Kensington', 'Ladbroke Grove', 'Latimer Road', 'Monument', 'Mansion House', 'Notting Hill Gate', 'Royal Oak', 'Shepherd\'s Bush Market', 'St. James\'s Park', 'South Kensington', 'Sloane Square', 'Temple', 'Tower Hill', 'Wood Lane', 'Westbourne Park', 'Blackfriars', 'Cannon Street', 'Hammersmith', 'King\'s Cross & St Pancras International', 'Liverpool Street', 'Paddington', 'Victoria', 'Westminster', 'Farringdon', 'Moorgate'],
    'District': ['Acton Town', 'Aldgate East', 'Bromley-by-Bow', 'Becontree', 'Barons Court', 'Bow Road', 'Bayswater', 'Chiswick Park', 'Dagenham East', 'Dagenham Heathway', 'Ealing Common', 'Earl\'s Court', 'East Ham', 'Embankment', 'Elm Park', 'East Putney', 'Edgware Road (Circle Line)', 'Fulham Broadway', 'Gloucester Road', 'Hornchurch', 'High Street Kensington', 'Mile End', 'Monument', 'Mansion House', 'Notting Hill Gate', 'Plaistow', 'Parsons Green', 'Putney Bridge', 'Ravenscourt Park', 'Stamford Brook', 'Southfields', 'Stepney Green', 'St. James\'s Park', 'South Kensington', 'Sloane Square', 'Temple', 'Turnham Green', 'Tower Hill', 'Upminster Bridge', 'Upton Park', 'Upney', 'Wimbledon Park', 'West Kensington', 'Blackfriars', 'Barking', 'Cannon Street', 'Ealing Broadway', 'Gunnersbury', 'Hammersmith', 'Kensington (Olympia)', 'Kew Gardens', 'Paddington', 'Richmond', 'Upminster', 'Victoria', 'West Brompton', 'West Ham', 'Wimbledon', 'Westminster', 'Whitechapel'],
    'Piccadilly': ['Acton Town', 'Alperton', 'Arnos Grove', 'Arsenal', 'Bounds Green', 'Boston Manor', 'Barons Court', 'Caledonian Road', 'Covent Garden', 'Cockfosters', 'Eastcote', 'Ealing Common', 'Earl\'s Court', 'Green Park', 'Gloucester Road', 'Holborn', 'Hillingdon', 'Hatton Cross', 'Hyde Park Corner', 'Hounslow Central', 'Hounslow East', 'Hounslow West', 'Holloway Road', 'Ickenham', 'Knightsbridge', 'Leicester Square', 'Manor House', 'North Ealing', 'Northfields', 'Oakwood', 'Osterley', 'Piccadilly Circus', 'Park Royal', 'Ruislip Manor', 'Ruislip', 'Russell Square', 'Rayners Lane', 'South Ealing', 'Southgate', 'South Harrow', 'South Kensington', 'Sudbury Hill', 'Sudbury Town', 'Turnham Green', 'Turnpike Lane', 'Uxbridge', 'Wood Green', 'Finsbury Park', 'Heathrow Airport Terminals 1-3', 'Hammersmith', 'Heathrow Airport Terminal 5', 'King\'s Cross & St Pancras International'],
    'Bakerloo': ['Baker Street', 'Embankment', 'Edgware Road', 'Kilburn Park', 'Lambeth North', 'Maida Vale', 'Oxford Circus', 'Piccadilly Circus', 'Regent\'s Park', 'Warwick Avenue', 'Charing Cross', 'Elephant & Castle', 'Harlesden', 'Harrow & Wealdstone', 'Kensal Green', 'Kenton', 'Marylebone', 'North Wembley', 'Paddington', 'Queen\'s Park', 'Stonebridge Park', 'South Kenton', 'Waterloo', 'Willesden Junction', 'Wembley Central'],
    'Victoria': ['Green Park', 'Oxford Circus', 'Pimlico', 'Stockwell', 'Warren Street', 'Blackhorse Road', 'Brixton', 'Euston', 'Finsbury Park', 'Highbury & Islington', 'King\'s Cross & St Pancras International', 'Seven Sisters', 'Tottenham Hale', 'Victoria', 'Vauxhall', 'Walthamstow Central'],
    'Jubilee': ['Bermondsey', 'Canada Water', 'Kilburn', 'Southwark', 'Bond Street', 'Baker Street', 'Canons Park', 'Dollis Hill', 'Finchley Road', 'Green Park', 'Kingsbury', 'Neasden', 'Queensbury', 'St. John\'s Wood', 'Stanmore', 'Swiss Cottage', 'Willesden Green', 'Wembley Park', 'Canning Town', 'Canary Wharf', 'London Bridge', 'North Greenwich', 'Stratford', 'Waterloo', 'West Ham', 'West Hampstead', 'Westminster'],
    'Northern': ['Belsize Park', 'Hampstead', 'Archway', 'Angel', 'Borough', 'Burnt Oak', 'Brent Cross', 'Chalk Farm', 'Colindale', 'Clapham Common', 'Clapham North', 'Clapham South', 'Colliers Wood', 'Camden Town', 'East Finchley', 'Edgware', 'Embankment', 'Finchley Central', 'Goodge Street', 'Golders Green', 'High Barnet', 'Hendon Central', 'Highgate', 'Kennington', 'Leicester Square', 'Morden', 'Mill Hill East', 'Mornington Crescent', 'Oval', 'Stockwell', 'South Wimbledon', 'Totteridge & Whetstone', 'Tooting Bec', 'Tooting Broadway', 'Tottenham Court Road', 'Tufnell Park', 'West Finchley', 'Woodside Park', 'Warren Street', 'Balham', 'Bank', 'Charing Cross', 'Elephant & Castle', 'Euston', 'King\'s Cross & St Pancras International', 'Kentish Town', 'London Bridge', 'Old Street', 'Waterloo', 'Moorgate'],
    'Waterloo_And_City': ["Bank", "Waterloo"],
    'Hammersmith_And_City': ["Hammersmith", "Goldhawk Road", "Shepherd's Bush Market", "Wood Lane", "Latimer Road", "Ladbroke Grove", "Westbourne Park", "Royal Oak", "Paddington", "Edgware Road", "Baker Street", "Great Portland Street", "Euston Square	", "King's Cross St Pancras", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate East", "Whitechapel", "Stepney Green", "Mile End", "Bow Road", "Bromley-by-Bow", "West Ham", "Plaistow", "Upton Park", "East Ham", "Barking"]
};

export default obj;

/* function for fill obj
 fillArrayWithNameStation = (event) => {
    if (event.key === 'Enter') {
        axios.get(`https://api.tfl.gov.uk/Line/Waterloo&City/Route/Sequence/inbound?serviceTypes=Regular`)
        .then(json => {
            json.data.stations.map(item => arr.push(item.name));
            }
        );
    }
 };
*/

/*
let mySet = new Set();
let arr = Object.keys(obj);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < obj[arr[i]].length; j++) {
        mySet.add(obj[arr[i]][j]);
    }
}
let array = new Array(mySet.size);
mySet.forEach(item => array.push({title: `${item}`}));
*/