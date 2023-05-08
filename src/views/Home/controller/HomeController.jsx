import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AddPostDialogView } from "../view/AddPostDialogView.jsx";
import { HomeView } from "../view/HomeView.jsx";
import { UserContext } from "../../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_CONSTANTS } from "../../../constants/constants.js";
import { PostDetailDialogView } from "../view/PostDetailDialogView.jsx";

const HomeController = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const initialAddPostDetails = {
    image: null,
    condition: "new",
    category: "car",
    postTitle: "",
    serialNumber: "",
    price: 0,
    value: "",
    userId: user.id,
  };

  const isLoggedIn = user.token !== "";
  const [open, setOpen] = useState(false);
  const [openTimeline, setOpenTimeline] = useState(false);
  const [addPostDetails, setAddPostDetails] = useState(initialAddPostDetails);
  const [isAddPostLoading, setIsAddPostLoading] = useState(false);
  const [isGetAllPostsLoading, setIsGetAllPostsLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const [isPurchasingPost, setIsPurchasingPost] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    setIsGetAllPostsLoading(true);
    axios
      .get(`${API_CONSTANTS.baseUrl}/post/all`)
      .then((response) => {
        if (response.data.isError) {
          alert(`${response.data.message}`);
          return;
        }
        setAllPosts(response.data.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => setIsGetAllPostsLoading(false));
  };

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

  const handleClickOpenTimeline = () => {
    setOpenTimeline(true);
  };

  const handleCloseTimeline = () => {
    setOpenTimeline(false);
  };

  const handlePurchase = async (postId) => {
    if (!isLoggedIn) navigate("/signin", { replace: true });
    setIsPurchasingPost(true);
    await axios
      .post(`${API_CONSTANTS.baseUrl}/post/purchase`, {
        postId,
        userId: user.id,
      })
      .then((response) => {
        alert(`${response.data.message}`);
        if (response.data.isError) {
          return;
        }
        getAllPosts();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => setIsPurchasingPost(false));
  };

  const handleValueChange = (event) => {
    setAddPostDetails({
      ...addPostDetails,
      value: event.target.value,
    });
  };

  const handleSubmitPost = async () => {
    if (!addPostDetails.image) {
      alert(`Upload Image!!!`);
      return;
    }

    setIsAddPostLoading(true);

    await axios
      .postForm(`${API_CONSTANTS.baseUrl}/post/add`, addPostDetails, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then((response) => {
        alert(`${response.data.message}`);
        if (response.data.isError) {
          return;
        }
        setAddPostDetails(initialAddPostDetails);
        handleClose();
        getAllPosts();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => setIsAddPostLoading(false));
  };

  return (
    <>
      <HomeView
        handleClickOpen={handleClickOpen}
        isLoggedIn={isLoggedIn}
        handlePurchase={handlePurchase}
        isGetAllPostsLoading={isGetAllPostsLoading}
        allPosts={allPosts}
        handleClickOpenTimeline={handleClickOpenTimeline}
        isPurchasingPost={isPurchasingPost}
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
        handleSubmitPost={handleSubmitPost}
        isAddPostLoading={isAddPostLoading}
      />
      <PostDetailDialogView
        open={openTimeline}
        handleClose={handleCloseTimeline}
      />
    </>
  );
};

export default HomeController;
