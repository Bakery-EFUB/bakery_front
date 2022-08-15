import ProposalService from "../services/proposalservice";

export const GetProposal = async id => {
  try {
    const res = await ProposalService.getProposal(id);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err, "에러입니다");
  }
};

export const GetAllProposal = async () => {
  try {
    const res = await ProposalService.getOrder();
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const DelProposal = async id => {
  try {
    const res = await ProposalService.delProposal(id);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err, "에러 발생");
  }
};
