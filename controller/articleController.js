const createArticle = (req, res) => {
 
    const articlesData = req.body;
    console.log(articlesData); 
    res.status(201).json({ message: 'Articles received', article:{id:Date.now() , ...articlesData} });

};

const testApi = (req, res) => {
    res.status(200).json({ message: 'Test route is working' });
}

module.exports = { createArticle, testApi };
