module.exports = {
   createPost: async (req, res) => {
      const db = await req.app.get('db');
      const { id } = req.session.user;
      const {title, content, selectedOption} = req.body;
      let date = new Date;
      if(id){
         const[post]=await db.post.create_post([
            id,
            date,
            title,
            content
         ])
            for(let tag of selectedOption){
               console.log(tag)
               await db.post.create_post_tags([post.post_id, tag.value])
            }
            db.query(
               `SELECT 
               tailend_posts.post_id,
               tailend_posts.author_id,
               tailend_posts.date_created,
               tailend_posts.title,
               tailend_posts.content,
               post_tags.tag_id,
               tailend_tags.tag
               FROM tailend_posts
               JOIN post_tags on tailend_posts.post_id = post_tags.post_id
               JOIN tailend_tags on tailend_tags.tag_id = post_tags.tag_id`,
               [],
               {
                  decompose: {
                     pk: 'post_id',
                     columns: ['post_id','author_id','date_created','title','content'],
                     tags: {
                           pk: 'tag_id',
                           columns: { tag_id: 'tag_id', tag: 'tag' }
                     }
                  }
               } 
            ).then((posts) => {
               res.status(200).send(posts)
            })
      } else {
         res.status(403).send('please log in');
      }
   },

   readPost: (req, res) => {
      req.app.get('db').post.read_post(req.params.id)
      .then(post => post[0] ? res.status(200).send(post[0]) : res.status(200).send({}))
   },

   getPosts: (req, res) => {
      const db = req.app.get('db')
      // db.post.get_posts().then((posts) => {
      //    res.status(200).send(posts)
      db.query(
         `SELECT 
         tailend_posts.post_id,
         tailend_posts.author_id,
         tailend_posts.date_created,
         tailend_posts.title,
         tailend_posts.content,
         post_tags.tag_id,
         tailend_tags.tag
         FROM tailend_posts
         JOIN post_tags on tailend_posts.post_id = post_tags.post_id
         JOIN tailend_tags on tailend_tags.tag_id = post_tags.tag_id`,
         [],
         {
            decompose: {
               pk: 'post_id',
               columns: ['post_id','author_id','date_created','title','content'],
               tags: {
                     pk: 'tag_id',
                     columns: { tag_id: 'tag_id', tag: 'tag' }
               }
            }
         }
      ).then((posts) => {
         res.status(200).send(posts)
      })
   },

   deletePost: (req, res) => {
      req.app.get('db').post.delete_post(req.params.id)
      .then(_ => res.sendStatus(200))
   }
}