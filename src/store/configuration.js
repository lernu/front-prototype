import offlineConfig from '@redux-offline/redux-offline/lib/defaults'

// const effectReconciler = ({url, ...opts}) => {
//   return fetch(url, opts).then(res => {
//     console.log('fetch success!!!!!!!', res)
//     if (res.ok) {
//       return res.json()
//     } else {
//       return Promise.reject(res.text().then(msg => new Error(msg)))
//     }
//   })
// }



const customConfig = {
  ...offlineConfig,
//  effect: effectReconciler
}

export default customConfig
