import React,{ Component } from 'react';
import Title from './title/title';
import HeaderCssClases from './header.module.css';

import PropTypes from 'prop-types';
// const Header = () => {
//     return (
//         <div className={HeaderCssClases.HeadFull}>
//             <Title/>
//             <MenuBar></MenuBar>
//         </div>
//     );
// };
class Header extends Component {
    
  
    render() {
    //   const { path } = this.props.match;
     
      return (
        <div className={HeaderCssClases.HeadFull}>
            <Title/>
        </div>
      );
    }
  }
  
// class Header extends React.Component {
//     renderTitle() {
//       return Header
//     }
//   }
  export default Header