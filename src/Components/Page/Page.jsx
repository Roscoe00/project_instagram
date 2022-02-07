import './Page.scss';
import Description from '../../Components/Description/Description';
import Profile from '../../Components/Profile/Profile';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';

function Page() {
   return (
      <div className="Page">
         <Profile />
         <Description />
         <ProfileInfo />
      </div>
   );
}

export default Page;