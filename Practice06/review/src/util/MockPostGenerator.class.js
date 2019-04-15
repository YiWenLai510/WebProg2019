import AppConfig from '../config/AppConfig.const';

const TxtGen = require('txtgen');

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

class MockPostGenerator {
  static genMockPosts(num) {
    let posts = [];
    for (let i=0; i<num; i+=1) {
      posts.push({
        id: i,
        category: randomChoice(AppConfig.CATEGORIES),
        author: randomChoice(AppConfig.AUTHORS),
        postDate: Date.now() - Math.random() * 100 * 86400000,
        image: randomChoice(AppConfig.IMAGES),
        title: TxtGen.sentence(),
        content: TxtGen.article(),
        comments: AppConfig
                    .COMMENTS
                    .map(c => ({c, r: Math.random()}))
                    .filter(({r}) => r > .5)
                    .map(({c}) => ({
                      author: randomChoice(AppConfig.AUTHORS),
                      date: Date.now() - Math.random() * 100 * 86400000,
                      content: c
                    })),
      })
    }
    return posts;
  }
}

export default MockPostGenerator;
