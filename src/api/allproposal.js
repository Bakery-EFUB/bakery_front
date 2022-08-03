import Proposals from "../proposals/proposals";

export const GetProposals = async() => {
    try{
        const res = await Proposals.getOrder();
        console.log(res)
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    };
}