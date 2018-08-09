const get1Vh = () => window.innerHeight * 0.01
const setVhToProperty = () => {
  document.documentElement.style.setProperty('--vh', `${get1Vh()}px`)
}

export default () => {
  setVhToProperty()
  window.addEventListener('resize', () => setVhToProperty())
}
