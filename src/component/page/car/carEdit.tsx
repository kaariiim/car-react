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
        <ModalHeader className="bg-warning" toggle={() => setIsOpened(false)}>
          Edit Cars
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input value={model} id="model" name="model" type="text" />
              <Label for="model">
                Cars
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={color}
                id="color"
                name="color"
                type="text"
                onChange={(e) => setColor(e.target.value)}
              >
              </Input>
              <Label for="color">
               Color s Car
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={horsepower}
                id="horsepower"
                name="horsepower"
                type="number"
                onChange={(e) => setHorsepower(Number.parseInt(e.target.value))}
              />
              <Label for="horsepower">
               Horse Power s Car
              </Label>
            </FormGroup>
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
