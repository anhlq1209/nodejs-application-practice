const admins = [{
    id: 1,
    name: 'Anh',
    username: 'admin',
    password: 'admin'
}];

exports.findById = function(id) {
    return admins.find(a => a.id === id);
};
exports.findByUserName = function(username) {
    return admins.find(a => a.username === username);
};