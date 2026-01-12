import Modal from "./modal";
import { Button } from "../button";
import Text from "./typography";
import Stack from "./stack";
import { useSwitch } from "gh-lib";

export default function Dialog({ onConfirm = () => {}, triggerLabel, ...props }) {
  const modal = useSwitch();

  return (
    <>
      <Button onClick={modal.on}>{triggerLabel ?? "Dialog"}</Button>

      <Modal open={modal.ison}>
        <Stack className="gap-1">
          <Text variant="body" bold>
            {props?.label ?? `Are your sure ? `}
          </Text>
          <Text variant="small" color="grey">
            {props?.body ?? `Your data will permanetly deleted`}
          </Text>
        </Stack>
        <Stack row className="flex-row gap-2 justify-end">
          <Button onClick={modal.off}>{"Understand"}</Button>
        </Stack>
      </Modal>
    </>
  );
}
