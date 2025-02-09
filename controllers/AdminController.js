class AdminController {
    index = function (req, res){
        res.render('admin/index')
    }
}

export default new AdminController()