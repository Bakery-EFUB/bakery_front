import ProposalService from "../services/proposalservice";

export const GetProposal = async id => {
  try {
    const res = await ProposalService.getProposal(id);
    console.log(res, "반응입니다");
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err, "에러입니다");
  }
};
