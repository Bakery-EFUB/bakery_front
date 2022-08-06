import CommentService from "../services/commentservice";

export const PostComment = async (order_id, comment) => {
  try {
    const res = await CommentService.postOrderId(order_id, comment);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
