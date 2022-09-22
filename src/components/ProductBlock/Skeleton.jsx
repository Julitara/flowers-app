import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="132" cy="143" r="112" /> 
    <rect x="0" y="285" rx="10" ry="10" width="280" height="29" /> 
    <rect x="2" y="337" rx="10" ry="10" width="280" height="95" /> 
    <rect x="7" y="478" rx="10" ry="10" width="100" height="38" /> 
    <rect x="123" y="467" rx="27" ry="27" width="156" height="60" />
  </ContentLoader>
)

export default Skeleton;