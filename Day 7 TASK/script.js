
// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // a. Get all the countries from Asia continent/region using Filter function
        const asiaCountries = data.filter(country => country.region === "Asia");
        console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));

        // b. Get all the countries with a population of less than 2 lakhs using Filter function
        const countriesWithLessPopulation = data.filter(country => country.population < 200000);
        console.log("Countries with population less than 2 lakhs:", countriesWithLessPopulation.map(country => country.name.common));

        // c. Print the following details name, capital, flag, using forEach function
        console.log("Details of countries:");
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
        });

        // d. Print the total population of countries using reduce function
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log("Total population of countries:", totalPopulation);

        // e. Print the country that uses US dollars as currency
        const countryWithUSD = data.find(country => country.currencies.USD);
        console.log("Country using US dollars as currency:", countryWithUSD?.name.common);
    })
    .catch(error => console.error("Error fetching data:", error));