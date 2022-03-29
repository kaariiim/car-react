import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Modal,
} from "reactstrap";
import Car from "../../../@types/car";
import { editCars } from "../../../action/car/action";

interface CarEditPropsType {
  car: Car;
  refresh: () => void;
}

const CarEdit = ({ car, refresh }: CarEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [carId, setCarId] = useState<any>(car._id);
  const [model, setModel] = useState<string>(car.model);
  const [color, setColor] = useState<string>(car.color);
  const [horsepower, setHorsepower] = useState<number>(car.horsepower);
 

  const submit = () => {
    const editCar = {
      model,
      color,
      horsepower,
    };

    editCars(editCar, carId, () => {
      refresh();
      setIsOpened(false); 
    });
  };

  const reset = () => {
    setModel("");
    setColor("");
    setHorsepower(0);
  };

  return (
    <>
      <Button color="warning" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader>
          Edit Car
          <button className="float-right btn btn-default" onClick={() => setIsOpened(!isOpened)}> X  </button> 
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <div className="form-group">
            <Label for="model">
                Car
              </Label>
              <Input value={model} id="model" name="model" type="text" className="form-group" />
             
              </div>
            <div className="form-group">
            <Label for="color">
               Color 
              </Label>
              <Input
                value={color}
                id="color"
                name="color"
                type="text"
                onChange={(e) => setColor(e.target.value)}
              >
              </Input>
             
              </div>
           <div className="form-group">
            <Label for="horsepower">
               Horse Power 
              </Label>
              <Input
                value={horsepower}
                id="horsepower"
                name="horsepower"
                type="number"
                
                onChange={(e) => setHorsepower(Number.parseInt(e.target.value))}
              />
              
              </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={submit}>
           Confirm
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CarEdit;
