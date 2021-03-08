import React from 'react'
import Lottie from 'react-lottie';
// import animationData  from './animations/welcome.json'

const LottieAnim = ({ animationData }) => {

  // alert(JSON.stringify(animationData))
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('./animations/' + animationData),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ margin: 'auto', height: 'auto' }}>

      <Lottie options={defaultOptions}
        height={'200px'}
        width={'200px'}
      />
    </div>
  )





};
LottieAnim.defaultProps = {
  animationData: "welcome.json",
}

export default LottieAnim;


