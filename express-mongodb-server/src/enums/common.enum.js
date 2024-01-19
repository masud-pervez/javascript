
const grant_types = {
    ACCESS_TOKEN: 'access',
    REFRESH_TOKEN: 'refresh',
    RESET_PASSWORD: 'resetPassword',
};

const user_role = {
    SUPER_ADMIN: 'Super Admin',
    ADMIN: 'Admin',
    OPERATOR: 'Operator'
};

const env_mode = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    TEST: 'test'
}

module.exports = {
    grant_types,
    user_role,
    env_mode
};

