# Development Environment

## Git Hooks

1.  Install [pre-commit](https://pre-commit.com/) to enable git hooks for automated linting, testing, documentation generation, and other helpful hooks to keep you from accidental commit mistakes. For convenience an npm script exists to install and configure the hooks (one-time only): `npm run hook-install`

    Note: pre-commit requires python, see the above link for alternative methods of installing

1.  The first time you commit after installing pre-commit, it will set up an environment for the hooks. This only happens once or if new types of hooks are added.
1.  Hooks are limited to the types or location of files you are changing in a commit. Only applicable hooks run. For example,
1.  You can skip all hooks by using `git commit --no-verify`, however, read the next step as you might want to just skip a specific hook.
1.  As detailed in [.pre-commit-config.yaml](../.pre-commit-config.yaml), you may temporarily skip a hook by adding a `SKIP` env var to your commit call.

    ```bash
    SKIP=jest,eslint git commit  # won't run jest or eslint even when you're committing a change to src/
    ```

    Note: you may also permanently add the `SKIP` env var to your environment if you always want to skip a step.

1.  Troubleshooting/uninstalling:
    ```bash
    pre-commit clean      # force pre-commit to rebuild the hook environment (useful for troubleshooting)
    pre-commit uninstall  # don't use the hooks in this project anymore
    ```
