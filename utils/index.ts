export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "384be5c147msh985305e80e7f2bep1752abjsnd3e2a75c9e6f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  const response = await fetch(url, {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
