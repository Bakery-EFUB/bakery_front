import http from "../common/http";

const ProposalService = {
  getProposal: id => http.get(`/orders/${id}`),
};
export default ProposalService;
