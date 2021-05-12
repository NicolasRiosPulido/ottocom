export const handleAuth = async (ctx) => {
    const { req: { headers: { cookie } = {} } = {} } = ctx
    if (!cookie) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}

export const handleAuthLogIn = async (ctx) => {
    const { req: { headers: { cookie } = {} } = {} } = ctx
    if (cookie) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}
