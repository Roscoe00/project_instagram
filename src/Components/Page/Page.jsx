import './Page.scss';
import Description from '../../Components/Description/Description';
import Profile from '../../Components/Profile/Profile';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';

const Page = (props) => {
   const { description, userName } = props;
   return (
      <div className="Page">
         <Profile />
         <Description description={description} userName={userName} />
         <ProfileInfo />
      </div>
   );
}

export default Page;