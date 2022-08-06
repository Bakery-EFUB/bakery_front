import http from "../common/http";

const ProposalService = {
  getOrder: () => http.get(`/orders`),
  getProposal: id => http.get(`/orders/${id}`),
  delProposal: id => http.delete(`/orders/${id}`),
  getOrderFilter: () => http.get(`/orders/${loc - gu}/${loc - dong}`),
};
export default ProposalService;
