const SvgIcon = ({fill,width,height}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width? width :"47"}
      height={height? height:"68"}
    fill="none"
    viewBox="0 0 47 68"
  >
    <mask
      id="mask0_7_3"
      width={width? width :"47"}
      height={height? height:"68"}
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <rect
        width="35.148"
        height="46"
        x="0.339"
        y="67.558"
        fill="url(#pattern0_7_3)"
        rx="1"
        transform="rotate(-90.297 .339 67.558)"
      ></rect>
      <rect
        width="35"
        height="45.806"
        fill="url(#pattern1_7_3)"
        rx="1"
        transform="scale(1 -1)rotate(-89.467 -.215 -.213)"
      ></rect>
    </mask>
    <g mask="url(#mask0_7_3)">
      <path fill="#fff" d="M0 0h46v67H0z"></path>
    </g>
    <defs>
      <pattern
        id="pattern0_7_3"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#image0_7_3"
          transform="matrix(.02845 0 0 .02174 .03 .008)"
        ></use>
      </pattern>
      <pattern
        id="pattern1_7_3"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#image0_7_3"
          transform="matrix(.02845 0 0 .02174 .03 .008)"
        ></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAuCAYAAACyJ+5bAAAFdklEQVR4AdSagXkUNxCFz67AdGAqCHRgKghUYKcCnAqACjAV4FRAqABcAUkFuAPowPl/5bQ5e+9utauZI/jTrPa00szT02ik1fp4deC/u7u7U+Q18gn5htT0hZv3yPMDQ0oxdzBiIUxCP9CLr8gr5Aw5QWp6ws0F8oG6X5Fz7v83CTwnSiuggxALIEn7AqhWbzyl7jXt3pL/kIRtiRxmFiC+KZSbnF1vuREnxeOUTizGK6mb3jlGsr3kkvbvtz/KKcVeIRTtu2YWj1b26XK1WjmzDF8jglOJBaQGnf5gWJwu0HMQz8WOeD+B1FDV6giGL9cL29L035RKLCYEeM8gZUuSnmtMXtK2qc0GqXpjU5uNSvbR8DC0TSMWoBLhaG7Y77p1kLoUTDQ25EjQRLWdj/VwF17zVRqxmI9e1c8YrAIa3aEJvTqAjtCr14EpDpBJbATQhx399WFB0O9CRpAu14STFGLxAD3L0QvCOqgZYthQ0nkDVh0gEqt9P08hlr6qnCw8ZejNmAXPs4gNZzRRYfMsmIHhNIvYyKk1oz+LqmbMgjRiM8AuYu1HNcry2F+SOpQxbW8TsN5mEdt62DK3Txkh5ucglu2LXqXMJa2lvgckbo9a6rbW+dhacUa96wyPjdxsb+tLqP6jo6PPGPkLiUrfUXQTSize+hqlWWEA1SX5ahv9uvx70RxzuWKw4mIspPq+HepNe/p5hb2weAsReu0fe+y1PrpF1xsrh3gsnfTQ19MhdR5C3M55BhoZy+1DT0hwEXxWO99FLITW71gHOYiuoNe5HusZqOFnXbQ8w9OMjRLz5wItDsgzdEhuab6IWAg1zknmnO9YxWDC5RV4/ERyTq4nLzYBMd+RFyj4DRlI4n5XcjAc2HukWnkvsQDVI1+S+11H8SDXb0F+vnDqdHVEAEGi916jS4LFKMlPwD2JjzajBLnXyGMeSLAerEdKoiLhltn/x9R7g1hO9f/SVmIBpEdKniReUd2FSXHFtxMULU4uFOp5BKCS0PQIcX8qOdwuThKpbvU4m/y/BWOxRM/GDTgJfkH+FBGvIpmWvaNsRGhFPiIWUiVSUu1orReRO9JngHHafCQfQHmP3CB6iJ6iR0TYVIf9kGgJdtpali73iIVUCX2ZYNWp5KjfTOmGXLcsxrloEvRY47ELnvdTULqeD8RCqp7q6HYp3NJYT3XqDB66pc6oCILdD4pp9KyzwC2a3mvY6FS1u3khFlKNnxmequULSJJc72cJ7Xwj0ttntWuorMf2/r/DXjOFWGpkvTEZ/CenP/b3Jcnd93zpMxfo6FfjAcsx3uoq6ggOhYE3TucudXituwgXny49OxpHx/HBjB6b8TFNA58hZVEIsPEDiXiPf6Cy/HSfnrGulH/YMJgXK8GXMC9jgPRaJRhiUZfiWHpsFrF/F9hxl8i97SaqlDAosZtGou59545ezTNO+u1vGrGz9pciaZBoUleEg+Z43YBvs0pG/0uMzQAcTuyaiQysa9WxmaEgY1HIIjZDb4bO4rHRscupFa2zulOGE6QsisfELsEqFXxv7tuW5Pbq2dbe/Wykbg98et8Mt+EsHusDj+siABsD36kwQ3ACMUYezKS+edUVt/f10057iiW5GbxWnQ5chA1nljOg6g3NXbyKQrxBT1g6gpLqAXbKQlAAri/gLLb42UOubbMOd4C2GkJB+QFovdYvlRouZQ0X47OH2OmkVizgFN9cnLV5xesA1bLwfPDYqhnQHp74ecS4u48sAdZPLXa0qjhIDk5tPsWYM41sMknkJe2cWd5PNuipMCK2KgOAMUjg9UOfh+FKKeO5AFNW1IphKgeDr85O6eoIDvYmaZLvdqp+UTU+T6kNef4PAAAA///KIVJ0AAAABklEQVQDAK+n2cJazfQSAAAAAElFTkSuQmCC"
        id="image0_7_3"
        width="86"
        height="46"
        preserveAspectRatio="none"
      ></image>
    </defs>
  </svg>
);

export default SvgIcon;