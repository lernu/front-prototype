import offlineConfig from '@redux-offline/redux-offline/lib/defaults'

const effectReconciler = ({url, ...opts}) => {
  console.log('fetch resource')
  return fetch(url, opts).then(res => {
    console.log('fetch success!!!!!!!', res)
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.text().then(msg => new Error(msg)))
    }
  })
}

// const effectReconciler = ({url, ...opts}) =>
//   fetch(url, opts).then(res => res.ok
//     ? res.json()
//     : Promise.reject(res.text().then(msg => new Error(msg))));



const customConfig = {
  ...offlineConfig,
  effect: effectReconciler
}

export default customConfig
