const LS_NAME_KEY = 'ttp-player-name';
const LS_UUID_KEY = 'ttp-player-uuid';

const generateUuid = () => `${(Math.random() * 36).toString(36).substring(2)}${new Date().getTime()}`;

export default {
    getPlayerName() {
        return window.localStorage.getItem(LS_NAME_KEY);
    },
    savePlayerName(name) {
        window.localStorage.setItem(LS_NAME_KEY, name);
    },
    getUuid() {
        const uuid = window.localStorage.getItem(LS_UUID_KEY);
        if (!uuid) {
            const newUuid = generateUuid();
            window.localStorage.setItem(LS_UUID_KEY, newUuid);
            return newUuid;
        }
        return uuid;
    }
};
