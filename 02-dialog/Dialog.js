import React from "react";
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayContainer,
} from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import { motion, AnimatePresence } from "framer-motion";

function ModalDialog(props) {
  let { title, children, isOpen } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = React.useRef();
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <AnimatePresence>
      {isOpen ? (
        <OverlayContainer>
          <motion.div
            style={{
              position: "fixed",
              zIndex: 100,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...underlayProps}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FocusScope contain restoreFocus autoFocus>
              <motion.div
                {...overlayProps}
                {...dialogProps}
                {...modalProps}
                ref={ref}
                style={{
                  background: "white",
                  color: "black",
                  padding: "2rem",
                  maxWidth: 600,
                  width: "100%",
                  borderRadius: 4,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
              >
                <h3 {...titleProps} style={{ marginTop: 0 }}>
                  {title}
                </h3>
                {children}
              </motion.div>
            </FocusScope>
          </motion.div>
        </OverlayContainer>
      ) : null}
    </AnimatePresence>
  );
}

export default ModalDialog;
