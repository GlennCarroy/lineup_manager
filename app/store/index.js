const { players, lines, backups, game } = require('../lib/data.js')
import Vue from 'vue'

const defaultState = () => ({
    players,
    lines,
    backups,
    game: {
        jams: []
    }
})

export const state = () => defaultState()

export const mutations = {
    SET(state, { key, value }) {
        const splitted = key.split('.')
        const lastKey = splitted.pop()
        let origin = state
        splitted.forEach(p => {
            // Si origin est vide et n'est pas un Boolean alors définir origin comme Object vide
            if (!origin[p] && typeof origin[p] !== 'boolean') {
                Vue.set(origin, p, {})
            }
            origin = origin[p]
        })
        Vue.set(origin, lastKey, value)
    },
    UNSET(state, { key }) {
        const splitted = key.split('.')
        const lastKey = splitted.pop()
        let origin = state
        splitted.forEach(p => {
            // Si origin est vide et n'est pas un Boolean alors définir origin comme Object vide
            if (!origin[p] && typeof origin[p] !== 'boolean') {
                Vue.set(origin, p, {})
            }
            origin = origin[p]
        })
        Vue.set(origin, lastKey, null)
    },
    CLEAR(state) {
        const initial = defaultState()
        Object.keys(initial).forEach(k => {
            state[k] = initial[k]
        })
    },
    ADD_ELEMENT_TO_LIST(state, { path, value }) {
        get(state, path).push(value)
    },
    REMOVE_ARRAY_ELM(state, { key, index, id, libId }) {
        const data = get(state, key)
        if (id && libId) {
            index = data.find(el => el[libId] === id)
        }
        data.splice(index, 1)
    },
}

export const actions = {
}
