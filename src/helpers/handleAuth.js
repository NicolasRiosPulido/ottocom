export const handleAuth = async (ctx) => {
    const { req: { headers: { cookie = '' } = {} } = {} } = ctx
    const auth = cookie.includes('token')
    if (!auth) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    return {
        props: {
            esta: cookie
        },
    }
}

export const handleAuthLogIn = async (ctx) => {
    const { req: { headers: { cookie = '' } = {} } = {} } = ctx
    const auth = cookie.includes('token')
    if (auth) {
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
