var userModels = require ('../models/userModels');
var blogModel = require ('../models/blogModel');
exports.show=function(req,res){
       res.render('login');
}
exports.indexY=function(req,res){
    blogModel.getAll(function(rs){
        res.render('index',{
            user:req.session.t_user,
            blogs:rs
        });
    });
}

exports.index=function(req,res){//请求，响应
        var username = req.body.name;
        var pwd = req.body.password;
        userModels.getByNamePwd(username,pwd,function(rs){
                if(rs.length>0){
                    req.session.t_user=rs[0];
                    res.redirect('/');
                }else{
                    res.redirect('/login')
                }

        });
}

exports.regist=function(req,res){
        res.render('regist');
}
exports.doRegist=function(req,res){
    var username = req.body.username;
    var pwd = req.body.password;
    var sex = req.body.sex;
    userModels.getByName(username,function(rs){
        if(rs.length>0){
            res.render('regist');
        }else{
            userModels.save(username,pwd,sex,function(rs){
                if(rs.affectedRows > 0){
                    res.redirect('/login');
                    //res.render('login.ejs');
                }else{
                    res.render('regist');
                }

            });

        }

    });

}
exports.view = function(req,res){
    var blog_id = req.query.blogId;
    blogModel.getByBlogId(blog_id,function(rs){
        if(rs.length>0){
            res.render('view',{
                blogs:rs
            });
        }else{
            res.redirect('/login')
        }

    });
}





    //var name = req.query.name;//req.body.user(post)
    //var age=req.query.age;
    //console.log(name+' '+age);
    //res.render('index',{//跳转页面
    //    name:'Express111',
    //    password:'hello',
        //friends:[
        //    {name:'lisi',age:34},
        //    {name:'wangwu',age:38}
        //]
   // });
   // console.log(123);
