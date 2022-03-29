
import axios from "axios";
import Car from "../../@types/car";

const api_url ="http://localhost:3000/"; 

export function getCars(callback: (data: Car[]) => void) {
  axios
    .get(api_url+"car")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addCar(car: Car, callback: () => void) {
  axios
    .post(api_url+'car', car)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editCars(car: Car, carId:any, callback: () => void) {
  axios
    .put(api_url+"car/"+carId, car)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteCars(car: Car, callback: () => void) {
  axios
    .delete(api_url+"car/"+car._id)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
