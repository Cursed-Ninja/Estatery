import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Card from "./Card";

const PropertyCard = ({ data }) => {
  return (
    <>
      {data.popular && <div className="ribbon-below" />}
      <Card data={data} />
      {data.popular && (
        <div className="ribbon">
          <AutoAwesomeIcon sx={{ mr: 2 }} />
          Popular
        </div>
      )}
    </>
  );
};

export default PropertyCard;
