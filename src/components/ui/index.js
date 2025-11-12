import { Button } from "./themedButton";
import IconButton from "./iconButton";
import Stack from "./stack";
import Modal, { ModalContainer } from "./modal";
import Icon from "./icon";
import Text from "./typography";
import Spinner from "./spinner";
import Image from "next/image";

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
  Img: Image,
};

export default UI;
