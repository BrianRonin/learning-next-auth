export const if_window = (
  ifWindow?: () => any,
  ifNoWindow?: () => any,
) => {
  if (typeof window !== 'undefined') {
    // we are running on the client
    return ifWindow && ifWindow()
  } else {
    // we are running on the server
    return ifNoWindow && ifNoWindow()
  }
}
