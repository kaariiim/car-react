import { useState, useEffect } from "react";
import { ButtonGroup, Table } from "reactstrap";
import CarEdit from "./carEdit";
import CarAdd from "./carAdd";
import CarDelete from "./carDelete";
import Car from "../../../@types/car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getCars } from "../../../action/car/action";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars(setCars); // aka setCars(data)
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
    <h1>Cars</h1>
        <CarAdd refresh={() => getCars(setCars)} />
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>
              Model s Car
            </th>
            <th>
             Color s Car
            </th>
            <th>
            Horse Power s Car
            </th>
           
            <th>
             Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.length ? (
            cars.map((car, i) => (
              <tr key={i}>
                <td scope="row">{car.model}</td>
                <td>{car.color}</td>
                <td>{car.horsepower}</td>
                <td>
                  <ButtonGroup>
                    <CarEdit
                      car={car}
                      refresh={() => getCars(setCars)}
                    />
                    <CarDelete
                      car={car}
                      refresh={() => getCars(setCars)}
                    />
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-5">
                <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                <br />
                No cars yet
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Cars;
