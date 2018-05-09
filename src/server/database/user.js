const {ObjectId} = require("mongodb");

const {getSessionInfo, saveSessionInfo} = require("./session");
const {pageableCollection, insertOrUpdateEntity} = require("./helpers"); //insertOrUpdateEntity для создания пользователя

const TABLE = "users";

/**
 * @typedef {{
 *  [_id]: string,
 *  name: string,
 *  email: string,
 *  phone: string,
 *  [status]: boolean
 * }} User
 */

/**
 * @param {Db} db
 * @param {string} sid Session ID
 *
 * @returns {Promise<User>}
 */
async function findUserBySid(db, sid) {
    let session = await getSessionInfo(db, sid);

    if(session.userId) {
        return db.collection(TABLE).findOne({_id: session.userId});
    }
}

/**
 * @param {Db} db
 * @param {string} userId
 *
 * @returns {Promise<User>}
 */
async function getUser(db, userId) {
    return db.collection(TABLE).findOne({_id: ObjectId(userId.toString())});
}

async function getUserBySid(db, sid) {
    let session = await getSessionInfo(db, sid);
    return db.collection(TABLE).findOne({_id: session.userId});
}
/**
 * @param {Db} db
 * @param {User} user
 *
 * @returns {Promise<User>}
 */
async function saveUser(db, user) {
    return insertOrUpdateEntity(db.collection(TABLE), user);
}

async function saveNewUser(db, user, sid) {
    const session = await getSessionInfo(db, sid);
    let newUser = await saveUser(db, user);
    session.userId = newUser._id;
    await saveSessionInfo(db, session);

    return newUser;
}

/**
 * @param {Db} db
 * @param {{}} [filter]
 *
 * @return {Promise<Pagination<User>>}
 */
async function getUsers(db, filter) {
    return pageableCollection(db.collection(TABLE), filter);
}

async function getUserByName(db, name, sid) {
    let user = await db.collection(TABLE).findOne({name: name});
    let saveses = await saveSessionInfo(db, {sid: sid, userId: user._id});
    let session = await getSessionInfo(db, saveses._id);
    return {sid: session.sid, ...user};
}
module.exports = {
    findUserBySid,
    saveNewUser,
    getUsers,
    getUser,
    getUserByName,
    getUserBySid
};
