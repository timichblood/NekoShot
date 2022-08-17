import React from "react";
import { AdminContext } from "../contexts/AdminProvider";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import { useEffect } from "react";

// ! ADD
function AdminPage() {
  const { sendAnime, anime, deleteAnime, getAnime } =
    React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [type, setType] = React.useState("");

  const handleSubmit = () => {
    const newAnime = {
      name: name.trim(),
      price,
      photo: photo.trim(),
      type: type.trim(),
    };
    for (let i in newAnime) {
      if (!newAnime[i]) {
        alert("Заполите поля");
        return;
      }
    }
    sendAnime(newAnime);
    setName("");
    setPrice("");
    setPhoto("");
    setType("");
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="admin-page">
      <Container>
        <h1>Admin Page</h1>
        <h3>Add form</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            className="text-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
          />
          <TextField
            className="text-field"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            label="Цена"
            variant="standard"
            type="number"
          />
          <TextField
            className="text-field"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Картинка"
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
          <Button className="btn-add" variant="outlined" type="submit">
            Add
          </Button>
        </form>
      </Container>

      <Container>
        <h3>Delete/Edit</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {anime.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <img width={100} src={item.photo} alt="" />
                </TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  <Delete onClick={() => deleteAnime(item.id)} />
                </TableCell>
                <TableCell>
                  <Link to={`/admin-edit/${item.id}`}>
                    <Edit />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}
export default AdminPage;
