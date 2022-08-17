import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";
import {
  Container,
  TextField,
  FormControl,
  Button,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";

function AdminEditPage() {
  const { getAnimeToEdit, animeEdit, saveEditedAnime, deleteAnime, getAnime } =
    React.useContext(AdminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [type, setType] = React.useState("");

  const handleSubmit = () => {
    const editedAnime = {
      name,
      price,
      photo,
      type,
      id,
    };
    for (let i in editedAnime) {
      if (typeof editedAnime[i] === "string") {
        if (!editedAnime[i].trim()) {
          alert("Заполирите поля");
          return;
        }
      }
    }
    saveEditedAnime(editedAnime);
    navigate(-1);
  };

  React.useEffect(() => {
    getAnimeToEdit(id);
  }, []);

  React.useEffect(() => {
    if (animeEdit) {
      setName(animeEdit.name);
      setPrice(animeEdit.price);
      setPhoto(animeEdit.photo);
      setType(animeEdit.type);
    }
  }, [animeEdit]);
  return (
    <div className="admin-edit">
      <Container>
        <h3>Edit</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            type="number"
            label="Price"
            variant="standard"
          />
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Image"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Type"
            >
              <MenuItem value="figurines">Figurines</MenuItem>
              <MenuItem value="clouse">Clouse</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" type="submit">
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminEditPage;
