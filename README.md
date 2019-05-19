## css-in-js-media

when you style with css-in-js (emotion, styled-component) you can easily deal with responsive design with this `css-in-js-media` which is similar with ![include-media](https://include-media.com/)

### how-to-use

```
npm install css-in-js-media
import media from "css-in-js-media";
```

#### break-point

```
smallPhone: 320
phone: 375
tablet: 768
desktop: 1024
largeDesktop: 1440

```

### example

with css-in-js library (ex: emotion.js , styled-component)

- example with `emotion.js`

```javascript
import media from "css-in-js-media";

export const exampleClass = css`
  color: red;
  ${media(">desktop")} {
    font-size: 15px;
  }
  ${media("<=desktop", ">tablet")} {
    font-size: 20px;
  }
  ${media("<=tablet", ">phone")} {
    font-size: 25px;
  }
  ${media("<=phone")} {
    font-size: 30px;
  }
`;
```

- example with `styled-component`

```javascript
import media from "css-in-js-media";

const exampleClass = styled.h1`
  color: red;
  ${media(">desktop")} {
    font-size: 15px;
  }
  ${media("<=desktop", ">tablet")} {
    font-size: 20px;
  }
  ${media("<=tablet", ">phone")} {
    font-size: 25px;
  }
  ${media("<=phone")} {
    font-size: 30px;
  }
`;
```
