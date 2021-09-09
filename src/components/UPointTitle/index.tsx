import './index.less'
import point from './point.png'

export default ({title}: {title: string}) => {
  return (
    <div className="UPointTitle" style={{display:'flex',alignItems:'center'}}>
      <img src={point} alt='点' style={{width:'17px'}}/>
      <span>{title}</span>
    </div>
  )
}
