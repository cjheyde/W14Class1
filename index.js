import mongoose from 'mongoose';
import Blog from './model/Blog.js';

// 'mongodb+srv://carlaheyde:KpdAfrrltjBWdddm@cluster0.e1fh1gi.mongodb.net/classDatabase'
// 'mongodb://localhost:27017/classDatabase'

mongoose.connect('mongodb+srv://carlaheyde:KpdAfrrltjBWdddm@cluster0.e1fh1gi.mongodb.net/classDatabase');

// Create a new blog post and insert into database
// const article = await Blog.create({
//   title: 'Awesome Post!',
//   slug: 'awesome-post',
//   published: true,
//   content: 'This is the best post ever2',
//   tags: ['featured', 'announcement'],
// });
// console.log(article);

// Check with the Schema
// const blogSchema = new Schema({
//   title: String,
//   slug: String,
//   published: Boolean,
//   author: String,
//   content: String,
//   tags: [String],
//   createdAt: Date,
//   updatedAt: Date,
//   comments: [{
//     user: String,
//     content: String,
//     votes: Number
//   }]
// });

// article.title = "The Most Awesomest Post!!";
// await article.save();
// console.log(article);

// const article = await Blog.findById('65c93866a4788bc81c9b41d7').exec();
// console.log(article);

// const article = await Blog.findById('65c93866a4788bc81c9b41d7', "title slug content").exec();
// console.log(article);

// const blog = await Blog.deleteOne({ title: "Awesome Post!" })
// console.log(blog)

const blog = await Blog.deleteMany({ title: "The Most Awesomest Post!!" })
console.log(blog)