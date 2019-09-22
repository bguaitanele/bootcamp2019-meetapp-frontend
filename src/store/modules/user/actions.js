export function updateUserRequest(user) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: { user },
  };
}
export function updateUserSuccess(user) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { user },
  };
}

export function createUserRequest(user) {
  return {
    type: '@user/CREATE_REQUEST',
    payload: { user },
  };
}
