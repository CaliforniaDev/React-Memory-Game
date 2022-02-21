import styled from 'styled-components';
import Images from '../utils/CardImagesArray';
const CardItem = ({title, imageSrc}) => {
  console.log(Images);
  return (
    <CardContainer>
      <ImageWrapper>
        <img src={imageSrc} alt="Beaver" />
      </ImageWrapper>
      <h4>{title}</h4>
    </CardContainer>
  );
}

export default CardItem;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 32rem;
  align-items: center;
  height: 40rem;
  border-radius: 0.8rem;
  color: #fff;
  background: #5E5437;
  overflow: hidden;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  background-color: #C4B072;
  border-radius: 0.8rem;
  height: 28rem;
  width: 28rem;
  margin: 2.4rem;
`
// /* Color Theme Swatches in Hex */
// .Wuling---Year-of-the-Ox-1-hex { color: #038C3E; }
// .Wuling---Year-of-the-Ox-2-hex { color: #04BF45; }
// .Wuling---Year-of-the-Ox-3-hex { color: #F2B807; }
// .Wuling---Year-of-the-Ox-4-hex { color: #F29727; }
// .Wuling---Year-of-the-Ox-5-hex { color: #F24C27; }

// /* Color Theme Swatches in RGBA */
// .Wuling---Year-of-the-Ox-1-rgba { color: rgba(2, 140, 62, 1); }
// .Wuling---Year-of-the-Ox-2-rgba { color: rgba(3, 191, 69, 1); }
// .Wuling---Year-of-the-Ox-3-rgba { color: rgba(242, 183, 7, 1); }
// .Wuling---Year-of-the-Ox-4-rgba { color: rgba(242, 150, 38, 1); }
// .Wuling---Year-of-the-Ox-5-rgba { color: rgba(242, 76, 38, 1); }

// /* Color Theme Swatches in HSLA */
// .Wuling---Year-of-the-Ox-1-hsla { color: hsla(146, 96, 28, 1); }
// .Wuling---Year-of-the-Ox-2-hsla { color: hsla(140, 96, 38, 1); }
// .Wuling---Year-of-the-Ox-3-hsla { color: hsla(45, 94, 48, 1); }
// .Wuling---Year-of-the-Ox-4-hsla { color: hsla(33, 88, 55, 1); }
// .Wuling---Year-of-the-Ox-5-hsla { color: hsla(11, 88, 55, 1); }