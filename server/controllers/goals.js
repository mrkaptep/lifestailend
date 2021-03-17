module.exports = {
   createGoal: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.session.user;
      const { title, content, timeTable } = req.body;
      let date = new Date;
      if(id){
         db.goals.create_goal([
            id, 
            date, 
            title, 
            content, 
            timeTable 
         ])
         .then(goals => res.status(200).send(goals))
      } else {
         res.status(403).send('please log in');
      }
   },

   getGoals: (req, res) => {
      const db = req.app.get('db')
      const { id } = req.session.user;
      db.goals.get_goals(id).then((goals) => {
         res.status(200).send(goals)
      })
   },

   getGoal: (req ,res) => {
      req.app.get('db').goals.get_goal(req.params.id)
      .then((goals) => {
         res.status(200).send(goals)
         console.log('getGoal--------', goal)
      })
   },


   editGoal: (req, res) => {
      const db = req.app.get('db')
      const { title, content, timeTable} = req.body;
      const {goal_id} = req.params
      db.goals.edit_goal(goal_id, title, content, timeTable)
      .then((goals) => {
         res.status(200).send(goals)
      })
   },

   deleteGoal: (req, res) => {
      console.log(req.params.id, 'delete ctrl-------')
      req.app.get('db').goals.delete_goal(req.params.id)
      .then(_=> res.sendStatus(200))
   }
}