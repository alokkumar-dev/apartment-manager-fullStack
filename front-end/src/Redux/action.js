export const ADD_FLAT ="ADD_FLAT";

export const SEARCH   = "SEARCH"
export const addFlat =(flat)=> ({type:ADD_FLAT,payload:flat})
export const searchBlock =(payload)=> ({type:SEARCH,payload})