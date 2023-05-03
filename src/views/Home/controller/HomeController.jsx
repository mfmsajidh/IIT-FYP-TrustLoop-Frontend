import { useState } from "react";
import { AddPostDialogView } from "../view/AddPostDialogView.jsx";
import { HomeView } from "../view/HomeView.jsx";

const HomeController = () => {
  const [open, setOpen] = useState(true);
  const [addPostDetails, setAddPostDetails] = useState({
    image: null,
    condition: "new",
    category: "laptop",
    postTitle: "",
    serialNumber: "",
    price: 0,
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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HomeView handleClickOpen={handleClickOpen} />
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
      />
    </>
  );
};

export default HomeController;
