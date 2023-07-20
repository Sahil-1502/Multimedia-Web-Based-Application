export const loginStart = () => ({
    type:"LOGIN_START",
});
export const loginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload: user,                                      //send the user to me
});
export const loginFailure = () => ({                    //generic error status msgs will be given
    type:"LOGIN_FAILURE",
});

//logout

export const logout = () => ({
    type:"LOGOUT",
});

//no reason to write login success or failure
//delete our user from state
//also initial state to change to null again