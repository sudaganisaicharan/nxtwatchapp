import {AiOutlineClose} from 'react-icons/ai'

import {
  BannerContainer,
  BannerLeftPart,
  BannerImage,
  BannerText,
  BannerButton,
  BannerRightPart,
  BannerCloseButton,
} from './styledComponents'

const Banner = props => {
  const {onCloseBanner} = props
  const closeBanner = () => {
    onCloseBanner()
  }

  return (
    <BannerContainer data-testid="banner">
      <BannerLeftPart>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>
          Buy Nxt Watch Premium prepaid plans with <br /> UPI
        </BannerText>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerLeftPart>
      <BannerRightPart>
        <BannerCloseButton data-testid="close" onClick={closeBanner}>
          <AiOutlineClose size={25} />
        </BannerCloseButton>
      </BannerRightPart>
    </BannerContainer>
  )
}

export default Banner
