export const LINEAR = {
    OAUTH_ID: process.env.LINEAR_OAUTH_ID || "de24196afa78e6f3f99875b753a3ae29",
    OAUTH_URL: "https://linear.app/oauth/authorize",
    TOKEN_URL: "https://api.linear.app/oauth/token",
    SCOPES: ["write"],
    NEW_TOKEN_URL: "https://linear.app/settings/api",
    TOKEN_SECTION_HEADER: "Personal API keys",
    GRAPHQL_ENDPOINT: "https://api.linear.app/graphql",
    IP_ORIGINS: process.env.LINEAR_IP_ORIGINS ? process.env.LINEAR_IP_ORIGINS.split(",") : ["35.231.147.226", "35.243.134.228"],
    STORAGE_KEY: "linear-context",
    APP_URL: "https://linear.app",
    GITHUB_LABEL: "linear"
};

export const GITHUB = {
    OAUTH_ID: process.env.GITHUB_OAUTH_ID || "487937ed57e1d5ffea0d",
    OAUTH_URL: "https://github.com/login/oauth/authorize",
    TOKEN_URL: "https://github.com/login/oauth/access_token",
    SCOPES: ["repo", "write:repo_hook", "read:user", "user:email"],
    NEW_TOKEN_URL: "https://github.com/settings/tokens/new",
    TOKEN_NOTE: "Linear-GitHub Sync",
    WEBHOOK_EVENTS: ["issues", "issue_comment", "label"],
    LIST_REPOS_ENDPOINT:
        "https://api.github.com/user/repos?per_page=100&sort=updated",
    USER_ENDPOINT: "https://api.github.com/user",
    REPO_ENDPOINT: "https://api.github.com/repos",
    ICON_URL:
        "https://cdn.discordapp.com/attachments/937628023497297930/988735284504043520/github.png",
    STORAGE_KEY: "github-context",
    UUID_SUFFIX: "decafbad"
};

export const TIMEOUTS = {
    DEFAULT: 3000
};

export const GENERAL = {
    APP_NAME: "Linear-GitHub Sync",
    APP_URL: process.env.APP_URL || "https://synclinear.com",
    CONTRIBUTE_URL: "https://github.com/calcom/linear-to-github"
};

