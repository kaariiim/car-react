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
        size="xs"
        className="mb-2"
        onClick={() => setIsOpened(true)}
        
      >
        <FontAwesomeIcon icon={faAdd} className="pr-2" />
        Added Cars
        
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader>
          Cars model 
          <button className="float-right btn btn-default" onClick={() => setIsOpened(!isOpened)}> X  </button>
        </ModalHeader>
        <ModalBody>
          <Form >
              <div className="form-group">
                <Label for="model">
                  Model
                </Label>
                <Input
                  value={model}
                  id="model"
                  name="model"
                  type="text"
                  className="form-group"
                  onChange={(e) => setModel(e.target.value)}
                /> 
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
                /> 
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
