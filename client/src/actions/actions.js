export const actionPending = name => ({type: "PENDING", name});
export const actionRejected = (error, name) => ({type: "REJECT", error, name});
export const actionResolved = (payload, name) => ({type: "RESOLVED", payload, name});