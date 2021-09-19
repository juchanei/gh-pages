const core = require('@actions/core')
const github = require('@actions/github')
const ghpages = require('./gh-pages')

const GITHUB_ACTOR = process.env.GITHUB_ACTOR
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY

!async function() {
    try {
        const githubToken = core.getInput('github-token', { required: true })
        const repository = GITHUB_REPOSITORY

        const octocat = github.getOctokit(githubToken)
        const { data: { name, email } } = await octocat.rest.users.getByUsername({ username: GITHUB_ACTOR })

        const dir = core.getInput('dir', { required: true }) || 'dist'
        const options = {
            branch: core.getInput('branch') || 'gh-pages',
            dest: core.getInput('dest') || '.',
            message: core.getInput('message') || 'Publish gh-pages',
            repo: `https://git:${githubToken}@github.com/${repository}.git`,
            user: { name, email },
        }

        core.info(JSON.stringify(options, null, 2))

        await ghpages.publish(dir, options)
    }
    catch (err) {
        core.info(err.message)
        core.setFailed(err)
    }
}()
