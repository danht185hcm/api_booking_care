class demoCtrl {
  // [GET] api/v1/demo
  getDemo(req, res) {
    return res.json({ message: `Làm được rồi :))))` });
  }
}

export default new demoCtrl();
