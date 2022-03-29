import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { addCar } from "../../../action/car/action";

interface CarAddPropsType {
  refresh: () => void;
}



const CarAdd = (props: CarAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [model, setModel] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [horsepower, setHorsepower] = useState<number>(0);

  const submit = () => {
    const newCar = {
      model,
      color,
      horsepower,
    };

    addCar(newCar, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setModel("");
    setColor("");
    setHorsepower(0);
    
  };

  return (
    <>
      <Button
        color="success"
        size="lg"
        className="mb-2"
        onClick={() => setIsOpened(true)}
      >
        Added Cars {" "}
        <FontAwesomeIcon icon={faAdd} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-success text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
         Cars
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={model}
                id="model"
                name="model"
                type="text"
                onChange={(e) => setModel(e.target.value)}
              />
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
               />
              <Label for="color">
                Car s Color
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
          <Button color="success" onClick={submit}>
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

export default CarAdd;
