const { promisify } = require('util')
const ghpages = require('gh-pages')

const ghPublish = promisify(ghpages.publish)

/**
 * @param {string} dir
 * @param {{
 *     add?: boolean | undefined;
 *     branch?: string | undefined;
 *     dest?: string | undefined;
 *     dotfiles?: boolean | undefined;
 *     git?: string | undefined;
 *     history?: boolean | undefined;
 *     message?: string | undefined;
 *     only?: string | undefined;
 *     push?: boolean | undefined;
 *     remote?: string | undefined;
 *     remove?: string | undefined;
 *     repo?: string | undefined;
 *     silent?: boolean | undefined;
 *     src?: string | string[] | undefined;
 *     tag?: string | undefined;
 *     user?: null | {
 *         name: string;
 *         email: string;
 *     } | undefined;
 * }} options
 * @returns {Promise<void>}
 */

function publish(dir, options) {
    return ghPublish(dir, options)
}

module.exports = {
    publish,
}
