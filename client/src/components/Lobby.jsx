import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Modal, Stack, Select, FormControl, MenuItem, InputLabel, TextField} from '@mui/material';
import CanvasDraw from "react-canvas-draw";
import TransferList from './TransferList'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  // States
  const [points, setPoints] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();
  const [openCanvas, setCanvasOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('red');
  const [openDeck, setDeckOpen] = useState(false);

  // functions
  const handleCanvasOpen = () => setCanvasOpen(true);
  const handleCanvasClose = () => setCanvasOpen(false);
  const handleDeckOpen = () => setDeckOpen(true);
  const handleDeckClose = () => setDeckOpen(false);
  const handleColorChange =(e)=>{
    setSelectedColor(e.target.value);
  }
  const handlePoints = (e) =>{
    setPoints(Number(e.target.value));
  }
  const handleDescription =(e) => {
    setDescription(e.target.value);
  }
  const handleTags = (e) => {
    setTags(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      points: points,
      description: description,
      tags: tags
    }
    console.log('data: ', data)
  }
  return (
    <div>
      <h1>Lobby</h1>
      <div>
        <h4>Players</h4>
        <div>Player 1</div>
        <div>Player 2</div>
        <div>Player 3</div>
        <div>Player 4</div>
      </div>
      <Button onClick={handleCanvasOpen}>Add A Card!</Button>
      <Modal
        open={openCanvas}
        onClose={handleCanvasClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Add A card!
          </Typography>
        <Stack direction="row" spacing={2}>
          <CanvasDraw brushColor={selectedColor} />
          <Stack direction="column" spacing={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Settings:
            </Typography>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedColor}
                label="Color"
                onChange={handleColorChange}
              >
                <MenuItem value={'black'}>Black</MenuItem>
                <MenuItem value={'red'}>Red</MenuItem>
                <MenuItem value={'blue'}>Blue</MenuItem>
                <MenuItem value={'yellow'}>Yellow</MenuItem>
                <MenuItem value={'orange'}>Orange</MenuItem>
                <MenuItem value={'green'}>Green</MenuItem>
                <MenuItem value={'pink'}>Pink</MenuItem>
              </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Points" variant="outlined" onChange={handlePoints}/>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={3}
              onChange={handleDescription}
            />
            <TextField id="outlined-basic" label="Tags" variant="outlined" onChange={handleTags} />
            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Stack>
        </Box>
      </Modal>

      <div>
      <div>
      <Button onClick={handleDeckOpen}>Edit Deck</Button>
      <Modal
        open={openDeck}
        onClose={handleDeckClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Library || Current Deck
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
          <TransferList />
        </Box>
      </Modal>
      </div>
        <Link to="/Game">START GAME</Link>
        <br />
        <Link to="/">Exit</Link>
      </div>
    </div>
  );
}