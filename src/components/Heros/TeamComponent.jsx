import React from 'react'
import './team.scss';



const TeamComponent = ({img,name,info,tel,email}) => {
  return (
    <div className="card">
        <img className='user' src={img} alt="" />
        <p className="name">{name}</p>
        <p className="user_info">{info}</p>
        <p className="phone">{tel}</p>
        <p className="email">{email}</p>
    </div>
  )
}

// class TeamComponent extends Component {
//     render(){
//         const {img,name,info,tel,email} = this.props;
//       return (
//         <div className="card">
//             <img className='user' src={img} alt="" />
//             <p className="name">{name}</p>
//             <p className="user_info">{info}</p>
//             <p className="phone">{tel}</p>
//             <p className="email">{email}</p>
//         </div>
//       )
//     }
// }

export default TeamComponent