import React from "react";
import ModalDialog from "./Dialog";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { useButton } from "@react-aria/button";

export function App() {
  let state = useOverlayTriggerState({});
  let openButtonRef = React.useRef();
  let closeButtonRef = React.useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  let { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        Open Dialog
      </button>
      <ModalDialog
        title="Example modal dialog"
        isOpen={state.isOpen}
        onClose={state.close}
        isDismissable
      >
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" />
          <button {...closeButtonProps} ref={closeButtonRef}>
            Submit
          </button>
        </form>
      </ModalDialog>
    </>
  );
}
