const config = {
    apiPath: 'https://backoffice-jade-zeta.vercel.app/',
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }
}

export default config;