const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
const departsDate = dt.toISOString().slice(0, 16);
res.render("flights/new", { departsDate });
