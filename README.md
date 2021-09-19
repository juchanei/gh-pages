# gh-pages

**gh-pages** actions은 특정 디렉토리에 빌드 된 정적 페이지를 Github pages에 publish 할 수 있도록 돕습니다.

## Usage

See [action.yml](action.yml)

아래 workflow steps는 lib 디렉토리에 빌드 된 정적 페이지를 gh-pages 브랜치에 push 합니다.
``` yaml
steps:
- uses: actions/checkout@v2
- run: echo 'build pages'
- uses: plasma/gh-pages@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    dir: lib
```
`dest` 옵션을 통해 다른 정적 페이지를 각각 다른 디렉토리에 배포할 수 있습니다.
``` yaml
# Job A
- uses: plasma/gh-pages@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    dir: dist/user
    dest: user

# Job B
- uses: plasma/gh-pages@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    dir: dist/product
    dest: product
```