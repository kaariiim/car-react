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
      <div className="row mt-5">
        <div className="col-md-6 text-left">
          <h3>Cars</h3>
        </div>
        <div className="col-md-6 text-right">
        <CarAdd refresh={() => getCars(setCars)} />
        </div> 
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
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
        </div>
      </div>
    </>
  );
};

export default Cars;
