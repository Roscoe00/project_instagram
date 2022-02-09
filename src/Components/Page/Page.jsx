import './Page.scss';
import Description from '../../Components/Description/Description';
import Profile from '../../Components/Profile/Profile';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
import UploadsList from '../../Components/UploadsList/UploadsList';

const Page = (props) => {
   const { description, userName, followers, following, uploads, images } = props;
   console.log(images)
   return (
      <div className="Page">
         <Profile />
         <Description description={description} userName={userName} />
         <ProfileInfo followers={followers} following={following} uploads={uploads} />
         <UploadsList images={images} />
      </div>
   );
}

export default Page;