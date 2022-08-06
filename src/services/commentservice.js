import http from "../common/http";

const CommentService = {
  postOrderId: (order_id, comment) =>
    http.post(`/orders/${order_id}/comments`, comment),
};
export default CommentService;
