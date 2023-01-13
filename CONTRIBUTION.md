# Contributing guide

### Getting started

Included in [ReadMe](https://github.com/99x-academy/slicetime/blob/main/README.md) file

### Issues

Go [issues](https://github.com/99x-academy/slicetime/issues) and check whether a relevant issue exists.

#### Create a new issue

1.  Go to New Issue
2.  Select the issue type (Feature or Bug)
3.  Add relevant details

#### Solve an issue

- Open an issue
- Assign the issue to the relevant developer.
- Create a branch
  - Checkout to ‘dev’ branch
    `git checkout dev`
  - Pull from origin
    `git pull origin`
- Create a new branch
  - Naming convention - **tag/issueNumber-issueName**
    > feat/3-login-page-implementaiton
    > bug/4-bug-name
  - Push branch
    `git push -u origin <branch-nane>`

#### Commit your updates

- Commit message - **#issueNumber message**
  > #3 login page implementation
- Push changes to origin
  `git push origin`

#### Create pull request

- Create a pull request from changed branch to **_dev_** branch
- Title of the PR - **#issueNumber , #issueNumber short-desctription**
  > #3 , #4 Login page implementation
- Add a reviewer
