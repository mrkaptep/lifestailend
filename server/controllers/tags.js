module.exports = {
   createTag: async (req, res) => {
      const db = await req.app.get('db');
      const { id } = req.session.user;
      const {tag} = req.body;
      // console.log(tag, 'ctrl');
      if(id){
         db.tags.create_tag([tag])
         .then((tag) => {
            console.log('created tag---',tag)
            res.status(200).send(tag)
         })
      } else {
         res.status(403).send('please log in');
      }
   },

   getTags: (req, res) => {
      const db = req.app.get('db')
      db.tags.get_tags().then((tags) => {
         res.status(200).send(tags)
      })
      .catch((err)=> res.status(500).send(err))
   },

   deleteTag: (req, res) => {
      req.app.get('db').tags.delete_tag(req.params.id)
      .then(_=> res.sendStatus(200))
   }
}