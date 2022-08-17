import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";
import { AdminContext } from "../contexts/AdminProvider";

function Figurines() {
  const { figurines, getFigurines } = React.useContext(AdminContext);
  const { pagesCount, setCurrentPage, currentPage } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getFigurines();
  }, []);

  console.log(figurines, "here");

  // React.useEffect(() => {
  //   getFigurines();
  // }, [currentPage]);

  return (
    <div className="all-products">
      <Container>
        <div className="products">
          {figurines.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" image={item.photo} />
              <CardContent>
                <Typography
                  className="product-card-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <ul>
                  <li>
                    <span>Цена:</span>
                    <span>{item.price}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="pagination-block">
          <Pagination
            onChange={(_, newValue) => setCurrentPage(newValue)}
            count={pagesCount}
            shape="rounded"
            color="error"
          />
        </div>
      </Container>
    </div>
  );
}

export default Figurines;
