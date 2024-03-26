import Post from "../Models/PostModel.js"
export const CreatNewPost = async (req, res) => {
    try {
      const { post_title, description} = req.body;
  
      const newPost = new Post({
       
        post_title,
        description
      });
  
      // Save the document to the database
      await newPost.save();
  
      res.status(201).json({ message: 'Post created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

  export const GetPost = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
    
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const totalPosts = await Post.countDocuments();
      const hasMore = endIndex < totalPosts;
  
      const pagination = {
        currentPage: page,
        totalPages: Math.ceil(totalPosts / limit),
      };
  
      const posts = await Post.find({}, { post_title: 1, description: 1 })
        .sort({ createdAt: -1 })
        .skip(startIndex)
        .limit(limit);
  
      res.send({
        totalPosts,
        pagination,
        posts: posts,
        hasMore,
      });
    } catch (error) {
      console.error('Error retrieving images:', error);
      res.status(500).send('An error occurred');
    }
  };
  