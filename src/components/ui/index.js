import { Button } from "./button";
// import { Button } from "./composed/themedButton";
import IconButton from "./composed/iconButton";
import Stack from "./composed/stack";
import Modal from "./composed/modal";
import Icon from "./composed/icon";
import Text from "./composed/typography";
import Spinner from "./composed/spinner";
import Dialog from "./composed/dialog";
import Tooltip from "./composed/tooltip";
import DialogConfirm from "./composed/dialogConfirm";
import DialogDrawer from "./composed/dialogDrawer";
import { Skeleton as Draft } from "./skeleton";

const UI = {
  Button,
  IconButton,
  Col: Stack,
  Row: (props) => Stack({ row: true, ...props }),
  Modal,
  Icon,
  Loader: Spinner,
  Text,
  Dialog,
  DialogConfirm,
  DialogDrawer,
  Draft,
  Tooltip,
};

export default UI;
