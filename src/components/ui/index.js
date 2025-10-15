import { Button } from "./button";
import Stack from "./stack";
import Modal, { ModalContainer } from "./modal";
import Icon from "./icon";
import Text from "./typography";

const UI = {
  Button,
  Col: Stack,
  Row: (props) => Stack({ row: true, ...props }),
  Modal,
  ModalContainer,
  Icon,
  Text,
};

export default UI;
