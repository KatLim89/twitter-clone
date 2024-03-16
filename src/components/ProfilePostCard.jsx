import { Button, Image, Row, Col, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deletePost,
  likePost,
  removeLikeFromPost,
} from "../features/posts/postsSlice";
import { AuthContext } from "./AuthProvider";
import UpdatePostModal from "./UpdatePostModal";

export default function ProfilePostCard({ post }) {
  const { content, id: postId, imageUrl } = post;
  const [likes, setLikes] = useState(post.likes || []);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.uid;

  const pic =
    "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg";

  // Modal to update a post
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  // User has liked the post if their id is in the likes array
  const isLiked = likes.includes(userId);
  const handleLike = () => (isLiked ? removeFromLikes() : addToLikes());

  // add userID to likes array
  const addToLikes = () => {
    setLikes([...likes, userId]);
    dispatch(likePost({ userId, postId }));
  };

  // remove userID from likes array and update the backend
  const removeFromLikes = () => {
    setLikes(likes.filter((id) => id !== userId));
    dispatch(removeLikeFromPost({ userId, postId }));
  };

  // Modal to delete a post
  const [deleteModal, setDeleteModal] = useState(false);
  const handleShowDeleteModal = () => setDeleteModal(true);
  const handleCloseDeleteModal = () => setDeleteModal(false);
  const handleDelete = () => {
    dispatch(deletePost({ userId, postId }));
  };

  return (
    <Row
      className="p-3"
      style={{
        borderTop: "1px solid #d3d3d3",
        borderBottom: "1px solid #d3d3d3",
      }}
    >
      <Col sm={1}>
        <Image src={pic} fluid roundedCircle />
      </Col>

      <Col>
        <strong>Katherine</strong>
        <span> @katherine · Mar 14</span>
        <p>{content}</p>
        <Image src={imageUrl} style={{ width: 150 }} />
        <div className="d-flex justify-content-between">
          <Button variant="light">
            <i className="bi bi-chat"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-repeat"></i>
          </Button>
          <Button variant="light" onClick={handleLike}>
            {isLiked ? (
              <i className="bi bi-heart-fill text-danger pe-2" />
            ) : (
              <i className="bi bi-heart pe-2" />
            )}
            {likes.length}
          </Button>
          <Button variant="light">
            <i className="bi bi-graph-up"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-upload"></i>
          </Button>
          <Button variant="light">
            <i
              className="bi bi-pencil-square"
              onClick={handleShowUpdateModal}
            />
          </Button>
          <Button variant="light" onClick={handleShowDeleteModal}>
            <i className="bi bi-trash" />
          </Button>
          <UpdatePostModal
            show={showUpdateModal}
            handleClose={handleCloseUpdateModal}
            postId={postId}
            originalPostContent={content}
          />
          <Modal show={deleteModal} onHide={handleCloseDeleteModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDeleteModal}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Col>
    </Row>
  );
}
