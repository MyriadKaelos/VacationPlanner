
function VacationPlanner(city, days, miles, season) {
    this.dailyCosts = 500;
    this.flightCostPerMile = 3;
    this.city = city;
    this.days = days;
    this.miles = miles;
    this.season = season;
    if(this.season = "High") {
        this.season = 1.2;
    } else if(this.season = "Low") {
        this.season = 1;
    }
    this.totalCost = 0;
    this.calculateTotalCost = function() {
        this.totalCost = ((this.miles * this.flightCostPerMile) + (this.dailyCosts * this.days)) * this.season;
    };
    this.printInfo = function() {
        console.log("Your trip to " + this.city + " will cost " + this.totalCost + ".")
    };

}
function MyFunction () {
    var Vacation0 = new VacationPlanner("Seattle",7,850,"High");
    var Vacation1 = new VacationPlanner("Houston",4,1900,"Low");
    var Vacation2 = new VacationPlanner("Los Angeles",3,400,"High");
    var Vacation3 = new VacationPlanner("New York", 5,2900,"Low");
    var vacations = [Vacation0,Vacation1,Vacation2,Vacation3];

    for(var x in vacations) {
        vacations[x].calculateTotalCost();
        vacations[x].printInfo();
    }
}




// dailyCosts = 500;
// flightCostPerMile = 3;
// city - string - destination of vacation
// days - number - length of the vacation
// miles - number - round trip miles to destination
// season - boolean - high (true) or low (false).  High season adds 20% to all costs.
//     totalCost - number - holds the totalCost
// calculateTotalCost() - function - calculates the total cost and sets it into totalCost:  days * (miles * flightCostPerMile) * dailyCosts * season?
//     printInfo() - function - prints via console.log the city and the total cost in nicely formatted English
//
// 2. Price out these four separate vacations (create instances) and set them into variables:
//
//     A high season trip to Seattle (850 miles) for 7 nights.
//     A low season trip to Houston (1,900) for 4 nights.
//     A high season trip to Los Angeles (400) for 3 nights.
//     A low season trip to New York (2,900) for 5 nights.
//
// 3. Next, put the four vacationPlanner objects into an array called vacations.
//
// 4. Finally, loop through vacations calling printInfo() on each vacation.
//
