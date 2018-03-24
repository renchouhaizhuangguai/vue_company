export const changePage = (state, newpage) => {
  state.pageState = newpage;
}

export const chanageUser = (state, newuser) => {
  state.userType = newuser;
}

export const changeComIndex = (state, newComIndex) => {
  state.comUtilsIndex = newComIndex;
}

export const invoiceIndex =(state,newsInvoiceIndex)=>{
  state.invoiceIndex = newsInvoiceIndex;
}

export const serviceType =(state,data)=>{
 state.serviceType=data
}