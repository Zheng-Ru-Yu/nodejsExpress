var db = require('./db');

exports.getAll=function(callback){
    var sql='select blog.*,usr.user_name from t_blog blog ,t_user usr where blog.author=usr.user_id';
  db.query(sql,[],callback);
};

exports.getByBlogId= function(blogid, callback) {
    var sql = 'select * from t_blog where blog_id=? ';
    db.query(sql, [blogid], callback);
};