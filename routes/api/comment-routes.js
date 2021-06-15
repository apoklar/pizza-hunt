const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;