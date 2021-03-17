module.exports = {
   createPhotoPost: async (req, res) => {
      const db = await req.app.get('db');
      const { id } = req.session.user;
      const {photo_link} = req.body;
      let date = new Date;
      console.warn('photo', id, date, photo_link)
      if(id){
         db.photo.create_photo_post([
            id,
            date,
            photo_link
         ])
         .then(photo => res.status(200).send(photo))
      } else {
         res.status(403).send('please log in');
      }
   },

   getPhotos: (req, res) => {
      const db = req.app.get('db')
      const { id } = req.session.user;
      db.photo.get_photos(id).then((photos) => {
         res.status(200).send(photos)
      })
   },

   deletePhoto: (req, res) => {
      req.app.get('db').photo.delete_photo(req.params.id)
      .then(_ => res.sendStatus(200))
   }
}