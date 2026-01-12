import Modal from "./modal";
import { Button } from "../button";
import Text from "./typography";
import Stack from "./stack";
import { useSwitch } from "gh-lib";

export default function DialogConfirm({ onConfirm = () => {}, triggerLabel, ...props }) {
  const modal = useSwitch();

  return (
    <>
      <Button onClick={modal.on} variant="destructive">
        {triggerLabel ?? "Delete"}
      </Button>

      <Modal open={modal.ison}>
        <Stack className="gap-1">
          <Text variant="body" bold>
            {props?.body ?? `Are your sure ? `}
          </Text>
          <Text variant="small" color="grey">
            {props?.label ?? `Your data will permanetly deleted`}
          </Text>
        </Stack>
        <Stack row className="flex-row gap-2 justify-end">
          <Button variant="outline" onClick={modal.off}>
            {"Cancel"}
          </Button>
          <Button onClick={onConfirm} variant="destructive">
            {"Confirm"}
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
