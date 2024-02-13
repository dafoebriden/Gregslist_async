export const dev = window.location.origin.includes('localhost')
// NOTE this exported variable will be used in your default axios instance
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : ''
export const domain = 'codeworksclassroom.auth0.com'
export const audience = 'https://codeworksclassroom.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'


// domain: codeworksclassroom.auth0.com
// audience: https://codeworksclassroom.com
// clientId: pOXw2OGv1LsYi7LEBmDF04RLkXQvldml