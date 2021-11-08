// define app store actions names
import axios from 'axios'
import PORT from '../common/Constant'
export const ACTION_APP_INCREMENT = 'ActionAppIncrement'
export const ACTION_APP_DECREMENT = 'ActionAppDecrement'
export const ACTION_LOGIN_USER = 'ActionLoginUser'
export const ACTION_CREATE_USER = 'ActionCreateUser'
export const ACTION_GET_USER_WORKINGTIMES = 'ActionGetUserWorkingtimes'
export const ACTION_CREATE_GROUP = 'ActionCreateGroup'
// define app store mutations names
const INCREMENT_VALUE = 'IncrementValue'
const DECREMENT_VALUE = 'DecrementValue'
const LOGIN_USER = 'LoginUser'
const CREATE_USER = 'CreateUser'
const GET_USER_WORKINGTIMES = 'GetUserWorkingtimes'
const CREATE_GROUP = 'CreateGroup'
// initial app state
const state = {
    counter: 0,
    users: [

    ],
    user: {
        id: 0,
        username: "",
        email: ""
    },
    selectedUserWorkingtimes: [],
    currentUserWorkingtimes: [],
    groups: []
}

const getters = {
    getCounter(state) {
        return state.counter
    },
    getUserId(state) {
        return state.user.id
    }
}

// app store actions
const actions = {
    [ACTION_CREATE_GROUP](context, group) {
        axios({
            url: `http://localhost:${PORT}/api/groups`,
            method: "POST",
            mode: "cors",
            cache: "default",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify({
                group
            }),
        })
            .then((res) => {
                context.commit(CREATE_GROUP, res.data.data)
            })
            .catch((err) => {
                console.log("catch");
                this.alert = true;
                this.alertmsg = err;
            });
    },
    [ACTION_GET_USER_WORKINGTIMES](context, userid) {
        axios
            .get(
                `http://localhost:${PORT}/api/workingtimes/users/${userid}`
            )
            .then((result) => {
                context.commit(GET_USER_WORKINGTIMES, result.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    },
    [ACTION_CREATE_USER](context, user) {
        axios({
            url: `http://localhost:${PORT}/api/users`,
            method: "POST",
            mode: "cors",
            cache: "default",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify({
                user: {
                    username: user.username,
                    email: user.email,
                },
            }),
        })
            .then((res) => {
                context.commit(CREATE_USER, res.data.data)
            })
            .catch((err) => {
                console.log("catch");
                this.alert = true;
                this.alertmsg = err;
            });
    },
    [ACTION_LOGIN_USER](context, credentials) {
        axios({
            url: `http://localhost:${PORT}/api/user/login`,
            method: "POST",
            mode: "cors",
            cache: "default",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify({
                user: {
                    username: credentials.username,
                },
            }),
        })
            .then((res) => {
                context.commit(LOGIN_USER, res.data.data)
            })
            .catch((err) => {
                console.log("catch");
                this.alert = true;
                this.alertmsg = err;
            });
    },
    [ACTION_APP_INCREMENT](context) {
        context.commit(INCREMENT_VALUE);
    },
    [ACTION_APP_DECREMENT](context) {
        context.commit(DECREMENT_VALUE);
    }
}

// app store mutations
const mutations = {
    [CREATE_GROUP](state, group) {
        newGroupsState = state.groups
        newGroupsState.push(group)
        state.groups = newGroupsState
    },
    [GET_USER_WORKINGTIMES](state, workingtimes) {
        state.selectedUserWorkingtimes = workingtimes
    },
    [LOGIN_USER](state, user) {
        state.user = user
    },
    [CREATE_USER](state, user) {
        newUsersState = state.users
        newUsersState.push(user)
        state.users = newUsersState
    },
    [INCREMENT_VALUE](state) {
        state.counter = state.counter + 1

        console.log('New counter value: ' + state.counter)
    },
    [DECREMENT_VALUE](state) {
        state.counter = state.counter - 1

        console.log('New counter value: ' + state.counter)
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}