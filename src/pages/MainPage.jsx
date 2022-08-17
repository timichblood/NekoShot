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
import Carusel from "../components/Carousel";

function MainPage() {
  const { anime, currentPage, getAnime, pagesCount, setCurrentPage } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getAnime();
  }, []);

  React.useEffect(() => {
    getAnime();
  }, [currentPage]);

  return (
    <div className="all-products">
      <div className="carusel">
        <Carusel />
      </div>
      <Container>
        <div className="products">
          {anime.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" height={300} image={item.photo} />
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
                    <span>Price</span>
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

export default MainPage;
