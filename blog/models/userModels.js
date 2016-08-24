var db = require('./db');
exports.getByNamePwd = function(name, pass, callback){
    var sql = 'select * from t_user where user_name=? and password=?';
    db.query(sql, [name, pass], callback);
};
exports.getByName = function(name, callback) {
    var sql = 'select user_name from t_user where user_name=? ';
    db.query(sql, [name], callback);
};
exports.save = function(name, pass,sex,callback){
    var sql = 'insert into t_user(user_name,password,sex) values(?,?,?)';
    db.query(sql, [name, pass,sex], callback);
};
