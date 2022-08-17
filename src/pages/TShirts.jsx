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

function TShirts() {
  const { clouse, getOnlyClouse } = React.useContext(AdminContext);
  const { pagesCount, setCurrentPage } = React.useContext(ClientContext);

  React.useEffect(() => {
    getOnlyClouse();
  }, []);

  return (
    <div className="all-products">
      <Container>
        <div className="products">
          {clouse.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" height={200} image={item.photo} />
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

export default TShirts;
