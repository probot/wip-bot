const handlePullRequestChange = require('../lib/handle-pull-request-change')
const nock = require('nock')
// const github = require('@octokit/rest')()

// prevent all network activity to ensure mocks are used
nock.disableNetConnect()

describe('handlePullRequestChange', () => {
  test('it is a function', () => {
    expect(typeof handlePullRequestChange).toBe('function')
  })

  // test('sets `pending` status if PR has no semantic commits and no semantic title', async () => {
  //   const context = buildContext()
  //   context.payload.pull_request.title = 'do a thing'
  //   const expectedBody = {
  //     state: 'pending',
  //     target_url: 'https://github.com/probot/semantic-pull-requests',
  //     description: 'add a semantic commit or PR title',
  //     context: 'Semantic Pull Request'
  //   }

  //   const mock = nock('https://api.github.com')
  //     .get('/repos/sally/project-x/pulls/123/commits')
  //     .reply(200, unsemanticCommits())
  //     .post('/repos/sally/project-x/statuses/abcdefg', expectedBody)
  //     .reply(200)

  //   await handlePullRequestChange(context)
  //   expect(mock.isDone()).toBe(true)
  // })

  // test('sets `success` status and `ready to be merged or squashed` description if PR has semantic commits but no semantic title', async () => {
  //   const context = buildContext()
  //   context.payload.pull_request.title = 'bananas'
  //   const expectedBody = {
  //     state: 'success',
  //     description: 'ready to be merged or rebased',
  //     target_url: 'https://github.com/probot/semantic-pull-requests',
  //     context: 'Semantic Pull Request'
  //   }

  //   const mock = nock('https://api.github.com')
  //     .get('/repos/sally/project-x/pulls/123/commits')
  //     .reply(200, semanticCommits())
  //     .post('/repos/sally/project-x/statuses/abcdefg', expectedBody)
  //     .reply(200)

  //   await handlePullRequestChange(context)
  //   expect(mock.isDone()).toBe(true)
  // })

  // test('encourages squashing when title is semantic but commits are not', async () => {
  //   const context = buildContext()
  //   context.payload.pull_request.title = 'fix: bananas'
  //   const expectedBody = {
  //     state: 'success',
  //     description: 'ready to be squashed',
  //     target_url: 'https://github.com/probot/semantic-pull-requests',
  //     context: 'Semantic Pull Request'
  //   }

  //   // since the title is semantic, no GET request for commits is needed
  //   const mock = nock('https://api.github.com')
  //     .get('/repos/sally/project-x/pulls/123/commits')
  //     .reply(200, unsemanticCommits())
  //     .post('/repos/sally/project-x/statuses/abcdefg', expectedBody)
  //     .reply(200)

  //   await handlePullRequestChange(context)
  //   expect(mock.isDone()).toBe(true)
  // })

  // test('allows `build:` as a prefix', async () => {
  //   const context = buildContext()
  //   context.payload.pull_request.title = 'build: publish to npm'
  //   const expectedBody = {
  //     state: 'success',
  //     description: 'ready to be squashed',
  //     target_url: 'https://github.com/probot/semantic-pull-requests',
  //     context: 'Semantic Pull Request'
  //   }

  //   // since the title is semantic, no GET request for commits is needed
  //   const mock = nock('https://api.github.com')
  //     .get('/repos/sally/project-x/pulls/123/commits')
  //     .reply(200, unsemanticCommits())
  //     .post('/repos/sally/project-x/statuses/abcdefg', expectedBody)
  //     .reply(200)

  //   await handlePullRequestChange(context)
  //   expect(mock.isDone()).toBe(true)
  // })
})

// function unsemanticCommits () {
//   return [
//     { commit: { message: 'fix something' } },
//     { commit: { message: 'fix something else' } }
//   ]
// }

// function semanticCommits () {
//   return [
//     { commit: { message: 'build: something' } },
//     { commit: { message: 'build: something else' } }
//   ]
// }

// function buildContext (overrides) {
//   const defaults = {
//     log: () => {
//       /* no-op */
//     },

//     // an instantiated GitHub client like the one probot provides
//     github: github,

//     // context.repo() is a probot convenience function
//     repo: (obj = {}) => {
//       return Object.assign({ owner: 'sally', repo: 'project-x' }, obj)
//     },

//     payload: {
//       pull_request: {
//         number: 123,
//         title: 'do a thing',
//         head: {
//           sha: 'abcdefg'
//         }
//       }
//     }
//   }

//   return Object.assign({}, defaults, overrides)
// }
