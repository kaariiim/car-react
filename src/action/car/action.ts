
import axios from "axios";
import Car from "../../@types/car";

export function getCars(callback: (data: Car[]) => void) {
  axios
    .get("http://localhost:5000/car")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addCar(car: Car, callback: () => void) {
  axios
    .post("http://localhost:5000/car", car)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editCars(car: Car, callback: () => void) {
  axios
    .put(`http://localhost:5000/car/${car._id}`, car)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteCars(car: Car, callback: () => void) {
  axios
    .delete(`http://localhost:5000/car/${car._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
