function getUserName(name, cb) {
    cb(name.toUpperCase());
    return name.toUpperCase();
}

module.exports = getUserName;