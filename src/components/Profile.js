import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Profile = ({ profileData, askData }) => {
  const classes = useStyles();
  const { newRequestFriend, profile } = useContext(ApiContext);

  const newRequest = () => {
    const askUploadData = new FormData();
    askUploadData.append("askTo", profileData.userPro);
    newRequestFriend(askUploadData);
  };

  return (
    <Card style={{ position: "relative", display: "flex", marginBottom: 10 }}>
      {profileData.img ? (
        <CardMedia style={{ minWidth: 100 }} image={profileData.img} />
      ) : (
        <CardMedia
          style={{ minWidth: 100 }}
          image="http://127.0.0.1:8000/media/image/null.png"
        />
      )}

      <CardContent style={{ padding: 5 }}>
        <Typography variant="h6">{profileData.nickName}</Typography>
        <Typography>{profileData.created_on}</Typography>
        {!askData[0] && profile.id ? (
          <Button
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => newRequest()}
          >
            Ask as friend
          </Button>
        ) : (
          <Button
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
            disabled
          >
            Ask as friend
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Profile;
