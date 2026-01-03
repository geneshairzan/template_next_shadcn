import { Button } from "./themedButton";
import IconButton from "./iconButton";
import Stack from "./stack";
import Modal, { ModalContainer } from "./modal";
import Icon from "./icon";
import Text from "./typography";
import Spinner from "./spinner";

const UI = {
  Button,
  IconButton,
  Col: Stack,
  Row: (props) => Stack({ row: true, ...props }),
  Modal,
  ModalContainer,
  Icon,
  Loader: Spinner,
  Text,
};

export default UI;
