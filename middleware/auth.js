// export default function (context) {
//   context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
// }
// export default function({ store, redirect, route }) {
//   store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
//   store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
// }