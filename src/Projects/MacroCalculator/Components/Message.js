import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Message = ({
  open,
  handleClose,
  modalContext,
  setCut,
  setBulk,
  setOptions,
}) => {
  return (
    <div>
      {modalContext === 'cut' && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Note about Cutting
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              When in a 'cut' you need to be in a caloric deficit. This
              calculator is configured around a 1 lb weekly reduction in body
              fat.
            </Typography>
            <Button
              onClick={() => {
                setCut();
                setOptions(modalContext);
              }}
              style={{ marginTop: '15px' }}
              variant="contained"
            >
              Switch to - 1 lb per week
            </Button>
          </Box>
        </Modal>
      )}

      {modalContext === 'bulk' && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Note about Bulking
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              When in a 'bulk' you need to be in a caloric surplus. This
              calculator is configured around a 1 lb weekly increase in muscle
              mass.
            </Typography>
            <Button
              onClick={() => {
                setBulk();
                setOptions(modalContext);
              }}
              style={{ marginTop: '15px' }}
              variant="contained"
            >
              Switch to + 1 lb per week
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Message;
