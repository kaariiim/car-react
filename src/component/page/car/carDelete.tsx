import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Car from "../../../@types/car";
import { deleteCars } from "../../../action/car/action";

interface CarDeletePropsType {
  car: Car;
  refresh: () => void;
}

const CarDelete = ({ car, refresh }: CarDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteCars(car, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button color="danger" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
        Delete Car
        </ModalHeader>
        <ModalBody>
        sure to Delete this Car  {car.model}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
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

export default CarDelete;
