import '../../style/index'

if (process.env.NODE_ENV === 'dev') {
  require('./index.dev.scss')
} else {
  require('./index.scss')
}
