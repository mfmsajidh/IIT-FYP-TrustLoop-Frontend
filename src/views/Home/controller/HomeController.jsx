import { useContext, useState } from "react";
import { AddPostDialogView } from "../view/AddPostDialogView.jsx";
import { HomeView } from "../view/HomeView.jsx";
import { UserContext } from "../../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const HomeController = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const isLoggedIn = user.token !== "";
  const [open, setOpen] = useState(false);
  const [addPostDetails, setAddPostDetails] = useState({
    image: null,
    condition: "new",
    category: "mobile",
    postTitle: "",
    serialNumber: "",
    price: 0,
    value: "",
  });

  const handleImageChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      image: event.target.files[0],
    });
  };

  const handleConditionChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      condition: event.target.value,
    });
  };

  const handlePostTitleChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      postTitle: event.target.value,
    });
  };
  const handleSerialNumberChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      serialNumber: event.target.value,
    });
  };

  const handleCategoryChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      category: event.target.value,
    });
  };
  const handlePriceChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      price: event.target.value,
    });
  };

  const handleClickOpen = () => {
    if (!isLoggedIn) navigate("/signin", { replace: true });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePurchase = () => {
    if (!isLoggedIn) navigate("/signin", { replace: true });
  };

  const handleValueChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      value: event.target.value,
    });
  };

  return (
    <>
      <HomeView
        handleClickOpen={handleClickOpen}
        isLoggedIn={isLoggedIn}
        handlePurchase={handlePurchase}
      />
      <AddPostDialogView
        open={open}
        handleClose={handleClose}
        addPostDetails={addPostDetails}
        handleConditionChange={handleConditionChange}
        handleCategoryChange={handleCategoryChange}
        handleImageChange={handleImageChange}
        handlePostTitleChange={handlePostTitleChange}
        handleSerialNumberChange={handleSerialNumberChange}
        handlePriceChange={handlePriceChange}
        handleValueChange={handleValueChange}
      />
    </>
  );
};

export default HomeController;
